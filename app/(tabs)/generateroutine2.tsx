import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";



export default function GenerateRoutine2() {

	const router = useRouter();
	const [selectedCard, setSelectedCard] = useState<number | null>(null);
	const cards = [
  { text: "📖 도서 30분 읽기" },
  { text: "☀️ 오전 10시에 일어나기" },
  { text: "🧘‍♂️ 명상 30분 하기" },
  { text: "🌙 오후 10시에 취침하기" },
  { text: "💊 비타민 먹기" },
  { text: "🚶️ 산책 10분하기" },
  { text: "💊 영양제 먹기" },
  { text: "📖 도서 30분 읽기" },
  { text: "☀️ 오전 11시에 일어나기" },
  { text: "🧘‍♂️ 요가하기" },
  { text: "🌙 오전 1시에 전 취침하기" },
  { text: "💊 유산균 먹기" },
  { text: "나의 루틴 만들기"}
];




        return (
    		    <View style={styles.safeareaview}>
      {/* 고정되는 상단 로고 + 제목 */}
      <Image
        style={[styles.item, styles.itemPosition]}
        width={153}
        height={28} 
        resizeMode="contain"
        source={require("../../assets/images/bar2.png")}
      />
      <Text style={styles.text}>
        {`당신에게 꼭 맞는\n루틴을 찾아드릴게요`}
      </Text>

      {/* 루틴 카드들만 스크롤 */}
	  <View style={styles.scrollWrapper}>
      <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
        {cards.map((card, index) => (
  <Pressable
    key={index}
    style={[
      styles.lineargradientShadowBox,
	  card.text === "나의 루틴 만들기" && { backgroundColor: "#F8E1E1" },
      selectedCard === index && { backgroundColor: "#EBF5E3" } // 배경색 변경
    ]}
    onPress={() => setSelectedCard(index)}
  >
    <Text style={styles.text2}>{card.text}</Text>
    {selectedCard === index && (
      <Image
        source={require('../../assets/images/cardborder.png')}
        style={styles.cardBorderImage}
        resizeMode="stretch"
      />
    )}
  </Pressable>
))}
      </ScrollView>
	  </View>
      <View style={[styles.buttonWrap, styles.itemPosition]}>
        <Pressable
			style={[
				styles.wrapper,
				styles.wrapperLayout,
				selectedCard !== null && { backgroundColor: "#91E04C" }
			]}
			onPress={() => {
				if (selectedCard !== null) {
				router.push({
					pathname: "../generateroutine3",
					params: { routineText: cards[selectedCard].text },
				});
				}
			}}
			>
			<Text style={[styles.text30, styles.textPosition]}>확인</Text>
			</Pressable>


        <Pressable style={[styles.container, styles.wrapperLayout]} onPress={()=>router.push("../generateroutine1")}>
          <Text style={[styles.text31, styles.textPosition] }>이전으로</Text>
        </Pressable>
      </View>
    </View>
  );
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
    		backgroundColor: "#fafafa",
			marginHorizontal: 20,
			marginVertical: 8,
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
    		fontFamily: "NanumSquareNeo-Bd",
    		fontWeight: "600",
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
    		fontFamily: "NanumSquareNeo-Bd",
    		fontWeight: "600",
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
    		fontFamily: "NanumSquareNeo-Rg",
    		letterSpacing: -0.26,
    		fontSize: 20
  	},
  	text2: {
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		fontSize: 14,
    		textAlign: "center",
    		color: "#26282c",
    		fontFamily: "NanumSquareNeo-Rg"
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
    		top: 60,
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
    		width: 400,
    		left: "50%",
    		overflow: "hidden",
    		backgroundColor: "#f8f8f8"
  	},
  	wrapper: {
    		left: 114,
    		backgroundColor: "rgba(28, 30, 31, 0.25)",
    		width: 250
  	},
  	text30: {
    		marginLeft: -14,
    		color: "#fff"
  	},
  	container: {
    		borderColor: "#cacdd3",
    		width: 104,
    		borderWidth: 1,
    		borderStyle: "solid",
    		left: 0,
  	},
  	text31: {
    		marginLeft: -27,
    		color: "#9ea4a9"
  	},header: {
  height: 120,         // 글씨 + 로고 영역 높이
  paddingHorizontal: 20,
  justifyContent: "flex-end", // 글씨 밑으로 배치
  zIndex: 1,
},
scrollWrapper: {
  flex: 1,
  marginTop: 120,      // header 높이만큼 아래에서 시작
  overflow: "hidden",  // 스크롤이 header 위로 올라가지 않음
},
scrollContent: {
  paddingBottom: 120,  // 하단 버튼 영역 확보
},
   scrollArea: {
  flex: 1,
  marginTop: 60,
},
bottomFadeImage: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 300, // PNG 높이
},
cardSelected: {
  backgroundColor: "#EBF5E3",
},
cardBorderImage: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: 32,
  width: 372, // 카드 테두리 반경과 맞춰주세요
}


});