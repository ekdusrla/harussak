import { Image, StyleSheet, Text, View } from "react-native";

export default function CultivateDatails() {
      	return (
    		<View style={styles.viewBg}>
      			<View style={[styles.view, styles.viewBg]}>
        				<View style={styles.child} />
        				<Text style={styles.text}>도서 30분 읽기</Text>
        				<Text style={[styles.safeareaviewText, styles.textPosition2]}>{`기간 : `}</Text>
        				<Text style={[styles.text2, styles.textPosition2]}>2024.12.03-2025.12.03</Text>
        				<Text style={[styles.text3, styles.textPosition1]}>주기 :</Text>
        				<Text style={[styles.text4, styles.textPosition1]}>매주 월 수</Text>
        				<Text style={[styles.text5, styles.textPosition]}>씨앗 :</Text>
        				<Text style={[styles.text6, styles.textPosition]}>백합과</Text>
        				<Text style={[styles.text7, styles.textClr]}>{`처음으로 싹을 틔운 순간이에요!
          					포기하지 않은 의지가 빛나고 있어요`}</Text>
        				<Text style={[styles.text8, styles.lv2Typo]}>뿌리내린 새싹</Text>
        				<Text style={[styles.lv2, styles.lv2Typo]}>Lv.2</Text>
        				<Text style={[styles.text9, styles.textTypo]}>다음 성장까지</Text>
        				<Text style={[styles.text10, styles.textTypo]}>50%</Text>
        				<Text style={styles.text11}>루틴 그만하기</Text>
        				<Image style={styles.item} width={17} height={16} />
        				<Image style={styles.unionIcon} width={9} height={8} />
        				<View style={styles.leading}>
          					<Text style={[styles.chevron, styles.labelTypo]}>􀆉</Text>
          					<Text style={[styles.label, styles.labelTypo]} />
        				</View>
      			</View>
    		</View>
    );
}


const styles = StyleSheet.create({
  	safeareaview: {
    		flex: 1,
    		backgroundColor: "#f8f8f8"
  	},
  	viewBg: {
    		backgroundColor: "#f8f8f8",
    		flex: 1
  	},
  	textPosition2: {
    		color: "#1c1e1f",
    		top: 542,
    		textAlign: "left",
    		letterSpacing: -0.43,
    		fontSize: 12,
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		left: "50%",
    		position: "absolute"
  	},
  	textPosition1: {
    		top: 572,
    		textAlign: "left",
    		letterSpacing: -0.43,
    		fontSize: 12,
    		color: "#26282c",
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		left: "50%",
    		position: "absolute"
  	},
  	textPosition: {
    		top: 602,
    		textAlign: "left",
    		letterSpacing: -0.43,
    		fontSize: 12,
    		color: "#26282c",
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		left: "50%",
    		position: "absolute"
  	},
  	textClr: {
    		color: "#74777d",
    		fontWeight: "700"
  	},
  	lv2Typo: {
    		fontSize: 16,
    		top: 456,
    		letterSpacing: -0.43,
    		textAlign: "center",
    		color: "#26282c",
    		fontFamily: "NanumSquare Neo",
    		fontWeight: "800",
    		lineHeight: 22,
    		left: "50%",
    		position: "absolute"
  	},
  	textTypo: {
    		fontSize: 14,
    		top: 378,
    		textAlign: "left",
    		letterSpacing: -0.43,
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		left: "50%",
    		position: "absolute"
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
    		marginLeft: -164,
    		top: 302,
    		borderTopLeftRadius: 30,
    		borderTopRightRadius: 30,
    		backgroundColor: "#fff",
    		width: 328,
    		height: 456,
    		left: "50%",
    		position: "absolute"
  	},
  	text: {
    		marginLeft: -81,
    		top: 334,
    		fontSize: 24,
    		textAlign: "center",
    		color: "#26282c",
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		fontWeight: "800",
    		left: "50%",
    		position: "absolute"
  	},
  	safeareaviewText: {
    		textAlign: "left",
    		fontWeight: "700",
    		marginLeft: -133
  	},
  	text2: {
    		marginLeft: -93,
    		textAlign: "left"
  	},
  	text3: {
    		fontWeight: "700",
    		marginLeft: -133
  	},
  	text4: {
    		marginLeft: -93
  	},
  	text5: {
    		fontWeight: "700",
    		marginLeft: -133
  	},
  	text6: {
    		marginLeft: -93
  	},
  	text7: {
    		top: 486,
    		fontSize: 10,
    		letterSpacing: 0.8,
    		lineHeight: 16,
    		textAlign: "left",
    		marginLeft: -133,
    		color: "#74777d",
    		fontFamily: "NanumSquare Neo",
    		left: "50%",
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
    		fontWeight: "700"
  	},
  	text10: {
    		marginLeft: 107,
    		color: "#91e04c",
    		fontWeight: "800",
    		fontSize: 14,
    		top: 378
  	},
  	text11: {
    		top: 724,
    		left: 249,
    		letterSpacing: 1.2,
    		color: "#ff6337",
    		width: 88,
    		fontSize: 12,
    		textAlign: "center",
    		fontFamily: "NanumSquare Neo",
    		lineHeight: 22,
    		position: "absolute"
  	},
  	item: {
    		top: 727,
    		left: 232,
    		width: 17,
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
  	}
});