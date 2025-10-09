import { useRouter } from "expo-router";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* 가장 아래 배경 */}
      <ImageBackground
        source={require("../../assets/images/background-morning.png")}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {/* sky.gif를 분리해서 겹침 */}
        <View
        style={{
            position: "absolute",
            top: 40,
            width: "100%",
            height: "100%",
        }}
        pointerEvents="none" // 👈 이건 View에만 가능
        >
        <Image
            source={require("../../assets/images/sky.gif")}
            style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            }}
        />
        </View>
        {/* 이제 나머지 UI 요소들은 그대로 */}
        <View style={[styles.view2, styles.viewFlexBox2]}>
          <Image
            style={styles.item2}
            width={20}
            height={14}
            resizeMode="contain"
            source={require("../../assets/images/icon-seed.png")}
          />
          <View style={[styles.view3, styles.viewFlexBox2]}>
            <Text style={styles.text15}>1234 개</Text>
          </View>
        </View>
        <Pressable
        onPress={() => router.push("/deco")} hitSlop={10}
        style={[
            styles.item,
            { zIndex: 10 },
        ]}
        >
        <Image
            source={require("../../assets/images/icon-deco.png")}
            resizeMode="contain"
            style={{ width: 32, height: 32 }}
        />
        </Pressable>
        <Image
          source={require("../../assets/images/terrarium.png")}
          style={{
            width: 440,
            height: 440,
            top: 20,
          }}
        />

        <ImageBackground
          source={require("../../assets/images/homeborder.png")}
          style={{
            width: 248,
            height: 60,
            bottom: -100,
          }}
          resizeMode="contain"
        >
          <Text style={styles.text1}>오늘의 남은 루틴 : 7개</Text>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({

    view2: {
        top: 40,
        left: 34, // 화면 왼쪽에서 약간 띄우기
        position: "absolute",
        zIndex: 10, // 최상단으로
        boxShadow: "2px 2px 12px rgba(158, 164, 169, 0.25)",
        shadowColor: "rgba(158, 164, 169, 0.25)",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 12,
        elevation: 12,
        shadowOpacity: 1,
        backgroundColor: "rgba(255, 255, 255, 0.6)", // 조금 더 선명하게
        borderStyle: "solid",
        borderColor: "#fff",
        borderWidth: 0.8,
        height: 28,
        paddingHorizontal: 8,
        paddingVertical: 7,
        gap: 2,
        borderRadius: 30,
        alignItems: "center",
        flexDirection: "row", // flexbox로 내부 정렬
    },
        viewFlexBox2: {
                alignItems: "center",
                flexDirection: "row"
        },
        item2: {
                width: 20,
                height: 14
        },
            view3: {
                justifyContent: "center",
                paddingLeft: 4,
                alignItems: "center",
                overflow: "hidden",
                marginTop: -2
        },
        text15: {
        fontSize: 12,
        fontWeight: "600",
        color: "#26282c",
        fontFamily: "NanumSquareNeo-Bd",
        },
        text1 : {
        fontSize: 20,
        fontWeight: "600",
        color: "#26282c",
        fontFamily: "NanumSquareNeo-Bd",
        left : 36,
        bottom : -20
        },
        view : {
            top: 10
        },
        item: {
            position: "absolute",
    		width: 36,
    		height: 36,
            left : 340,
            top : 40
        
  	},
})