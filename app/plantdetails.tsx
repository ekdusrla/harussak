import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";

export default function PlantDetails() {

    const router = useRouter();

        return (
            <Pressable style={[styles.iconBack, styles.wrapPosition]} onPress={() => router.push({ pathname: "/achieve", params: { tab: "plant" } })}>
            <Image style={styles.icon} resizeMode="contain" source={require("../assets/images/icon-back.png")} />
            </Pressable>
    );
}

const styles = StyleSheet.create({
    	 iconBack: {
            top: 0,
            width: 55
    },
            wrapPosition: {
            height: 60,
            left: 0,
            position: "absolute"
    },
            icon: {
        top: 36,
        left: 20,
        width: 20,
        height: 20,
        position: "absolute",
        overflow: "hidden"
    },
})