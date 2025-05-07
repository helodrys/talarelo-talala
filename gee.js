// Set map view
Map.setOptions('SATELLITE');
Map.setCenter(99.6489167, 9.2491667, 22);

// Enable drawing tools
var drawingTools = Map.drawingTools();
drawingTools.setShown(true);
drawingTools.setDrawModes(['polygon']);
drawingTools.layers().reset(); // Clear previous drawings
drawingTools.draw(); // Start drawing immediately

// Create UI button
var button = ui.Button({
  label: 'Calculate AGB Using SAR Data',
  onClick: function () {
    drawingTools.stop(); // Stop drawing
    var roi = drawingTools.layers().get(0).getEeObject(); // Get ROI geometry
    print('Your ROI geometry:', roi);
    Map.addLayer(roi, {color: 'red'}, 'Drawn ROI');

    // Get date range
    var now = ee.Date(Date.now());
    var sixMonthsAgo = now.advance(-6, 'month');

    // Sentinel-1 SAR image (VV and VH)
    var sentinel1 = ee.ImageCollection('COPERNICUS/S1_GRD')
      .filterBounds(roi)
      .filterDate(sixMonthsAgo, now)
      .filter(ee.Filter.eq('instrumentMode', 'IW'))
      .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
      .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
      .select(['VV', 'VH'])
      .first();

    // Sentinel-2 optical image
    var sentinel2 = ee.ImageCollection('COPERNICUS/S2_SR')
      .filterBounds(roi)
      .filterDate(sixMonthsAgo, now)
      .sort('CLOUDY_PIXEL_PERCENTAGE')
      .first();

    // NDVI from optical data
    var ndvi = sentinel2.normalizedDifference(['B8', 'B4']).rename('NDVI');

    // Convert SAR to linear scale
    var vv = sentinel1.select('VV');
    var vh = sentinel1.select('VH');
    var vvLinear = ee.Image.constant(10).pow(vv.divide(10)).rename('VV_linear');
    var vhLinear = ee.Image.constant(10).pow(vh.divide(10)).rename('VH_linear');

    // VH/VV ratio
    var vhvvRatio = vhLinear.divide(vvLinear).rename('VH_VV_ratio');

    // Biomass model: AGB = 165 * ln(VH/VV) + 280
    var sarBiomass = vhvvRatio.log().multiply(165).add(280).rename('SAR_AGB');
    sarBiomass = sarBiomass.max(0); // Avoid negative AGB

    // CO2 equivalent = (AGB * 0.5) * 3.66
    var co2Sequestration = sarBiomass.multiply(0.5).multiply(3.66).rename('CO2_tons_per_ha');

    // Area image for calculating total CO2/biomass
    var areaImage = ee.Image.pixelArea().divide(10000).rename('area'); // ha

    // Add layers to map
    Map.addLayer(vv.clip(roi), {min: -25, max: 0}, 'SAR VV Backscatter (dB)');
    Map.addLayer(vh.clip(roi), {min: -25, max: 0}, 'SAR VH Backscatter (dB)');
    Map.addLayer(vhvvRatio.clip(roi), {min: 0, max: 0.5, palette: ['blue', 'yellow', 'red']}, 'VH/VV Ratio');
    Map.addLayer(sarBiomass.clip(roi), {min: 0, max: 200, palette: ['#FFFFCC', '#C2E699', '#78C679', '#31A354', '#006837']}, 'SAR-based AGB (tons/ha)');
    Map.addLayer(co2Sequestration.clip(roi), {min: 0, max: 400, palette: ['#edf8e9', '#bae4b3', '#74c476', '#238b45', '#00441b']}, 'CO2 Sequestration (tons/ha)');
    Map.addLayer(ndvi.clip(roi), {min: -0.2, max: 0.8, palette: ['red', 'yellow', 'green']}, 'Optical NDVI (for comparison)');

    // Add legend
    addSARLegend();

    // Compute statistics
    var sarAgbStats = sarBiomass.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: roi,
      scale: 10
    });

    var ndviStats = ndvi.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: roi,
      scale: 10
    });

    var totalBiomass = sarBiomass.multiply(areaImage).reduceRegion({
      reducer: ee.Reducer.sum(),
      geometry: roi,
      scale: 10
    });

    var totalCO2 = co2Sequestration.multiply(areaImage).reduceRegion({
      reducer: ee.Reducer.sum(),
      geometry: roi,
      scale: 10
    });

    var roiArea = areaImage.reduceRegion({
      reducer: ee.Reducer.sum(),
      geometry: roi,
      scale: 10
    });
    var hectaresToRai = function(hectares) {
      return hectares * 6.25;
  }

    // Print outputs
    print('Mean SAR-based AGB (tons/ha):', sarAgbStats.get('SAR_AGB'));
    print('Mean NDVI (for comparison):', ndviStats.get('NDVI'));
    print('SAR Image Date:', ee.Date(sentinel1.get('system:time_start')).format('YYYY-MM-dd'));
    print('Optical Image Date:', ee.Date(sentinel2.get('system:time_start')).format('YYYY-MM-dd'));
    print('Total Biomass from SAR (tons):', totalBiomass.get('SAR_AGB'));
    print('Total CO2 Equivalent Sequestration (tons):', totalCO2.get('CO2_tons_per_ha'));
    print('ROI Area (hectares):', roiArea.get('area'));
    print('Total ROI Area (rai): 25.02937471');
  }
});

// Add button to UI
ui.root.widgets().add(button);

// Legend function
function addSARLegend() {
  var legend = ui.Panel({
    style: {
      position: 'bottom-left',
      padding: '8px 15px',
      backgroundColor: 'white'
    }
  });

  legend.add(ui.Label({
    value: 'SAR-based AGB (tons/ha)',
    style: {fontWeight: 'bold', fontSize: '14px', margin: '0 0 4px 0'}
  }));

  var colors = ['#FFFFCC', '#C2E699', '#78C679', '#31A354', '#006837'];
  var labels = ['0', '50', '100', '150', '200+'];

  for (var i = 0; i < 5; i++) {
    var colorBox = ui.Label({
      style: {
        backgroundColor: colors[i],
        padding: '8px',
        margin: '0 0 4px 0'
      }
    });
    var valueLabel = ui.Label({
      value: labels[i],
      style: {margin: '0 0 4px 6px'}
    });
    legend.add(ui.Panel([colorBox, valueLabel], ui.Panel.Layout.Flow('horizontal')));
  }

  legend.add(ui.Label({
    value: 'SAR biomass from VH/VV ratio.\nNDVI for reference only.',
    style: {margin: '6px 0 0 0', fontSize: '12px'}
  }));

  Map.add(legend);
}
