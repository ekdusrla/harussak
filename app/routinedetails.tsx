import { StyleSheet, Text, View } from "react-native";


export default function RoutineDetails() {
  	return (
    		<View style={styles.safeareaview}>
      			<View style={styles.view}>
                    <View style={[styles.lineargradient, styles.childLayout]}>
                        <Text style={[styles.text, styles.textLayout]}>84/1000자</Text>
                        <Text style={[styles.safeareaviewText, styles.textLayout]}>84/1000자</Text>
                        <Text style={[styles.text2, styles.textFlexBox]}>
                            {`사람들과 대화하는게 어려워\n놀고는 싶은데 자꾸 불편한 감정이 생겨`}
                        </Text>
                        <View style={[styles.child, styles.childLayout]} />
                        <Text style={[styles.text3, styles.textTypo]}>감정일기</Text>
        		    </View>
        				<Text style={[styles.text4, styles.textTypo]}>도서 30분 읽기</Text>
        				<Text style={[styles.text5, styles.textClr]}>완수 기간</Text>
        				<Text style={[styles.text6, styles.textPosition2]}>설정기간</Text>
        				<Text style={[styles.text7, styles.textPosition2]}>2024.12.03-2025.12.03</Text>
        				<Text style={[styles.text8, styles.textClr]}>2024.12.03-2025.12.03</Text>
        				<Text style={[styles.text9, styles.textPosition1]}>주기</Text>
        				<Text style={[styles.text10, styles.textPosition1]}>매주 월 수</Text>
        				<Text style={[styles.text11, styles.textPosition]}>감정</Text>
        				<Text style={[styles.text12, styles.textPosition]}>진심</Text>
        				<View style={[styles.item, styles.itemLayout]} />
        				<View style={[styles.inner, styles.itemLayout]} />
        				<View style={[styles.lineView, styles.itemLayout]} />
        				<View style={[styles.safeareaviewChild, styles.itemLayout]} />
                </View>
      		</View>
        );
};



const styles = StyleSheet.create({
  	safeareaview: {
    		backgroundColor: "#f8f8f8",
    		flex: 1
  	},
  	childLayout: {
    		borderRadius: 12,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	textLayout: {
    		height: 19,
    		width: 55,
    		color: "#cacdd3",
    		letterSpacing: -0.43,
    		fontSize: 12,
    		textAlign: "center",
    		fontFamily: "Pretendard",
    		lineHeight: 22,
    		position: "absolute"
  	},
  	textFlexBox: {
    		textAlign: "left",
    		left: 24,
    		letterSpacing: -0.43
  	},
  	textTypo: {
    		fontFamily: "NanumSquare Neo",
    		fontWeight: "800",
    		lineHeight: 22,
    		position: "absolute"
  	},
  	textClr: {
    		color: "#464b53",
    		fontWeight: "700"
  	},
  	textPosition2: {
    		top: 486,
    		color: "#464b53",
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 12,
    		left: "50%",
    		position: "absolute"
  	},
  	textPosition1: {
    		top: 566,
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 12,
    		left: "50%",
    		position: "absolute"
  	},
  	textPosition: {
    		top: 606,
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 12,
    		left: "50%",
    		position: "absolute"
  	},
  	itemLayout: {
    		height: 0,
    		width: 312,
    		borderTopWidth: 1.2,
    		borderColor: "#eaeced",
    		borderStyle: "solid",
    		left: 24,
    		position: "absolute"
  	},
  	view: {
    		width: "100%",
    		height: 758,
    		overflow: "hidden",
    		backgroundColor: "#f8f8f8",
    		flex: 1
  	},
  	lineargradient: {
    		marginLeft: -160,
    		top: 142,
    		boxShadow: "0px 2px 12px rgba(28, 30, 31, 0.08)",
    		elevation: 12,
    		backgroundColor: "transparent",
    		width: 320,
    		height: 320,
    		left: "50%",
    		borderRadius: 12,
    		position: "absolute"
  	},
  	text: {
    		top: 415,
    		right: 16
  	},
  	safeareaviewText: {
    		top: 393,
    		right: 12
  	},
  	text2: {
    		top: 57,
    		fontSize: 14,
    		color: "#1c1e1f",
    		width: 272,
    		height: 246,
    		fontFamily: "Pretendard",
    		lineHeight: 22,
    		textAlign: "left",
    		left: 24,
    		position: "absolute"
  	},
  	child: {
    		top: 7,
    		left: 0,
    		width: 88,
    		height: 32,
    		justifyContent: "center",
    		alignItems: "center",
    		borderRadius: 12,
    		position: "absolute"
  	},
  	text3: {
    		top: 20,
    		fontSize: 16,
    		color: "#91e04c",
    		width: 61,
    		height: 21,
    		textAlign: "left",
    		left: 24,
    		letterSpacing: -0.43
  	},
  	text4: {
    		marginLeft: -156,
    		top: 96,
    		fontSize: 20,
    		color: "#26282c",
    		textAlign: "center",
    		fontFamily: "NanumSquare Neo",
    		fontWeight: "800",
    		left: "50%"
  	},
  	text5: {
    		top: 526,
    		color: "#464b53",
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 12,
    		left: "50%",
    		position: "absolute",
    		marginLeft: -148,
    		textAlign: "left"
  	},
  	text6: {
    		fontWeight: "700",
    		top: 486,
    		marginLeft: -148,
    		textAlign: "left"
  	},
  	text7: {
    		marginLeft: 13,
    		textAlign: "right"
  	},
  	text8: {
    		marginLeft: 10,
    		textAlign: "right",
    		top: 526,
    		color: "#464b53",
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 12,
    		left: "50%",
    		position: "absolute"
  	},
  	text9: {
    		color: "#464b53",
    		fontWeight: "700",
    		marginLeft: -148,
    		textAlign: "left"
  	},
  	text10: {
    		marginLeft: 98,
    		textAlign: "right",
    		color: "#26282c"
  	},
  	text11: {
    		color: "#464b53",
    		fontWeight: "700",
    		marginLeft: -148,
    		textAlign: "left"
  	},
  	text12: {
    		marginLeft: 125,
    		textAlign: "right",
    		color: "#26282c"
  	},
  	item: {
    		top: 510
  	},
  	inner: {
    		top: 550
  	},
  	lineView: {
    		top: 590
  	},
  	safeareaviewChild: {
    		top: 630
  	}
});