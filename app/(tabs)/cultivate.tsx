import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Cultivate() {
  // 카드에 들어갈 데이터
  const cards = [
    { id: 1, emoji: "📖", title: "도서 30분", dday: "D-2", icon: require("../../assets/images/growth0.png") },
    { id: 2, emoji: "💊", title: "유산균 섭취", dday: "D-2", icon: require("../../assets/images/growth1.png") },
    { id: 3, emoji: "🚶", title: "산책 1시간", dday: "D-2", icon: require("../../assets/images/growth2.png") },
    { id: 4, emoji: "👤", title: "영양제 섭취", dday: "D-2", icon: require("../../assets/images/growth3.png") },
    { id: 5, emoji: "🌞", title: "오전 9시 기상", dday: "D-2", icon: require("../../assets/images/growth4.png") },
    { id: 6, emoji: "🌛", title: "오후 10시 취침", dday: "D-2", icon: require("../../assets/images/growth5.png") },
  ];

  return (
    <View style={styles.safeareaview}>
        <View style={[styles.view2, styles.viewFlexBox]}>
        <Image style={styles.item} width={20} height={14} resizeMode="contain" source={require("../../assets/images/icon-seed.png")} />
        <View style={[styles.view3, styles.viewFlexBox]}>
            <Text style={styles.text15}>1234 개</Text>
        </View>
        </View>
      <Image style={[styles.iconGridCalendar, styles.d2Parent2Layout]}
        width={24} height={24} source={require("../../assets/images/icon-question.png")} />
        {/* 상단 바 */}
      <View style={styles.topBar}>
      </View>

      {/* 제목 */}
      <Text style={styles.title}>나의 정원</Text>
      <Text style={styles.subtitle}>식물과 함께 성장하는 우리의 하루</Text>

      {/* 카드 리스트 */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          {cards.map((card) => (
            <View key={card.id} style={styles.card}>
              <Text style={styles.dday}>{card.dday}</Text>
              <View style={styles.emojiCircle}>
                <Text style={styles.emoji}>{card.emoji}</Text>
              </View>
              <Image source={card.icon} style={styles.cardImage} resizeMode="contain" />
              <Text style={styles.cardTitle}>{card.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 80,
  },
  seedContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 0.8,
    borderColor: "#fff",
    shadowColor: "rgba(158, 164, 169, 0.25)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
  seedIcon: {
    width: 20,
    height: 14,
    marginRight: 4,
  },
  seedText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#26282c",
    fontFamily: "NanumSquareNeo-Bd",
  },
  questionIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#26282c",
    textAlign: "center",
    marginTop: 24,
    fontFamily: "NanumSquareNeo-Bd",
  },
  subtitle: {
    textAlign: "center",
    color: "#74777d",
    fontSize: 12,
    marginBottom: 24,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#eaeced",
    paddingVertical: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  dday: {
    color: "#9ea4a9",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 4,
    fontFamily: "NanumSquareNeo-Rg",
  },
  emojiCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f3f4f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  emoji: {
    fontSize: 16,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 12,
    color: "#1c1e1f",
    textAlign: "center",
    fontFamily: "NanumSquareNeo-Rg",
  },item: {
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
    view2: {
    		top: 40,
    		boxShadow: "2px 2px 12px rgba(158, 164, 169, 0.25)",
    		shadowColor: "rgba(158, 164, 169, 0.25)",
    		shadowOffset: {
      			width: 2,
      			height: 2
    		},
    		shadowRadius: 12,
    		elevation: 12,
    		shadowOpacity: 1,
    		backgroundColor: "rgba(255, 255, 255, 0.6)",
    		borderStyle: "solid",
    		borderColor: "#fff",
    		borderWidth: 0.8,
    		height: 28,
    		paddingHorizontal: 8,
    		paddingVertical: 7,
    		gap: 2,
    		borderRadius: 30,
    		alignItems: "center",
    		overflow: "hidden",
    		left: 20,
    		position: "absolute"
  	},
  	viewFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
    iconGridCalendar: { left: 360, width: 24, top: 40, height: 24 },
    d2Parent2Layout: { height: 24, position: "absolute" },
});
