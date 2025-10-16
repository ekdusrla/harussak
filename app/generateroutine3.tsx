import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useRoutine } from "../context/routinecontext";

export default function GenerateRoutine3() {
  const router = useRouter();
  const { routineData, setRoutineData } = useRoutine();
  const { routineText } = useLocalSearchParams<{ routineText?: string }>();

  // ✅ 기존 context 값으로 초기화
  const [routine, setRoutine] = useState<string>(routineData.routineText || (routineText && routineText !== "나의 루틴 만들기" ? routineText : ""));
  const [period, setPeriod] = useState<string>(routineData.period || "");
  const [selectedDays, setSelectedDays] = useState<string[]>(routineData.selectedDays || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  const isConfirmEnabled = routine.trim() !== "" && period.trim() !== "" && selectedDays.length > 0;

  // 요일 선택 토글 + context 업데이트
  const toggleDay = (day: string) => {
    setSelectedDays((prev) => {
      const newSelected = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day];
      setRoutineData({ ...routineData, routineText: routine, period, selectedDays: newSelected });
      return newSelected;
    });
  };

useEffect(() => {
  if (routineText) {
    if (routineText === "나의 루틴 만들기") {
      // 🔹 완전 초기화
      setRoutine("");
      setPeriod("");
      setSelectedDays([]);
      setRoutineData({
        ...routineData,
        routineText: "",
        period: "",
        selectedDays: [],
      });
    } else {
      // 🔹 일반 카드 선택 시
      setRoutine(routineText);
      setPeriod("");
      setSelectedDays([]);
      setRoutineData({
        ...routineData,
        routineText,
        period: "",
        selectedDays: [],
      });
    }
  }
}, [routineText]);



  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayString = today.toISOString().split("T")[0];

  const handleDayPress = (day: any) => {
    const dayDate = new Date(day.dateString);
    dayDate.setHours(0, 0, 0, 0);
    if (dayDate < today) return;

    let newSelectedDates = [...selectedDates];
    if (newSelectedDates.length === 2) newSelectedDates = [];
    newSelectedDates.push(day.dateString);
    setSelectedDates(newSelectedDates);

    // 기간 업데이트
    if (newSelectedDates.length === 2) {
      const sorted = [...newSelectedDates].sort();
      const start = new Date(sorted[0]);
      const end = new Date(sorted[1]);
      const formatDate = (d: Date) =>
        `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
      const newPeriod = `${formatDate(start)}~${formatDate(end)}`;
      setPeriod(newPeriod);
      setRoutineData({ ...routineData, routineText: routine, period: newPeriod, selectedDays });
    } else if (newSelectedDates.length === 1) {
      const d = new Date(newSelectedDates[0]);
      const formatDate = (d: Date) =>
        `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
      const newPeriod = `${formatDate(d)}~`;
      setPeriod(newPeriod);
      setRoutineData({ ...routineData, routineText: routine, period: newPeriod, selectedDays });
    }
  };

  const getMarkedDates = () => {
    const marks: { [date: string]: any } = {};
    if (selectedDates.length === 0) {
      marks[todayString] = { marked: true, dotColor: "#91E04C" };
      return marks;
    }

    const sortedDates = [...selectedDates].sort();
    const startDate = new Date(sortedDates[0]);
    const endDate = selectedDates.length === 2 ? new Date(sortedDates[1]) : startDate;

    let d = new Date(startDate);
    while (d <= endDate) {
      const dateStr = d.toISOString().split("T")[0];
      if (d.getTime() === startDate.getTime()) {
        marks[dateStr] = { startingDay: true, color: "#91E04C", textColor: "white" };
      } else if (d.getTime() === endDate.getTime()) {
        marks[dateStr] = { endingDay: true, color: "#91E04C", textColor: "white" };
      } else {
        marks[dateStr] = { color: "#91E04C", textColor: "white" };
      }
      d.setDate(d.getDate() + 1);
    }
    return marks;
  };

  return (
    <View style={styles.safeareaview}>
      <View style={[styles.view, styles.viewBg]}>
        <View style={[styles.rectangleLineargradient, styles.child4Border]} />
        <View style={[styles.child4, styles.child4Layout]} />
        <Text style={styles.text}>기간을 설정해주세요</Text>
        <Text style={[styles.text2, styles.textTypo1]}>루틴</Text>
        <Text style={[styles.text3, styles.textTypo1]}>루틴 기간</Text>
        <Text style={[styles.text4, styles.textTypo1]}>반복 주기</Text>

        {/* 요일 선택 */}
        <Pressable
          style={[styles.dayButton, styles.wrapper, styles.frameWrapperFlexBox, selectedDays.includes("일") && styles.daySelected]}
          onPress={() => toggleDay("일")}
        >
          <Text style={[styles.text5, styles.textTypo]}>일</Text>
        </Pressable>
        <Pressable
          style={[styles.dayButton, styles.container, styles.frameWrapperFlexBox, selectedDays.includes("월") && styles.daySelected]}
          onPress={() => toggleDay("월")}
        >
          <Text style={[styles.text6, styles.textTypo]}>월</Text>
        </Pressable>
        <Pressable
          style={[styles.dayButton, styles.frame, styles.frameWrapperFlexBox, selectedDays.includes("화") && styles.daySelected]}
          onPress={() => toggleDay("화")}
        >
          <Text style={[styles.text6, styles.textTypo]}>화</Text>
        </Pressable>
        <Pressable
          style={[styles.dayButton, styles.frameView, styles.frameWrapperFlexBox, selectedDays.includes("수") && styles.daySelected]}
          onPress={() => toggleDay("수")}
        >
          <Text style={[styles.text6, styles.textTypo]}>수</Text>
        </Pressable>
        <Pressable
          style={[styles.dayButton, styles.safeareaviewWrapper, styles.frameWrapperFlexBox, selectedDays.includes("목") && styles.daySelected]}
          onPress={() => toggleDay("목")}
        >
          <Text style={[styles.text6, styles.textTypo]}>목</Text>
        </Pressable>
        <Pressable
          style={[styles.dayButton, styles.wrapper2, styles.frameWrapperFlexBox, selectedDays.includes("금") && styles.daySelected]}
          onPress={() => toggleDay("금")}
        >
          <Text style={[styles.text6, styles.textTypo]}>금</Text>
        </Pressable>
        <Pressable
          style={[styles.dayButton, styles.wrapper3, styles.frameWrapperFlexBox, selectedDays.includes("토") && styles.daySelected]}
          onPress={() => toggleDay("토")}
        >
          <Text style={[styles.text11, styles.textTypo]}>토</Text>
        </Pressable>

        {/* 캘린더 */}
        <Pressable style={[styles.iconCalendarParent, styles.iconLayout]} onPress={() => setModalVisible(true)}>
          <Image style={[styles.iconCalendar, styles.iconLayout]} resizeMode="cover" source={require("../assets/images/calendar.png")} />
        </Pressable>
        <Modal transparent visible={modalVisible} animationType="fade" onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalWrapper}>
            <View style={styles.modalContent}>
              <Calendar
                style={styles.calendar}
                markedDates={getMarkedDates()}
                markingType="period"
                onDayPress={handleDayPress}
                theme={{
                  arrowColor: "#91E04C",
                  todayTextColor: "#91E04C",
                  textDayFontSize: 14,
                  textMonthFontSize: 16,
                  textDayHeaderFontSize: 12,
                }}
              />
            </View>
            <Pressable style={[styles.button, { marginTop: -44 }]} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>확인</Text>
            </Pressable>
          </View>
        </Modal>

        <Image style={[styles.frameIcon, styles.frameIconPosition]} width={153} height={28} source={require("../assets/images/bar3.png")} />

        {/* 루틴 입력 */}
{/* 루틴 입력 */}
<View style={[styles.wrapper5, styles.wrapperFlexBox]}>
  <TextInput
    style={styles.textInput}
    value={routine}
    onChangeText={(val) => {
      setRoutine(val);
      setRoutineData({ ...routineData, routineText: val, period, selectedDays });
    }}
    placeholder={
      routineText === "나의 루틴 만들기"
        ? "루틴을 입력해주세요"
        : routineText && routineText !== "나의 루틴 만들기"
        ? routineText
        : "반복하고 싶은 습관을 적어주세요"
    }
    placeholderTextColor="#CACDD3"
  />
</View>


        {/* 기간 입력 */}
        <Pressable style={[styles.wrapper6, styles.wrapperFlexBox]} onPress={() => setModalVisible(true)}>
          <TextInput style={[styles.textInputt]} placeholder="당신의 루틴 언제까지 할까요?" placeholderTextColor={"#CACDD3"} value={period} editable={false} />
        </Pressable>

        {/* 버튼 */}
        <View style={[styles.buttonWrap, styles.frameIconPosition]}>
          <Pressable
            style={[styles.wrapper7, styles.wrapperLayout, { backgroundColor: isConfirmEnabled ? "#91E04C" : "#CACDD3" }]}
            disabled={!isConfirmEnabled}
            onPress={() => router.push("/generateroutine4")}
          >
            <Text style={[styles.text15, styles.textPosition]}>확인</Text>
          </Pressable>
          <Pressable style={[styles.wrapper8, styles.wrapperLayout]} onPress={() => router.push("/generateroutine2")}>
            <Text style={[styles.text16, styles.textPosition]}>이전으로</Text>
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
    viewBg: {
            overflow: "hidden",
            backgroundColor: "#f8f8f8"
    },
    child4Border: {
            borderWidth: 0.8,
            borderColor: "#eaeced",
            backgroundColor: "transparent",
            borderRadius: 12,
            marginLeft: -186,
            borderStyle: "solid",
            left: "50%",
            position: "absolute"
    },
    child4Layout: {
            height: 60,
            top: 207
    },
    textTypo1: {
            fontSize: 20,
            lineHeight: 22,
            letterSpacing: -0.43,
            color: "#26282c",
            fontFamily: "NanumSquareNeo-Bd",
            fontWeight: "600"
    },
    frameWrapperFlexBox: {
            justifyContent: "center",
            height: 44,
            width: 44,
            top: 498,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute"
    },
    textTypo: {
            lineHeight: 21,
            letterSpacing: -0.41,
            fontSize: 16,
            textAlign: "center",
            fontFamily: "NanumSquareNeo-Rg"
    },
    iconLayout: {
            height: 50,
            width: 55,
            position: "absolute"
    },
    frameIconPosition: {
            left: "50%",
            position: "absolute"
    },
    wrapperFlexBox: {
            alignItems: "center",
            flexDirection: "row",
            position: "absolute"
    },
    wrapperLayout: {
            borderRadius: 8,
            top: 18,
            height: 44,
            position: "absolute",
            overflow: "hidden"
    },
    textPosition: {
            marginTop: -11,
            textAlign: "center",
            lineHeight: 22,
            letterSpacing: -0.43,
            fontSize: 14,
            top: "50%",
            fontFamily: "NanumSquareNeo-Bd",
            fontWeight: "600",
            left: "50%",
            position: "absolute"
    },
    view: {
            width: "100%",
            height: 758,
            flex: 1,
            overflow: "hidden"
    },
    rectangleLineargradient: {
            height: 80,
            width: 370,
            top: 329,
            marginLeft: -186,
    },
    child4: {
            width: 370,
            borderWidth: 0.8,
            borderColor: "#eaeced",
            backgroundColor: "transparent",
            borderRadius: 12,
            marginLeft: -186,
            borderStyle: "solid",
            left: "50%",
            position: "absolute"
    },
    text: {
            top: 100,
            fontSize: 20,
            letterSpacing: -0.26,
            lineHeight: 28,
            textAlign: "left",
            color: "#26282c",
            fontFamily: "NanumSquareNeo-Bd",
            fontWeight: "600",
            left: 20,
            position: "absolute"
    },
    text2: {
            top: 173,
            textAlign: "left",
            fontWeight: "700",
            fontSize: 16,
            left: 20,
            position: "absolute"
    },
    text3: {
            top: 295,
            textAlign: "left",
            fontWeight: "700",
            fontSize: 16,
            left: 20,
            position: "absolute"
    },
    text4: {
            top: 456,
            textAlign: "left",
            fontWeight: "700",
            fontSize: 16,
            left: 20,
            position: "absolute"
    },
    text5: {
            color: "#ff6337"
    },
    text6: {
            color: "#26282c"
    },
    wrapper: {left: 24},
    container: {left: 78},
    frame: {left: 130},
    frameView: {left: 182},
    safeareaviewWrapper: {left: 234},
    wrapper2: {left: 286},
    wrapper3: {left: 338},
    text11: {color: "#2d5cc7"},
    iconCalendarParent: {
            top: 344,
            left: 29
    },
    iconCalendar: {
            top: 0,
            left: 0
    },
    frameIcon: {
            marginLeft: -77,
            top: 50,
            width: 153,
            height: 28
    },
    wrapper5: {
            paddingLeft: 12,
            left: 20,
            height: 52,
            top: 212,
            width: 320
    },
    wrapper6: {
            left: 86,
            width: 254,
            paddingLeft: 16,
            height: 80,
            top: 329
    },
    buttonWrap: {
            marginLeft: -180,
            bottom: 10,
            width: 400,
            height: 80,
            overflow: "hidden",
            backgroundColor: "#f8f8f8"
    },
    wrapper7: {
            left: 114,
            backgroundColor: "#91e04c",
            width: 250
    },
    text15: {
            color: "#fff",
            marginLeft: -14,
            marginTop: -11
    },
    wrapper8: {
            borderColor: "#cacdd3",
            width: 104,
            borderWidth: 1,
            borderStyle: "solid",
            left: 0,
    },
    text16: {
            marginLeft: -27,
            color: "#9ea4a9"
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        paddingLeft: -6,
        paddingVertical: 6,
        fontSize: 16,
        color: "#26282C",
        fontFamily: "NanumSquareNeo-Rg"
    },
        textInputt: {
        flex: 1,
        paddingHorizontal: 10,
        paddingLeft: 32,
        paddingVertical: 6,
        fontSize: 16,
        color: "#26282C",
        fontFamily: "NanumSquareNeo-Rg"
    },
    daySelected: {
    backgroundColor: "#F9EEED",
    borderColor: "#FBCBC9",
    borderWidth: 0.5, // 선택되면 빨간 원
    },
    dayButton: {
    width: 32,
    height: 32,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    backgroundColor: "#f8f8f8", // 기본 회색 배경
    },
    button: { backgroundColor: "#91E04C", padding: 8, borderRadius: 6, paddingHorizontal: 20 },
  buttonText: { color: "white", fontSize: 14, textAlign: "center" },
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    width: 300,
    height: 430,
    justifyContent: "flex-start",
    elevation: 10,
  },
  calendar: {
    width: "100%",
  },
});