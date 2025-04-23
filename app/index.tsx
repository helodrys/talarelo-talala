import {Image, Text, View} from "react-native";
import {icons} from "@/constants/icons";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={icons.welcome} />
    </View>
  )
}
