import { View, Text, TouchableOpacity, Image, Pressable, ScrollView} from 'react-native';
import { images } from "@/constants/images";
import { router } from "expo-router";

export default function Index() {
    return (
        <View className="flex-1 bg-white items-center">
            <Pressable onPress={() => router.push('/project/page1')} className="w-11/12 absolute -mt-52">
                <Image source={images.rice} className="w-full" resizeMode="contain"></Image>
            </Pressable>

            <Pressable onPress={() => router.push('/project/page1')} className="w-11/12 absolute mt-52">
                <Image source={images.palm} className="w-full" resizeMode="contain"></Image>
            </Pressable>
        </View>
    )
}