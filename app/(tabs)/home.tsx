import { View, ScrollView, Image, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "@/constants/images";

const Home = () =>  {
    return (
        <View className="flex-1 w-full">
            <ScrollView className="flex-1 w-full" showsVerticalScrollIndicator={false}
                        contentContainerStyle={{minHeight: "100%"}}>
                <Image
                    source={images.header}
                    className="w-full h-auto"
                    resizeMode="contain"
                />
                <Text className="text-black text-base">
                    textInComponent
                </Text>
            </ScrollView>
        </View>
    )
}

export default Home;