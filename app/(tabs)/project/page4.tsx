import React from 'react';
import { View, Image, ScrollView, ImageBackground } from 'react-native';
import { images } from "@/constants/images";

export default function Page4() {
    return (
        <ScrollView className="flex-1 bg-white">
            {/* Header image at top */}
            <ImageBackground
                source={images.header}
                className="w-full h-80"
                resizeMode="cover"
            />

            {/* About image starts slightly overlapping the bottom of the header */}
            <View className="-mt-48">
                <Image
                    source={images.about}
                    className="w-full h-[960px]"
                    resizeMode="cover"
                />
            </View>
        </ScrollView>
    );
}
