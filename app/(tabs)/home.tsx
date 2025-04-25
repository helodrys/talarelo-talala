import {Image, Text, View} from 'react-native'
import {images} from "@/constants/images";

const Home = () =>  {
    return (
      <View className="w-full h-full flex-1">
          <Image source={images.header} className="w-full h-auto" resizeMode="contain"/>
          <Text> textInComponent </Text>
      </View>
    )
}

export default Home;