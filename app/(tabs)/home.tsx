import {View, ScrollView, Image, Text, FlatList} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "@/constants/images";
import Card from "@/component/Card";
import DATA from "@/data/data.json";

const Home = () =>  {
    return (
        <View className="flex-1 w-full">
            <ScrollView className="flex-1 w-full" showsVerticalScrollIndicator={false}
                        contentContainerStyle={{minHeight: "100%"}}>
                <Image
                    source={images.header}
                    className="w-full h-auto"
                    resizeMode="contain"
                />
                {/*<FlatList*/}
                {/*    data={DATA}*/}
                {/*    renderItem={({item}) => (*/}
                {/*        <Card*/}
                {/*            {... item}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*    keyExtractor={(item) => item.id.toString()}*/}
                {/*    numColumns={3}*/}
                {/*    columnWrapperStyle={{*/}
                {/*        justifyContent: 'flex-start',*/}
                {/*        gap: 20,*/}
                {/*        paddingRight: 5,*/}
                {/*        marginBottom: 10*/}
                {/*    }}*/}

                {/*    className="mt-2 pb-32"*/}
                {/*    scrollEnabled={false}*/}
                {/*/>*/}
                <Text className="text-black text-base">
                    textInComponent
                </Text>
            </ScrollView>
        </View>
    )
}

export default Home;