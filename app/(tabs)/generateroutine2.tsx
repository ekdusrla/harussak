import { Image, StyleSheet, Text, View } from "react-native";



export default function GenerateRoutine2() {

        return (
    		<View style={styles.safeareaview}>
      			<View style={styles.view}>
        				<View style={[styles.child, styles.childPosition]} />
        				<Text style={styles.text}>{`당신에게 꼭 맞는
          					루틴을 찾아드릴게요`}</Text>
        				<View style={[styles.lineargradient, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>📖</Text>
          					<Text style={styles.text2}>도서 30분 읽기</Text>
        				</View>
        				<View style={[styles.safeareaviewLineargradient, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>☀️</Text>
          					<Text style={styles.text2}>오전 10시에 일어나기</Text>
        				</View>
        				<View style={[styles.lineargradient2, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>🧘‍♂️</Text>
          					<Text style={styles.text2}>명상 30분 하기</Text>
        				</View>
        				<View style={[styles.lineargradient3, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>🌙</Text>
          					<Text style={styles.text2}>오후 10시에 취침하기</Text>
        				</View>
        				<View style={[styles.lineargradient4, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>💊</Text>
          					<Text style={styles.text2}>비타민 먹기</Text>
        				</View>
        				<View style={[styles.lineargradient5, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>🚶️</Text>
          					<Text style={styles.text2}>산책 10분하기</Text>
        				</View>
        				<View style={[styles.lineargradient6, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>💊</Text>
          					<Text style={styles.text2}>영양제 먹기</Text>
        				</View>
        				<View style={[styles.lineargradient7, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>📖</Text>
          					<Text style={styles.text2}>도서 30분 읽기</Text>
        				</View>
        				<View style={[styles.lineargradient8, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>☀️</Text>
          					<Text style={styles.text2}>오전 11시에 전에 일어나기</Text>
        				</View>
        				<View style={[styles.lineargradient9, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>🧘‍♂️</Text>
          					<Text style={styles.text2}>요가하기</Text>
        				</View>
        				<View style={[styles.lineargradient10, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>🌙</Text>
          					<Text style={styles.text2}>오전 1시에 전 취침하기</Text>
        				</View>
        				<View style={[styles.lineargradient11, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>💊</Text>
          					<Text style={styles.text2}>유산균 먹기</Text>
        				</View>
        				<View style={[styles.lineargradient12, styles.containerBorder]}>
          					<Text style={styles.text2}>나의 루틴 만들기</Text>
        				</View>
        				<View style={[styles.lineargradient13, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>🚶️</Text>
          					<Text style={styles.text2}>동네 산책하기</Text>
        				</View>
        				<View style={[styles.lineargradient14, styles.lineargradientShadowBox]}>
          					<Text style={styles.safeareaviewText}>💊</Text>
          					<Text style={styles.text2}>영양제 먹기</Text>
        				</View>
        				<Image style={[styles.item, styles.itemPosition]} width={153} height={28} />
        				<View style={[styles.lineargradient15, styles.childPosition]} />
        				<View style={[styles.buttonWrap, styles.itemPosition]}>
          					<View style={[styles.wrapper, styles.wrapperLayout]}>
            						<Text style={[styles.text30, styles.textPosition]}>확인</Text>
          					</View>
          					<View style={[styles.container, styles.wrapperLayout]}>
            						<Text style={[styles.text31, styles.textPosition]}>이전으로</Text>
          					</View>
        				</View>
      			</View>
    		</View>);


}

const styles = StyleSheet.create({
  	safeareaview: {
    		backgroundColor: "#f8f8f8",
    		flex: 1
  	},
  	childPosition: {
    		backgroundColor: "transparent",
    		left: 0,
    		position: "absolute",
    		width: 360
  	},
  	lineargradientShadowBox: {
    		gap: 10,
    		paddingVertical: 0,
    		paddingHorizontal: 32,
    		alignItems: "center",
    		flexDirection: "row",
    		height: 56,
    		borderRadius: 32,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 0
    		},
    		shadowColor: "rgba(70, 75, 83, 0.12)",
    		boxShadow: "0px 0px 4px rgba(70, 75, 83, 0.12)",
    		right: 20,
    		left: 20,
    		backgroundColor: "transparent",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	containerBorder: {
    		borderWidth: 1,
    		borderStyle: "solid",
    		left: 20
  	},
  	itemPosition: {
    		left: "50%",
    		position: "absolute"
  	},
  	wrapperLayout: {
    		height: 44,
    		borderRadius: 8,
    		top: 18,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	textPosition: {
    		top: "50%",
    		marginTop: -11,
    		left: "50%",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 14,
    		textAlign: "center",
    		fontFamily: "NanumSquare Neo",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	view: {
    		width: "100%",
    		height: 760,
    		overflow: "hidden",
    		backgroundColor: "#f8f8f8",
    		flex: 1
  	},
  	child: {
    		top: 157,
    		height: 137
  	},
  	text: {
    		top: 100,
    		lineHeight: 28,
    		textAlign: "left",
    		color: "#26282c",
    		fontFamily: "NanumSquare Neo",
    		fontWeight: "700",
    		letterSpacing: -0.26,
    		fontSize: 20,
    		left: 20,
    		position: "absolute"
  	},
  	lineargradient: {
    		top: 200
  	},
  	safeareaviewText: {
    		lineHeight: 25,
    		color: "#000",
    		textAlign: "center",
    		fontFamily: "NanumSquare Neo",
    		letterSpacing: -0.26,
    		fontSize: 20
  	},
  	text2: {
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 14,
    		textAlign: "center",
    		color: "#26282c",
    		fontFamily: "NanumSquare Neo"
  	},
  	safeareaviewLineargradient: {
    		top: 488
  	},
  	lineargradient2: {
    		top: 272
  	},
  	lineargradient3: {
    		top: 560
  	},
  	lineargradient4: {
    		top: 632
  	},
  	lineargradient5: {
    		top: 344
  	},
  	lineargradient6: {
    		top: 416
  	},
  	lineargradient7: {
    		top: 704
  	},
  	lineargradient8: {
    		top: 992
  	},
  	lineargradient9: {
    		top: 776
  	},
  	lineargradient10: {
    		top: 1064
  	},
  	lineargradient11: {
    		top: 1136
  	},
  	lineargradient12: {
    		top: 1208,
    		borderColor: "#91e04c",
    		paddingVertical: 0,
    		paddingHorizontal: 32,
    		alignItems: "center",
    		flexDirection: "row",
    		height: 56,
    		borderRadius: 32,
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 0
    		},
    		shadowColor: "rgba(70, 75, 83, 0.12)",
    		boxShadow: "0px 0px 4px rgba(70, 75, 83, 0.12)",
    		right: 20,
    		borderStyle: "solid",
    		backgroundColor: "transparent",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	lineargradient13: {
    		top: 848
  	},
  	lineargradient14: {
    		top: 920
  	},
  	item: {
    		marginLeft: -77,
    		top: 50,
    		width: 153,
    		height: 28
  	},
  	lineargradient15: {
    		bottom: 80,
    		height: 77,
    		opacity: 0.8
  	},
  	buttonWrap: {
    		marginLeft: -180,
    		bottom: 0,
    		height: 80,
    		width: 360,
    		left: "50%",
    		overflow: "hidden",
    		backgroundColor: "#f8f8f8"
  	},
  	wrapper: {
    		left: 114,
    		backgroundColor: "rgba(28, 30, 31, 0.25)",
    		width: 226
  	},
  	text30: {
    		marginLeft: -14,
    		color: "#fff"
  	},
  	container: {
    		borderColor: "#cacdd3",
    		width: 82,
    		borderWidth: 1,
    		borderStyle: "solid",
    		left: 20
  	},
  	text31: {
    		marginLeft: -27,
    		color: "#9ea4a9"
  	}
});