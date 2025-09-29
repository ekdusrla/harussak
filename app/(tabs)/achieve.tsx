import { Image, Text, View } from "react-native";

export default function Achieve() {
    return (
        <View style={{flex : 1, justifyContent : "center", alignItems : "center"}}>
            <Text> Achieve </Text>
            <Image
                        source={require("../../assets/images/flower-freesia.png")}
                        style={{
                        width: 160,
                        height: 160,
                        resizeMode: "contain",
                        }}
                    />
            <Image
                    source={require("../../assets/images/deco-bridge.png")}
                    style={{
                    width: 160,
                    height: 160,
                    resizeMode: "contain",
                    }}
                />
        </View>
    );
}