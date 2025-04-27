import {View, Text, TouchableOpacity, Image} from "react-native";
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const Card = () => {
    <View className="w-[102px] h-[113px] flex-shrink-0 rounded-[10px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <Image source={icons.circle} className="w-[66px]"/>
    </View>
}

export default Card;