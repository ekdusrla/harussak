import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function Deco() {

    const router = useRouter();

    return(
            <View>
                <Pressable
                style={styles.iconBack}
                onPress={() => router.back()}
              >
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={require("../assets/images/icon-back.png")}
                />
              </Pressable>
        <Image
                    source={require("../assets/images/terrarium.png")}
                    style={{
                        width: 440,
                        height: 440,
                        top : 20
                    }}
                />
            </View>  
    )
}

const styles = StyleSheet.create({
    iconBack: {
        position: "absolute",
        top: 36,
        left: 20,
        zIndex: 10,
  },
    icon: {
        width: 20,
        height: 20,
    },
})
