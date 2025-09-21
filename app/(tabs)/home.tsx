import { Image, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={{flex : 1, justifyContent : "center", alignItems : "center"}}>
            <Text> Home </Text>
            <Image
                        source={require("../../assets/images/flower-hygendra.png")}
                        style={{
                        width: 160,
                        height: 160,
                        resizeMode: "contain",
                        }}
                    />
            <Image
                    source={require("../../assets/images/deco-castle.png")}
                    style={{
                    width: 160,
                    height: 160,
                    resizeMode: "contain",
                    }}
                />
        </View>
    );
}