import React from 'react';
import {View, Image, ScrollView, ImageBackground, Pressable} from 'react-native';
import { images } from "@/constants/images";
import { useRouter } from "expo-router";

export default function Page3() {
    const router = useRouter();
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
                        source={images.mainmenu_frame}
                        className="w-full h-[700px]"
                        resizeMode="cover"
                    />
            </View>
        </ScrollView>
    );
}
