import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import {router} from "expo-router";

export default function Index() {
    const [name, setName] = useState('');
    const [idCard, setIdCard] = useState('');
    const [phone, setPhone] = useState('');
    const [familyMembers, setFamilyMembers] = useState('');
    const [monthlyIncome, setMonthlyIncome] = useState('');
    const [address, setAddress] = useState('');
    const [mainIncome, setMainIncome] = useState('');

    return (
        <View className="flex-1 bg-white">
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {/* Yellow Header */}
                <View className="bg-yellow-400 rounded-b-2xl p-4">
                    <Text className="text-lg font-bold text-center text-black">ดำเนินโครงการโดย</Text>
                    <View className="flex-row justify-around mt-3">
                        <Pressable className="bg-white px-4 py-2 rounded-full">
                            <Text>👩‍🌾 เกษตรกร </Text>
                        </Pressable>
                        <Pressable className="bg-white px-4 py-2 rounded-full">
                            <Text>👨‍🌾 กลุ่มเกษตรกร </Text>
                        </Pressable>
                        <Pressable className="bg-white px-4 py-2 rounded-full">
                            <Text>🏪 สหกรณ์ </Text>
                        </Pressable>
                    </View>
                </View>

                {/* White Form */}
                <View className="bg-white mx-4 mt-6 p-4 rounded-2xl shadow-md">
                    <Text className="font-semibold mb-2">ชื่อ - สกุล *</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        className="border border-green-400 rounded-lg p-2 mb-4"
                        placeholder="ชื่อ นามสกุล"
                    />

                    <Text className="font-semibold mb-2">เลขบัตรประชาชน *</Text>
                    <TextInput
                        value={idCard}
                        onChangeText={setIdCard}
                        className="border border-green-400 rounded-lg p-2 mb-4"
                        placeholder="1-1111-11111-11-1"
                    />

                    <Text className="font-semibold mb-2">เบอร์โทรศัพท์ *</Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        className="border border-green-400 rounded-lg p-2 mb-4"
                        placeholder="Typing"
                    />

                    <View className="flex-row justify-between mb-4">
                        <View className="flex-1 mr-2">
                            <Text className="font-semibold mb-2">สมาชิกในครอบครัว *</Text>
                            <TextInput
                                value={familyMembers}
                                onChangeText={setFamilyMembers}
                                className="border border-green-400 rounded-lg p-2"
                                placeholder="3"
                            />
                        </View>
                        <View className="flex-1 ml-2">
                            <Text className="font-semibold mb-2">รายได้ต่อเดือน *</Text>
                            <TextInput
                                value={monthlyIncome}
                                onChangeText={setMonthlyIncome}
                                className="border border-green-400 rounded-lg p-2"
                                placeholder="12,500"
                            />
                        </View>
                    </View>

                    <Text className="font-semibold mb-2">ที่อยู่ปัจจุบัน *</Text>
                    <TextInput
                        value={address}
                        onChangeText={setAddress}
                        className="border border-green-400 rounded-lg p-2 mb-4"
                        placeholder="ตามบัตรประชาชน"
                    />

                    <Text className="font-semibold mb-2">รายได้หลัก *</Text>
                    <TextInput
                        value={mainIncome}
                        onChangeText={setMainIncome}
                        className="border border-green-400 rounded-lg p-2"
                        placeholder="Typing"
                    />
                </View>

                {/* Buttons */}
                <View className="ml-10 mr-10 flex-row justify-around mt-6 mx-4">
                    <Pressable className="bg-green-500 flex-1 mr-2 py-3 rounded-full items-center "
                               onPress={() => router.push('/project/page2')}>
                        <Text className="text-white font-semibold">ยืนยันข้อมูล</Text>
                    </Pressable>
                    <Pressable className="bg-red-500 flex-1 ml-2 py-3 rounded-full items-center">
                        <Text className="text-white font-semibold">ย้อนกลับ</Text>
                    </Pressable>
                </View>

            </ScrollView>

            {/* Optional: Bottom Tab Bar (if you have) */}
            {/* You can build another bottom bar separately if needed */}
        </View>
    );
}
