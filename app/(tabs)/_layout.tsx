import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

const TabIcon = ({focused, icon, title}: any   ) => {
    if (focused) {
        return (
            <View className="bg-primary flex flex-row w-full flex-1 min-w-[112px] min-h-16
                                                mt-4 justify-center items-center rounded-full overflow-hidden">
                <Image source={icon} tintColor="#FFFFFF" className="size-3"/>
                <Text className="text-white font-semibold ml-2">{title}</Text>
            </View>
        )
    }

    return (
        <View className="size-full justify-center items-center rounded-full mt-4">
            <Image source={icon} tintColor="#A52424" className="size-5"/>
        </View>
    )
}

const _Layout/**/ = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#FAD2CF',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#FAD2CF',
                }
            }}
        >
            <Tabs.Screen
                name="project"
                options={{
                    title: 'Project',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.project}
                            title="Project"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="market"
                options={{
                    title: 'Market',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.market}
                            title="Market"
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default _Layout;
