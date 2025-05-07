import { Text, View, Image } from 'react-native'
import {images} from "@/constants/images";

export default function Page3(){
    return (
      <View className="flex-1">
         <Image source={images.confirm} className="w-full h-auto" resizeMode="contain" />
        <Text> textInComponent </Text>
      </View>
    )
}