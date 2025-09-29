import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export default function CultivateDatails() {

	const router = useRouter();

	const [showCenterImage, setShowCenterImage] = useState(false);
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const timer = setTimeout(() => {
		setShowCenterImage(true);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	// fade-in 애니메이션
	useEffect(() => {
		if (showCenterImage) {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
		}
	}, [showCenterImage]);



      	return (
			    <ImageBackground
					source={require("../assets/images/cultivatebackground.png")} // ✅ 배경 이미지 경로
					style={styles.viewBg} // 기존 viewBg 그대로 사용
					resizeMode="cover" // cover, contain, stretch 중 선택 가능
					>
      			<View>
				<Image
				source={require("../assets/images/rainbow.png")}
				style={{
					position: "absolute",
					top: 80, // ✅ 이미지 width 120의 절반
					width: 300,
					height: 300,
					left: 60
				}}
				resizeMode="contain"
				/>
								<Image
				source={require("../assets/images/growth0.png")}
				style={{
					position: "absolute",
					top: 220, // ✅ 이미지 width 120의 절반
					width: 120,
					height: 120,
					left: 160
				}}
				resizeMode="contain"
				/>
				{showCenterImage && (
				<Animated.Image
					source={require("../assets/images/bubble-great.png")}
					style={[styles.centerImage, { opacity: fadeAnim }]}
					resizeMode="contain"
				/>
				)}
        				<View style={styles.child} />
        				<Text style={styles.text}>도서 30분 읽기</Text>
        				<Text style={[styles.safeareaviewText, styles.textPosition2]}>기간 :</Text>
        				<Text style={[styles.text2, styles.textPosition2]}>2024.12.03-2025.12.03</Text>
        				<Text style={[styles.text3, styles.textPosition1]}>주기 :</Text>
        				<Text style={[styles.text4, styles.textPosition1]}>매주 월 수</Text>
        				<Text style={[styles.text5, styles.textPosition]}>씨앗 :</Text>
        				<Text style={[styles.text6, styles.textPosition]}>백합과</Text>
        				<Text style={[styles.text7, styles.textClr]}>{`처음으로 싹을 틔운 순간이에요!\n포기하지 않은 의지가 빛나고 있어요`}</Text>
        				<Text style={[styles.text8, styles.lv2Typo]}>뿌리내린 새싹</Text>
        				<Text style={[styles.lv2, styles.lv2Typo]}>Lv.2</Text>
        				<Text style={[styles.text9, styles.textTypo]}>다음 성장까지</Text>
        				<Text style={[styles.text10, styles.textTypo]}>50%</Text>
        				<Text style={styles.text11}>루틴 그만하기</Text>
        				<Image style={styles.item} width={16} height={16} resizeMode="contain" source={require("../assets/images/icon-erase.png")}/>
						<Pressable style={[styles.iconBack, styles.wrapPosition]} onPress={()=> router.push("/cultivate")}>
						<Image style={styles.icon} resizeMode="contain" source={require("../assets/images/icon-back.png")} />
						</Pressable>
      			</View>
			</ImageBackground>
    );
}


const styles = StyleSheet.create({
  	viewBg: {
    		flex: 1
  	},
  	textPosition2: {
    		color: "#1c1e1f",
    		top: 620,
    		textAlign: "left",
    		letterSpacing: -0.43,
    		fontSize: 14,
			fontWeight: "600",
    		lineHeight: 22,
    		left: "45%",
    		position: "absolute"
  	},
  	textPosition1: {
    		top: 650,
    		textAlign: "center",
    		letterSpacing: -0.43,
    		fontSize: 14,
    		color: "#26282c",
			fontWeight: "600",
    		lineHeight: 22,
    		left: "45%",
    		position: "absolute"
  	},
  	textPosition: {
    		top: 680,
    		textAlign: "left",
    		letterSpacing: -0.43,
    		fontSize: 14,
    		color: "#26282c",
			fontWeight: "600",
    		lineHeight: 22,
    		left: "45%",
    		position: "absolute"
  	},
  	textClr: {
    		color: "#74777d",
    		fontWeight: "600",
			fontFamily: "NanumSquareNeo-Bd"
  	},
  	lv2Typo: {
    		fontSize: 18,
    		top: 520,
    		letterSpacing: -0.43,
    		textAlign: "center",
    		color: "#26282c",
    		fontFamily: "NanumSquareNeo-Eb",
    		fontWeight: "600",
    		lineHeight: 22,
    		left: "45%",
    		position: "absolute"
  	},
  	textTypo: {
    		fontSize: 14,
    		top: 440,
    		textAlign: "left",
    		letterSpacing: -0.43,
    		lineHeight: 22,
    		left: "45%",
    		position: "absolute",
			fontWeight: "600"
  	},
  	labelTypo: {
    		fontFamily: "SF Pro",
    		color: "#74777d",
    		lineHeight: 22
  	},
  	view: {
    		width: "100%",
    		height: 758,
    		overflow: "hidden"
  	},
  	child: {
    		marginLeft: -180,
    		top: 360,
    		borderTopLeftRadius: 30,
    		borderTopRightRadius: 30,
    		backgroundColor: "#fff",
    		width: 360,
    		height: 520,
    		left: "50%",
    		position: "absolute"
  	},
  	text: {
    		top: 392,
    		fontSize: 24,
    		textAlign: "center",
    		color: "#26282c",
    		fontFamily: "NanumSquareNeo-Eb",
    		fontWeight: "600",
  	},
  	safeareaviewText: {
    		textAlign: "left",
    		fontWeight: "600",
    		marginLeft: -133,
			fontFamily: "NanumSquareNeo-Bd",
  	},
  	text2: {
    		marginLeft: -93,
    		textAlign: "left",
			fontFamily: "NanumSquareNeo-Rg",
  	},
  	text3: {
    		fontWeight: "600",
    		marginLeft: -133,
			fontFamily: "NanumSquareNeo-Bd",
  	},
  	text4: {
    		marginLeft: -93,
			fontFamily: "NanumSquareNeo-Rg",
  	},
  	text5: {
    		fontWeight: "600",
    		marginLeft: -133,
			fontFamily: "NanumSquareNeo-Bd",
  	},
  	text6: {
    		marginLeft: -93,
			fontFamily: "NanumSquareNeo-Rg",
  	},
  	text7: {
    		top: 552,
    		fontSize: 12,
    		letterSpacing: 0.8,
    		lineHeight: 16,
    		textAlign: "left",
    		marginLeft: -133,
    		color: "#74777d",
    		left: "45%",
    		position: "absolute"
  	},
  	text8: {
    		marginLeft: -91
  	},
  	lv2: {
    		marginLeft: -132
  	},
  	text9: {
    		marginLeft: -140,
    		color: "#74777d",
    		fontWeight: "600",
			fontFamily: "NanumSquareNeo-Bd",
  	},
  	text10: {
    		marginLeft: 150,
    		color: "#91e04c",
    		fontWeight: "600",
    		fontSize: 14,
    		top: 378,
			fontFamily: "NanumSquareNeo-Eb",
  	},
  	text11: {
    		top: 820,
    		left: 280,
    		letterSpacing: 1.2,
    		color: "#ff6337",
    		width: 100,
    		fontSize: 16,
    		textAlign: "center",
    		fontFamily: "NanumSquareNeo",
    		lineHeight: 22,
    		position: "absolute"
  	},
  	item: {
    		top: 822,
    		left: 264,
    		width: 16,
    		height: 16,
    		position: "absolute"
  	},
  	unionIcon: {
    		width: 9,
    		height: 8
  	},
  	leading: {
    		top: 14,
    		left: 16,
    		width: 44,
    		flexDirection: "row",
    		alignItems: "center",
    		paddingHorizontal: 8,
    		paddingVertical: 11,
    		gap: 3,
    		position: "absolute"
  	},
  	chevron: {
    		fontSize: 15,
    		fontWeight: "600",
    		textAlign: "center"
  	},
  	label: {
    		fontSize: 17,
    		textAlign: "left",
    		letterSpacing: -0.43,
    		fontFamily: "SF Pro"
  	},
	 iconBack: {
            top: 0,
            width: 55
    },
        icon: {
        top: 36,
        left: 20,
        width: 20,
        height: 20,
        position: "absolute",
        overflow: "hidden"
    },
        wrapPosition: {
            height: 60,
            left: 0,
            position: "absolute"
    },
	centerImage: {
		position: "absolute",
		width: 120,
		height: 100,
		marginLeft: 148,
		marginTop: 132 // height / 2
		},

});