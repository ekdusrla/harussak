import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";


export default function Signup() {


    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    
    const router = useRouter();

    return (
        <View style={styles.safeareaview}>
                <View style={styles.view}>
                        <View style={styles.lineargradientPosition}>
                                <View style={[styles.pressable, styles.pressableLayout]}>
                                        <TextInput style={[styles.text, styles.textPosition, { color: "#1C1E1F"}]}
                                        placeholder="이메일 주소" placeholderTextColor="#74777D"/>
                                </View>
                        </View>
                        <View style={styles.lineargradientPosition}>
                                <View style={[styles.safeareaviewPressable, styles.pressableLayout]}>
                                <TextInput style={[styles.text, styles.textPosition, { color: "#1C1E1F"}]}
                                placeholder="비밀번호(8자 이상, 문자/숫자/기호)" placeholderTextColor="#74777D" secureTextEntry={!showPassword} />
                                <Pressable style={[styles.iconPosition]} onPress={() => setShowPassword((prev) => !prev)}>
                                <Image style={{ width: 44, height: 40 }} resizeMode="cover"
                                source={
                                showPassword
                                ? require("../../assets/images/icon-show.png")
                                : require("../../assets/images/icon-hide.png")
                                }/>
                                </Pressable>
                                </View>
                        </View>
                        <View style={styles.lineargradientPosition}>
                                <View style={[styles.lineargradient2, styles.pressableLayout]}>
                        <TextInput style={[styles.text, styles.textPosition, { color: "#1C1E1F"}]}
                        placeholder="비밀번호 재입력" placeholderTextColor="#74777D" secureTextEntry={!showPassword}/>
                        </View>
                        </View>
                        <Text style={[styles.text3, styles.textTypo]}>이메일</Text>
                        <Text style={[styles.text4, styles.textTypo]}>비밀번호</Text>
                        <Text style={styles.text5}>비밀번호 확인</Text>
                        <View style={styles.view2}>
                                <Text style={[styles.text6, styles.textTypo1]}>회원가입</Text>
                        </View>
                        <View style={[styles.wrap, styles.wrapPosition]}>
                                <Text style={[styles.text7, styles.textTypo1]}>회원가입</Text>
                                <Pressable style={[styles.iconBack, styles.wrapPosition]} onPress={()=> router.push("./login")}>
                                <Image style={[styles.icon, styles.pressableLayout]} resizeMode="cover" source={require("../../assets/images/icon-back.png")} />
                                </Pressable>
                        </View>
                </View>
        </View>
        );

}

const styles = StyleSheet.create({
    safeareaview: {
            backgroundColor: "#f8f8f8",
            flex: 1
    },
    pressableLayout: {
            borderWidth: 0.4,
            borderColor: "#ffffff",
            backgroundColor: "#fafafa",
            borderRadius: 12,
            elevation: 6,
            marginLeft: -160,
            borderStyle: "solid",
            height: "100%",
            overflow: "hidden",
            width: "100%"
    },
    textPosition: { 
            textAlign: "left",
            left: "50%",
            position: "absolute",
    },
    pressableShadowBox: {
            borderWidth: 0.4,
            borderColor: "#fff",
            borderStyle: "solid",
            backgroundColor: "transparent",
            borderRadius: 12,
            shadowOpacity: 1,
            elevation: 4,
            shadowRadius: 4,
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowColor: "rgba(0, 0, 0, 0.08)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
            overflow: "hidden"
    },
    iconPosition: {
            height: 40,
            width: 44,
            left: 264,
            marginTop: -20,
            top: "50%",
            position: "absolute"
    },
    textTypo: {
            height: 18,
            color: "#26282c",
            fontWeight: "600",
            fontSize: 16,
            marginLeft: -152,
            textAlign: "left",
            fontFamily: "NanumSquareNeo-Bd",
            lineHeight: 22,
            letterSpacing: -0.43,
            top: "50%",
            left: "50%",
            position: "absolute"
    },
    textTypo1: {
            fontWeight: "600",
            fontFamily: "NanumSquareNeo-Bd"
    },
    wrapPosition: {
            height: 60,
            left: 0,
            position: "absolute"
    },
    view: {
            height: 758,
            overflow: "hidden",
            width: "100%",
            backgroundColor: "#f8f8f8",
            flex: 1
    },
    lineargradientPosition: {
            height: 56,
            width: 320,
            top: "50%",
            left: "50%",
            position: "absolute"
    },
    pressable: {
            marginTop: -229,
            borderWidth: 0.4,
            borderColor: "#fff",
            borderStyle: "solid",
            backgroundColor: "transparent",
            borderRadius: 12,
            shadowOpacity: 1,
            elevation: 4,
            shadowRadius: 4,
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowColor: "rgba(0, 0, 0, 0.08)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            marginLeft: -160,
            height: "100%"
    },
    text: {
            marginLeft: -140,
            top: 7,
            fontSize: 14,
            color: "#74777d",
            fontFamily: "NanumSquareNeo-Rg",
            lineHeight: 22,
            letterSpacing: -0.43,
            textAlign: "left",
            backgroundColor: "transparent",
    },
    safeareaviewPressable: {
            marginTop: -111,
            borderWidth: 0.4,
            borderColor: "#fff",
            borderStyle: "solid",
            backgroundColor: "transparent",
            borderRadius: 12,
            shadowOpacity: 1,
            elevation: 4,
            shadowRadius: 4,
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowColor: "rgba(0, 0, 0, 0.08)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            marginLeft: -160,
            height: "100%"
    },
    lineargradient2: {
            marginTop: 10,
            borderWidth: 0.4,
            borderColor: "#fff",
            borderStyle: "solid",
            backgroundColor: "transparent",
            borderRadius: 12,
            shadowOpacity: 1,
            elevation: 4,
            shadowRadius: 4,
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowColor: "rgba(0, 0, 0, 0.08)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            marginLeft: -160,
            height: "100%"

    },
    safeareaviewIconHide: {
            overflow: "hidden"
    },
    text3: {
            marginTop: -259,
            width: 47
    },
    text4: {
            marginTop: -141,
            width: 63
    },
    text5: {
            marginTop: -23,
            color: "#26282c",
            marginLeft: -152,
            fontWeight: "600",
            fontSize: 16,
            textAlign: "left",
            fontFamily: "NanumSquareNeo-Bd",
            lineHeight: 22,
            letterSpacing: -0.43,
            top: "50%",
            left: "50%",
            position: "absolute"
    },
    view2: {
            marginTop: 350,
            marginLeft: -164,
            borderRadius: 8,
            backgroundColor: "rgba(28, 30, 31, 0.25)",
            width: 328,
            height: 52,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            position: "absolute"
    },
    text6: {
            color: "#fff",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "700",
            lineHeight: 22,
            letterSpacing: -0.43
    },
    wrap: {
            top: 20,
            backgroundColor: "#f6f8fa",
            width: 360,
            overflow: "hidden"
    },
    text7: {
            marginTop: 2,
            marginLeft: -110,
            fontSize: 22,
            letterSpacing: -0.26,
            lineHeight: 28,
            color: "#464b53",
            textAlign: "left",
            left: "50%",
            position: "absolute",
            top: "50%"
    },
    iconBack: {
            top: 0,
            width: 55
    },
    icon: {
        top: 16,
        left: 20,
        width: 24,
        height: 24,
        position: "absolute",
        overflow: "hidden"
    },
    shadowBox: {
        borderRadius: 12,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "rgba(0, 0, 0, 0.08)",
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "transparent", // 기본은 투명
        borderRadius: 12,
        backgroundColor: "#fff",
    },
    textInput: {
        paddingHorizontal: 12,
        fontSize: 14,
        color: "#1C1E1F",
    },


});
