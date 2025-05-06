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
                className="w-full h-64"
                resizeMode="cover"
            />

            {/* About image starts slightly overlapping the bottom of the header */}
            <View className="-mt-40">
                <Pressable onPress={() => router.push('/home/errs')}>
                    <Image
                        source={images.mainmenu_frame}
                        className="w-full h-[600px]"
                        resizeMode="cover"
                    />
                </Pressable>
            </View>
        </ScrollView>
    );
}
