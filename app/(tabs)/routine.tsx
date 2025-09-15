import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Routine() {

                // 오늘 날짜 정보
        const today = new Date().getDate();
        const todayWeekday = new Date().getDay(); // 0:일, 1:월 ... 6:토

            // 오늘 날짜 정보
        const todayDate = new Date(); // 현재 날짜
        const todayMonth = todayDate.getMonth() + 1; // 월 (0부터 시작하므로 +1)

        // 오늘 날짜 문자열
        const todayText = `${todayMonth}월 ${today}일`;

        // 이번 주 요일
        const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

        // 이번 주 날짜 계산
        const startOfWeek = new Date();
        startOfWeek.setDate(today - todayWeekday); // 이번 주 일요일 기준

        const weekDates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        return d.getDate();
        });

        const routines = [
            "도서 30분 읽기",
            "오후 10시에 잠들기",
            "산책 1시간 하기",
            "오전 9시에 일어나기",
            "유산균 섭취",
            "쾌변하기",
            "오늘도 우렁차게 살아남기"
        ];
        const checkImages = [
            require("../../assets/images/icon-bluecheck.png"),
            require("../../assets/images/icon-yellowcheck.png"),
            require("../../assets/images/icon-pinkcheck.png"),
            require("../../assets/images/icon-greencheck.png")
        ];

    const [checkedImages, setCheckedImages] = useState<(any | null)[]>(Array(routines.length).fill(null));

    const toggleCheck = (index: number) => {
        const newCheckedImages = [...checkedImages];
        if (newCheckedImages[index] === null) {
        newCheckedImages[index] = checkImages[Math.floor(Math.random() * checkImages.length)];
        } else {
        newCheckedImages[index] = null;
        }
        setCheckedImages(newCheckedImages);
    };

    return (
    		<View style={styles.safeareaview}>
      			<View style={styles.view}>
                    <Text style={styles.todayText}>{todayText}</Text>
                    <View style={{ flexDirection: "row", gap: 34, marginHorizontal: 30, marginTop: 178 }}>

                    {weekDays.map((weekday, index) => (
                    <View key={index} style={{ alignItems: "center" }}>
                        {/* 요일 */}
                        <Text
                        style={[
                            styles.weekdayText,
                            index === 0 && { color: "#FF7C57" },  // 일요일 빨강
                            index === 6 && { color: "#5E86DF" },  // 토요일 파랑
                        ]}
                        >
                        {weekday}
                        </Text>

                        {/* 날짜 */}
                        <Text style={[styles.dateText, weekDates[index] === today && { color: "#91E04C", fontWeight: "600" }]}>
                        {weekDates[index]}
                        </Text>

                        {/* 오늘 점 표시 */}
                        {weekDates[index] === today && (
                        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#91E04C", marginTop: 4 }} />
                        )}
                    </View>
                    ))}

                    </View>

        				<View style={[styles.view2, styles.viewFlexBox]}>
          					<Image style={styles.item} width={20} height={14} resizeMode="contain" source={require("../../assets/images/icon-seed.png")}/>
          					<View style={[styles.view3, styles.viewFlexBox]}>
            						<Text style={styles.text15}>1234 개</Text>
          					</View>
        				</View>
        				<View style={styles.leading}>
          					<View style={[styles.safeareaviewLeading, styles.viewFlexBox]}>
              							<Image style={styles.item} width={40} height={40} resizeMode="contain" source={require("../../assets/images/icon-menu.png")}/>
          					</View>
        				</View>
                        <View style={{ marginTop: 100, marginHorizontal: 20 }}>
                            {routines.map((routine, index) => (
                                <Pressable
                                key={index}
                                onPress={() => toggleCheck(index)}
                                style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}
                                >
                                <Image
                                    source={checkedImages[index] ?? require("../../assets/images/icon-nonecheck.png")}
                                    style={{ width: 24, height: 24, marginRight: 12 }}
                                    resizeMode="contain"
                                />
                                <Text
                                style={{
                                    fontSize: 16,
                                    color: checkedImages[index] ? "#9EA4A9" : "#26282c", // 선택 시 초록색, 아니면 기본색
                                    fontWeight: "500",
                                    fontFamily: "NanumSquareNeo-Rg",
                                    textDecorationLine: checkedImages[index] ? "line-through" : "none" // 선택되면 줄 긋기
                                }}>
                                {routine}
                                </Text>

                                </Pressable>
                            ))}
                            </View>
        				<Text style={[styles.myRoutine, styles.text19Typo]}>My Routine</Text>
      			</View>
    		</View>
    );
}

const styles = StyleSheet.create({
  	safeareaview: {
    		backgroundColor: "#f8f8f8",
    		flex: 1
  	},
  	viewFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	textTypo1: {
    		height: 24,
    		left: 67,
    		fontFamily: "Pretendard-Medium",
    		fontSize: 18,
    		lineHeight: 22,
    		letterSpacing: -0.43,
    		textAlign: "left",
    		color: "#26282c",
    		position: "absolute"
  	},
  	text19Typo: {
    		fontFamily: "Pretendard-Medium",
    		lineHeight: 24,
    		letterSpacing: -0.43,
    		textAlign: "left",
    		position: "absolute"
  	},
  	rectangleViewLayout: {
    		width: 2,
    		backgroundColor: "#fff",
    		height: 14,
    		position: "absolute"
  	},
  	iconPosition: {
    		left: 25,
    		height: 24,
    		width: 24,
    		position: "absolute"
  	},
  	view: {
    		width: "100%",
    		height: 758,
    		overflow: "hidden",
    		backgroundColor: "#f8f8f8",
    		flex: 1
  	},
  	child: {
    		marginLeft: -201,
    		top: 264,
    		left: "50%",
    		borderRadius: 12,
    		backgroundColor: "transparent",
    		width: 402,
    		height: 8,
    		position: "absolute"
  	},
  	todayText: {
    		top: 88,
    		fontSize: 26,
    		letterSpacing: -0.26,
    		lineHeight: 28,
    		fontWeight: "600",
    		textAlign: "left",
    		color: "#26282c",
    		fontFamily: "NanumSquareNeo-Eb",
    		left: 20,
    		position: "absolute"
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
  	item: {
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
    		letterSpacing: -0.43,
    		lineHeight: 22,
    		textAlign: "left",
    		color: "#26282c",
    		fontFamily: "NanumSquareNeo-Bd"
  	},
  	leading: {
    		top: 12,
    		left: 301,
    		flexDirection: "row",
    		position: "absolute"
  	},
  	safeareaviewLeading: {
    		paddingLeft: 40,
    		paddingTop: 20,
    		paddingBottom: 11
  	},
  	text17: {
    		fontSize: 17,
    		fontFamily: "SF Pro",
    		color: "#464b53",
    		textAlign: "right",
    		lineHeight: 22
  	},
  	text18: {
    		width: 200,
    		top: 328
  	},
  	text19: {
    		top: 124,
    		fontWeight: "500",
    		fontSize: 18,
    		fontFamily: "PretendardNanumSquare-Rg",
    		color: "#74777d",
    		left: 20
  	},
  	text20: {
    		width: 200,
    		top: 479
  	},
  	text21: {
    		width: 200,
    		top: 379
  	},
  	text22: {
    		width: 200,
    		top: 529
  	},
  	text23: {
    		top: 428
  	},
  	text24: {
    		top: 579
  	},
  	inner: {
    		top: 634,
    		left: 296,
    		width: 48,
    		height: 48,
    		position: "absolute"
  	},
  	rectangleView: {
    		top: 651,
    		left: 319
  	},
  	myRoutine: {
    		top: 284,
    		left: 24,
    		fontSize: 16,
    		color: "#9ea4a9"
  	},
  	iconGridCalendar: {
    		top: 326
  	},
  	safeareaviewIconGridCalendar: {
    		top: 377
  	},
  	iconGridCalendar2: {
    		top: 426
  	},
  	iconGridCalendar3: {
    		top: 477
  	},
  	iconGridCalendar4: {
    		top: 527
  	},
  	iconGridCalendar5: {
    		top: 577
  	},
    weekdayText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#9ea4a9",
    textAlign: "center",
    marginBottom: 4,
    fontFamily: "NanumSquareNeo-Bd",
    },
    dateText: {
    fontSize: 18,
    color: "#74777d",
    textAlign: "center",
    fontFamily: "NanumSquareNeo-Bd",
    fontWeight: "600",
    marginTop: 10
    },
    lineargradientShadowBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
},
cardBorderImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,
},
text2: {
    fontSize: 16,
    color: "#26282c",
    fontWeight: "500",
    fontFamily: "NanumSquareNeo-Rg",
},



});
