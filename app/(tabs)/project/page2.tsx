import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import {images} from "@/constants/images";
import {router} from "expo-router";

export default function UploadScreen() {
    const [imageUri, setImageUri] = useState<string | null>(null);

    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert("Permission to access media library is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    return (
        <View className="flex-1 bg-white px-6 py-8 justify-between">
            {/* Header Section */}
            <View className="items-center mt-10">
                <Text className="text-lg font-semibold text-gray-800 mb-2">
                    ข้อมูลพื้นที่จัดทำโครงการ
                </Text>
                <Text className="text-base text-gray-600 text-center">
                    โปรดอัพโหลดโฉนดที่ดินที่จะจัดทำโครงการ
                </Text>
            </View>

            {/* Image Preview Section */}
            <View className="items-center mt-6">
                {imageUri && (
                    <Image
                        source={{ uri: imageUri }}
                        className="w-72 h-96 rounded-2xl border-2 border-gray-500 mb-10"
                        resizeMode="contain"
                    />
                )}

                {/* Upload Button */}
                <TouchableOpacity onPress={pickImage}>
                    <Image
                        source={images.upload}
                        className="w-auto h-24"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            {/* Action Buttons */}
            <View className="flex-row justify-between mt-8 mb-24">
                <Pressable
                    className="bg-green-500 flex-1 mr-2 py-4 rounded-full items-center"
                    onPress={() => router.push('/project/loading')}
                >
                    <Text className="text-white font-semibold">ยืนยันข้อมูล</Text>
                </Pressable>

                <Pressable className="bg-red-500 flex-1 ml-2 py-4 rounded-full items-center">
                    <Text className="text-white font-semibold">ย้อนกลับ</Text>
                </Pressable>
            </View>
        </View>

    );
}
