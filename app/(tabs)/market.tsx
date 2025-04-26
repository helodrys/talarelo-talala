import React, { Component } from 'react'
import {ImageBackground, Text, View} from 'react-native'
import {Redirect} from "expo-router";
import {images} from "@/constants/images";

export default function Market() {
    return (
        <ImageBackground
            source={images.err_page}
            className="w-full flex-1"
            resizeMode="cover"
        >
            <View className="flex-1" />
        </ImageBackground>

    )
}
