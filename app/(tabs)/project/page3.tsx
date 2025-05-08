import {Text, View, Image, Dimensions, Pressable} from 'react-native'
import {images} from "@/constants/images";
import {router} from "expo-router";
import React from "react";
const { width } = Dimensions.get('window');

export default function Page3(){
    return (
        <View className="flex-1 bg-white items-center">
            <Image
                source={images.confirm}
                className="w-11/12 h-full -mt-20"
                resizeMode="contain"
            />
            <View className="ml-10 mr-10 flex-row justify-between -mt-28 mb-48">
                <Pressable
                    className="bg-green-500 flex-1 mr-2 py-4 rounded-full items-center"
                    onPress={() => router.push('/project/page4')}
                >
                    <Text className="text-white font-semibold">ยืนยันข้อมูล</Text>
                </Pressable>

                <Pressable className="bg-red-500 flex-1 ml-3 py-4 rounded-full items-center"
                           onPress={() => router.push('/project/page2')}>
                    <Text className="text-white font-semibold">ย้อนกลับ</Text>
                </Pressable>
            </View>
        </View>
    )
}