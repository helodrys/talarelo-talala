import {Image, Pressable, Text, View} from "react-native";
import {icons} from "@/constants/icons";
import { useRouter } from "expo-router";


export default function Index() {

   const router = useRouter();
    return (
        <View className="flex-1 w-full h-full p-[22px_15px] flex-col justify-center items-center bg-primary">
            <View className="w-[98%] h-[98%] flex-shrink-0 rounded-[40px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
                <Image source={icons.welcome} className="w-[250px] mt-16 ml-8" />
                <Text className="ml-8 mt-3 mr-7">ระบบจัดทำโครงการคาร์บอนเครดิตผ่านแอปพลิเคชั่นในมือถือ
                    มุ่งเน้นการให้บริการที่เข้าถึงและใช้งานง่ายต่อเกษตรกร
                    ลดระยะเวลาที่จะการเริ่มดำเนินผลและเก็บข้อมูล</Text>

                <Image source={icons.green} className="w-full" resizeMode="cover"/>
                <View className="w-full items-center">
                        <Pressable onPress={() => router.push("/(tabs)/home")} className="mx-auto">
                            <Image source={icons.go_button} />
                        </Pressable>
                </View>
            </View>
        </View>
    )
}
