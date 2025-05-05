import { View, Text, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function LoadingScreen() {
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/project/page3'); // <- Change to your destination route
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <View className="flex-1 justify-center items-center bg-white">
            <ActivityIndicator size="large" color="#A52424" />
            <Text className="mt-4 text-lg text-gray-700">กำลังทำการวิเคราะห์ข้อมูล ...</Text>
        </View>
    );
}
