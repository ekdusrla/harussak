import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
    		<View style={styles.vieww}>
      			      	<View style={[styles.lineargradient, styles.lineargradientShadowBox]} >
        				<Text style={[styles.kyungheekhuackr, styles.text1Typo]}>KyungHee@khu.ac.kr</Text>
      			</View>
      			<View style={[styles.lineargradient1, styles.lineargradientShadowBox]}>
        				<Text style={[styles.text1, styles.text1Typo]}>*********</Text>
        				<Image style={styles.iconPosition} resizeMode="cover" source={require("../../assets/images/icon-hide.png")} />
      			</View>
      			<View style={[styles.lineargradient2, styles.lineargradientShadowBox]}>
        				<Text style={styles.text2}>비밀번호 재입력</Text>
        				<View style={styles.iconPosition} />
      			</View>
      			<Text style={[styles.text3, styles.textTypo]}>이메일</Text>
      			<Text style={[styles.text4, styles.textTypo]}>비밀번호</Text>
      			<Text style={styles.text5}>비밀번호 확인</Text>
      			<View style={[styles.view, styles.viewPosition]}>
        				<Text style={[styles.text6, styles.textTypo1]}>회원가입</Text>
      			</View>
      			<View style={[styles.wrap, styles.wrapPosition]}>
        				<Text style={[styles.text7, styles.textTypo1]}>회원가입</Text>
                        <Image style={styles.iconBack} resizeMode="cover" source={require("../../assets/images/icon-back.png")} />
      			</View>
      			<Text style={[styles.text8, styles.textPosition]}>이메일은 필수 입력입니다</Text>
      			<Text style={[styles.text9, styles.textPosition]}>비밀번호는 필수 입력입니다</Text>
    		</View>
            
        );
}

const styles = StyleSheet.create({
    vieww: {
            backgroundColor: "#f8f8f8",
            flex: 1
    },
  	viewFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconPosition1: {
    		left: "0%",
    		top: "0%",
    		position: "absolute"
  	},
  	lineargradientShadowBox: {
    		height: 56,
    		width: 320,
    		borderWidth: 0.4,
    		backgroundColor: "transparent",
    		borderRadius: 12,
    		elevation: 4,
    		shadowColor: "rgba(0, 0, 0, 0.08)",
    		left: "50%",
    		top: "50%",
    		position: "absolute",
  	},
  	text1Typo: {
    		color: "#1c1e1f",
    		fontFamily: "NanumSquareNeo-Rg",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 14,
    		marginLeft: -140,
    		left: "50%",
    		textAlign: "left",
    		position: "absolute"
  	},
  	textTypo: {
    		height: 18,
    		color: "#26282c",
    		fontWeight: "700",
    		fontSize: 16,
    		marginLeft: -152,
    		fontFamily: "NanumSquareNeo-Bd",
    		letterSpacing: -0.43,
    		left: "50%",
    		top: "50%",
    		textAlign: "left",
    		position: "absolute"
  	},
  	viewPosition: {
    		left: "50%",
    		top: "50%",
    		position: "absolute"
  	},
  	textTypo1: {
    		fontWeight: "700",
    		fontFamily: "NanumSquareNeo-Rg"
  	},
  	wrapPosition: {
    		height: 60,
    		left: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	textPosition: {
    		color: "#fd3333",
    		marginLeft: -152,
    		fontFamily: "Pretendard-Regular",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		left: "50%",
    		textAlign: "left",
    		fontSize: 12,
    		position: "absolute"
  	},
  	icons: {
    		justifyContent: "flex-end",
    		gap: 8
  	},
  	kyungheekhuackr: {
    		top: 17
  	},
  	lineargradient: {
    		marginTop: -233,
    		borderColor: "#fd3333",
    		marginLeft: -160,
    		height: 56,
    		width: 320,
    		borderWidth: 0.4,
    		backgroundColor: "transparent",
    		borderRadius: 12,
    		elevation: 4,
  	},
  	lineargradient1: {
    		marginTop: -111,
    		borderColor: "#fd3333",
    		marginLeft: -160,
    		height: 56,
    		width: 320,
    		borderWidth: 0.4,
    		backgroundColor: "transparent",
    		borderRadius: 12,
    		elevation: 4,
  	},
  	text1: {
    		top: 18
  	},
  	iconPosition: {
    		height: 40,
    		width: 44,
    		left: 264,
    		marginTop: -20,
    		top: "50%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	text2: {
    		top: 16,
    		color: "#74777d",
    		fontFamily: "Pretendard-Regular",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 14,
    		marginLeft: -140,
    		left: "50%",
    		textAlign: "left",
    		position: "absolute"
  	},
  	lineargradient2: {
    		marginTop: 11,
    		marginLeft: -159,
    		borderColor: "#fff",
    		height: 56,
    		width: 320,
    		borderWidth: 0.4,
    		backgroundColor: "transparent",
    		borderRadius: 12,
    		elevation: 4,
    		shadowColor: "rgba(0, 0, 0, 0.08)",
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
    		fontWeight: "700",
    		fontSize: 16,
    		fontFamily: "NanumSquareNeo-Bd",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		left: "50%",
    		top: "50%",
    		textAlign: "left",
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
  	view: {
    		marginTop: 297,
    		marginLeft: -164,
    		borderRadius: 8,
    		backgroundColor: "rgba(28, 30, 31, 0.25)",
    		width: 328,
    		height: 52,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	text7: {
    		marginTop: -14,
    		marginLeft: -125,
    		fontSize: 22,
    		letterSpacing: -0.26,
    		lineHeight: 28,
    		color: "#464b53",
    		left: "50%",
    		top: "50%",
    		position: "absolute",
    		textAlign: "left",
            fontFamily: "NanumSquareNeo-Rg",
  	},
    iconBack: {
            top: 16,
            left: 20,
            width: 40,
            height: 40,
            position: "absolute",
            overflow: "hidden"
    },
  	wrap: {
    		top: 20,
    		width: 360,
    		backgroundColor: "#f6f8fa"
  	},
  	text8: {
    		top: 250
  	},
  	text9: {
    		top: 370
  	},
  	pressable: {
    		backgroundColor: "#f8f8f8",
    		flex: 1,
    		height: 758,
    		overflow: "hidden",
    		width: "100%"
  	}
});
