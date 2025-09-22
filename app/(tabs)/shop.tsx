import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Shop() {
  // 장식 아이템 배열
  const decoItems = [
    { img: require("../../assets/images/deco-castle.png"), name: "동화 속 성" },
    { img: require("../../assets/images/deco-pebbles.png"), name: "조약돌 길" },
    { img: require("../../assets/images/deco-tree.png"), name: "둥근 나무" },
    { img: require("../../assets/images/deco-clover.png"), name: "세잎클로버" },
    { img: require("../../assets/images/deco-bridge.png"), name: "나무 다리" },
    { img: require("../../assets/images/deco-wildflower.png"), name: "코스모스" },
    { img: require("../../assets/images/deco-plants.png"), name: "잔디와 풀" },
  ];

  // 하늘 아이템 배열
  const skyItems = [
    { img: require("../../assets/images/background-morning.png"), name: "아침 햇살" },
    { img: require("../../assets/images/background-night.png"), name: "별밤 하늘" },
    { img: require("../../assets/images/background-sunset.png"), name: "노을빛 하늘" },
    { img: require("../../assets/images/background-dawn.png"), name: "새벽 하늘" },
    { img: require("../../assets/images/background-purple.png"), name: "보랏빛 하늘" },
    { img: require("../../assets/images/background-sea.png"), name: "바닷속 세상" },
  ];

  return (
    <ScrollView style={styles.safeareaview} contentContainerStyle={{ paddingBottom: 50 }}>
      <View style={styles.viewBg}>
        {/* 씨앗 표시 */}
        <View style={[styles.view5, styles.viewFlexBox]}>
          <Image
            style={styles.itemIcon}
            resizeMode="contain"
            source={require("../../assets/images/icon-seed.png")}
          />
          <View style={[styles.view6, styles.viewFlexBox]}>
            <Text style={styles.text15}>1234 개</Text>
          </View>
        </View>

        {/* ===== 안내 배너 ===== */}
        <View style={styles.bannerContainer}>
          <ImageBackground
            source={require("../../assets/images/shopbanner.png")}
            style={styles.bannerImage}
            imageStyle={{ borderRadius: 0 }}
          >
            <Text style={styles.bannerText1}>베타 버전</Text>
            <Text style={styles.bannerText}>전 상품 무료!</Text>
            <Text style={styles.bannerSub}>* 아이템 구매시 씨앗이 차감되지 않습니다</Text>
          </ImageBackground>
        </View>
        {/* ===== 장식 섹션 ===== */}
        <Text style={[styles.sectionTitle]}>장식</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.twoRowWrapper}>
            {/* 위줄 */}
            <View style={styles.row}>
            {decoItems
                .filter((_, idx) => idx % 2 === 0)
                .map((item, idx) => (
                <View key={`deco-top-${idx}`} style={styles.itemCard}>
                    <Image
                    source={item.img}
                    style={item.name === "동화 속 성" ? styles.itemImage : styles.itemImageLarge}
                    resizeMode="cover"
                    />
                    <Text style={styles.itemText}>{item.name}</Text>
                    {/* 씨앗 표시 */}
                    <View style={[styles.view55, styles.viewFlexBox]}>
                    <Image
                        style={styles.itemIcon}
                        resizeMode="contain"
                        source={require("../../assets/images/icon-seed.png")}
                    />
                    <View style={[styles.view6, styles.viewFlexBox]}>
                        <Text style={styles.text15}>122 개</Text>
                    </View>
                    </View>
                </View>
                ))}
            </View>

            {/* 아래줄 */}
            <View style={styles.row}>
            {decoItems
                .filter((_, idx) => idx % 2 === 1)
                .map((item, idx) => (
                <View key={`deco-bottom-${idx}`} style={styles.itemCard}>
                    <Image
                    source={item.img}
                    style={item.name === "동화 속 성" ? styles.itemImage : styles.itemImageLarge}
                    resizeMode="cover"
                    />
                    <Text style={styles.itemText}>{item.name}</Text>
                    {/* 씨앗 표시 */}
                    <View style={[styles.view55, styles.viewFlexBox]}>
                    <Image
                        style={styles.itemIcon}
                        resizeMode="contain"
                        source={require("../../assets/images/icon-seed.png")}
                    />
                    <View style={[styles.view6, styles.viewFlexBox]}>
                        <Text style={styles.text15}>122 개</Text>
                    </View>
                    </View>
                </View>
                ))}
            </View>
        </View>
        </ScrollView>

        {/* ===== 하늘 섹션 ===== */}
        <Text style={[styles.sectionTitle]}>하늘</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.twoRowWrapper}>
            {/* 위줄 */}
            <View style={styles.row}>
            {skyItems
                .filter((_, idx) => idx % 2 === 0)
                .map((item, idx) => (
                <View key={`sky-top-${idx}`} style={styles.itemCard}>
                    {/* 아이템 이미지 + 이름 */}
                    <Image source={item.img} style={styles.skyItemImage} resizeMode="cover" />
                    <Text style={styles.itemText}>{item.name}</Text>
                    {/* 씨앗 갯수 표시 */}
                    <View style={[styles.view55, styles.viewFlexBox]}>
                    <Image
                        style={styles.itemIcon}
                        resizeMode="contain"
                        source={require("../../assets/images/icon-seed.png")}
                    />
                    <View style={[styles.view6, styles.viewFlexBox]}>
                        <Text style={styles.text15}>122 개</Text>
                    </View>
                    </View>
                </View>
                ))}
            </View>

            {/* 아래줄 */}
            <View style={styles.row}>
            {skyItems
                .filter((_, idx) => idx % 2 === 1)
                .map((item, idx) => (
                <View key={`sky-bottom-${idx}`} style={styles.itemCard}>
                {/* 아이템 이미지 + 이름 */}
                    <Image source={item.img} style={styles.skyItemImage} resizeMode="cover" />
                    <Text style={styles.itemText}>{item.name}</Text>
                    {/* 씨앗 갯수 표시 */}
                    <View style={[styles.view55, styles.viewFlexBox]}>
                    <Image
                        style={styles.itemIcon}
                        resizeMode="contain"
                        source={require("../../assets/images/icon-seed.png")}
                    />
                    <View style={[styles.view6, styles.viewFlexBox]}>
                        <Text style={styles.text15}>122 개</Text>
                    </View>
                    </View>
                </View>
                ))}
            </View>
        </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  viewBg: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#26282c",
    marginTop: 40,
    marginBottom: 12,
    fontFamily: "NanumSquareNeo-Eb",
  },
  /* 배너 */
  bannerContainer: {
    marginTop: 0,
    marginLeft: -30,
    marginBottom: -52
  },
  bannerImage: {
    width: "105%",
    height: 300,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  bannerText1: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "NanumSquareNeo-Bd",
    color: "#FBD730",
    marginLeft: 28,
  },
  bannerText: {
    fontSize: 36,
    fontWeight: "800",
    fontFamily: "NanumSquareNeo-Hv",
    color: "#F6F8FA",
    marginBottom: 4,
    marginLeft: 28,
  },
  bannerSub: {
    fontSize: 12,
    color: "#EAECED",
    fontFamily: "Pretendard-Medium",
    marginLeft: 28,
    marginTop: 36,
  },
  /* 카드 */
  scrollContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 16,
    columnGap: 16,
    height: 340, // 2줄이 들어갈 수 있게 높이 지정
    paddingRight: 20,
  },
  itemImage: {
    width: 48,
    height: 84,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#464B53",
    fontFamily: "NanumSquareNeo-Bd",
  },
  /* 씨앗 표시 */
  view5: {
    marginTop: 20,
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderColor: "#fff",
    borderWidth: 0.8,
    height: 28,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 30,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    shadowColor: "rgba(158, 164, 169, 0.25)",
    boxShadow: "2px 2px 12px rgba(158, 164, 169, 0.25)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
    view55: {
    marginTop: 4,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderColor: "#fff",
    borderWidth: 0.8,
    height: 28,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 30,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    shadowColor: "rgba(158, 164, 169, 0.25)",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  itemIcon: {
    width: 20,
    height: 14,
  },
  text15: {
    fontSize: 12,
    fontWeight: "600",
    color: "#26282c",
    fontFamily: "NanumSquareNeo-Bd",
    marginLeft: 5,
  },
  view6: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: -2,
  },
  twoRowWrapper: {
  flexDirection: "column", // 위아래로 두 줄
  gap: 8,                 // 줄 간격
},
row: {
  flexDirection: "row",    // 가로로 나열
  gap: 10,                 // 아이템 간격
},
itemCard: {
  width: 112,
  height: 148,
  borderRadius: 16,
  backgroundColor: "#EAECED",
  justifyContent: "center",
  alignItems: "center",
  shadowColor: "rgba(0,0,0,0.1)",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 4,
  elevation: 4,
  marginBottom: 8,
},
skyItemImage: {
  width:52,   // 원하는 가로 크기
  height: 80,  // 원하는 세로 크기
  marginBottom: 5,
},
itemImageLarge: {
  width: 80,   // 다른 카드들 좀 더 큰 크기
  height: 80,
  marginBottom: 5,
},


});
