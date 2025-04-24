import {Image, Text, View} from "react-native";
import {icons} from "@/constants/icons";

export default function Index() {
    return (
        <View className="flex w-full h-full p-[22px_15px] flex-col justify-center items-center bg-primary">
            <View className="w-[98%] h-[98%] flex-shrink-0 rounded-[40px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <Image source={icons.welcome} className="w-[250px] mt-16 ml-8" />
                <Text className="ml-8 mt-3 mr-7">ระบบจัดทำโครงการคาร์บอนเครดิตผ่านแอปพลิเคชั่นในมือถือ
                    มุ่งเน้นการให้บริการที่เข้าถึงและใช้งานง่ายต่อเกษตรกร
                    ลดระยะเวลาที่จะการเริ่มดำเนินผลและเก็บข้อมูล</Text>
            </View>
        </View>
    )
}
