import {View, Text, TouchableOpacity, Image, ImageBackground} from "react-native";
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const Card = ({id, title , color, pic}: { id: any, title: string, color: string, pic: any}) => {
    return (
        <View className="w-[102px] h-[113px] flex-shrink-0 rounded-[10px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] justify-center items-center">
            <ImageBackground
                source={icons.circle}
                className="w-[66px] h-[66px] mt-[10px] ml-[18px] justify-center items-center"
                tintColor="#A52424"
                resizeMode="contain"
            >
                <Image
                    source={{ uri: pic }}
                    className="w-[40px] h-[40px]"
                    resizeMode="contain"
                />
            </ImageBackground>
            <Text className="text-center text-black mt-20 ml-2">{title}</Text>
        </View>
    );
};

export default Card;