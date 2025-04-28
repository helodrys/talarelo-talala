import {View, Text, TouchableOpacity, Image, ImageBackground} from "react-native";
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const Card = ({ text , pic}: { text: string, pic: any}) => {
    return (
        <View className="w-[102px] h-[113px] flex-shrink-0 rounded-[10px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] justify-center items-center">
            <ImageBackground
                source={icons.circle}
                className="w-[66px] mt-[10px] ml-[18px]"
                tintColor="#A52424"
                resizeMode="contain"

            />
            <Text className="text-center text-black mt-20 ml-2">{text}</Text>
        </View>
    );
};

export default Card;