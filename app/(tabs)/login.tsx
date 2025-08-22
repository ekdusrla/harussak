import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Login() {
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <View style={[styles.child, styles.textPosition1]} />
                <Image style={[styles.icon, styles.iconPosition]} resizeMode="contain" source={require("../../assets/images/kakao.png")} />
                <Image style={[styles.icon1, styles.iconPosition]} resizeMode="contain" source={require("../../assets/images/google.png")} />
                <View style={styles.item} />
                <Text style={[styles.text1, styles.textTypo]}>회원이 아니신가요?</Text>
                    <Pressable style={[styles.wrapper, styles.view2FlexBox]} onPress={()=>{}}>
                            <Text style={styles.text2}>회원가입</Text>
                    </Pressable>
                    <View style={[styles.view2, styles.view2FlexBox]}>
                            <Text style={[styles.text3, styles.textTypo]}>소셜 로그인</Text>
                    </View>
                    <View style={styles.lineargradient}>
                            <Pressable style={[styles.pressable, styles.pressableShadowBox]} onPress={()=>{}}>
                                <Text style={[styles.text4, styles.textPosition]}>비밀번호</Text>
                                <Image style={styles.iconPw} resizeMode="cover" source={require("../../assets/images/icon-pw.png")} />
                                <Image style={[styles.iconHide, styles.textPosition1]} resizeMode="cover" source={require("../../assets/images/icon-hide.png")} />
                            </Pressable>
                    </View>
                    <Text style={[styles.text5, styles.textPosition1]}>로고영역</Text>
                    <View style={styles.lineargradient}>
                            <Pressable style={[styles.pressable1, styles.pressableShadowBox]} onPress={()=>{}}>
                                <Image style={styles.iconPw} resizeMode="cover" source={require("../../assets/images/icon-id.png")} />
                                <Text style={[styles.text6, styles.textPosition]}>이메일</Text>
                            </Pressable>
                    </View>
                    <Pressable style={styles.pressable2} onPress={()=>{}}>
                            <Text style={styles.text7}>로그인</Text>
                    </Pressable>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    view: {
            backgroundColor: "#f8f8f8",
            flex: 1
    },
    textPosition1: {
            left: "50%",
            top: "50%",
            position: "absolute"
    },
    iconPosition: {
            height: 56,
            width: 56,
            borderRadius: 100,
            marginTop: 233,
            left: "50%",
            top: "50%",
            position: "absolute",
            overflow: "hidden"
    },
    textTypo: {
            color: "#9ea4a9",
            textAlign: "center",
            fontFamily: "Pretendard-Regular",
            fontWeight: "300",
            lineHeight: 22,
            letterSpacing: -0.43,
            fontSize: 12
    },
    view2FlexBox: {
            justifyContent: "center",
            width: 60,
            alignItems: "center",
            flexDirection: "row",
            left: "50%",
            top: "50%",
            position: "absolute"
    },
    pressableShadowBox: {
            borderWidth: 0.4,
            borderColor: "#ffffff",
            backgroundColor: "#fafafa",
            borderRadius: 30,
            elevation: 6,
            shadowColor: "rgba(0, 0, 0, 0.3)",
            marginLeft: -160,
            borderStyle: "solid",
            height: "100%",
            overflow: "hidden",
            width: "100%"
    },
    textPosition: {
            letterSpacing: 0.43,
            marginLeft: -100,
            fontFamily: "NanumSquareNeo-Rg",
            fontSize: 16,
            color: "#9ea4a9",
            lineHeight: 22,
            textAlign: "left",
            left: "50%",
            position: "absolute"
    },
    child: {
            marginTop: -299,
            marginLeft: -130,
            backgroundColor: "#d9d9d9",
            width: 260,
            height: 120
    },
    icon: {
            marginLeft: -64,
            width : 39,
            height : 39,
    },
    icon1: {
            marginLeft: 8
    },
    item: {
            marginTop: 209.85,
            marginLeft: -147.15,
            borderColor: "#9ea4a9",
            borderTopWidth: 0.3,
            width: 294,
            height: 0,
            borderStyle: "solid",
            left: "50%",
            top: "50%",
            position: "absolute"
    },
    text1: {
            marginTop: 325,
            marginLeft: -70,
            textAlign: "center",
            left: "50%",
            top: "50%",
            position: "absolute"
    },
    text2: {
            textDecorationLine: "underline",
            color: "#26282c",
            textAlign: "center",
            fontFamily: "Pretendard-Regular",
            fontWeight: "300",
            lineHeight: 22,
            letterSpacing: -0.43,
            fontSize: 12
    },
    wrapper: {
            marginTop: 314,
            marginLeft: 18,
            height: 44
    },
    text3: {
            textAlign: "center"
    },
    view2: {
            marginTop: 199,
            marginLeft: -30,
            height: 22,
            backgroundColor: "#f8f8f8"
    },
    text4: {
            top: 18,
            fontFamily: "NanumSquareNeo-Rg"
    },
    iconPw: {
            top: 16,
            left: 20,
            width: 24,
            height: 24,
            position: "absolute",
            overflow: "hidden"
    },
    iconHide: {
            marginTop: -20,
            marginLeft: 100,
            width: 44,
            height: 40,
            overflow: "hidden"
    },
    pressable: {
            marginTop: -31
    },
    lineargradient: {
            height: 60,
            width: 320,
            left: "50%",
            top: "50%",
            position: "absolute",
    },
    text5: {
            marginTop: -259,
            marginLeft: -65,
            fontSize: 34,
            letterSpacing: 0.4,
            lineHeight: 41,
            fontWeight: "800",
            color: "#91e04c",
            fontFamily: "NanumSquareNeo-Rg",
            textAlign: "center"
    },
    text6: {
            top: "30%",
            fontFamily: "NanumSquareNeo-Rg"
    },
    pressable1: {
            marginTop: -110
    },
    text7: {
            fontWeight: "700",
            color: "#fff",
            fontFamily: "NanumSquareNeo-Bd",
            fontSize: 16,
            textAlign: "center",
            lineHeight: 22,
            letterSpacing: -0.43
    },
    pressable2: {
            marginTop: 81,
            borderRadius: 8,
            backgroundColor: "#91e04c",
            height: 52,
            marginLeft: -160,
            width: 320,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            left: "50%",
            top: "50%",
            position: "absolute"
    },
    view1: {
            height: 758,
            overflow: "hidden",
            width: "100%",
            backgroundColor: "#f8f8f8",
            flex: 1
    }
});
