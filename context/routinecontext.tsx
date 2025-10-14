import { createContext, ReactNode, useContext, useState } from "react";

const routinecontext = createContext<any>(null);

export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  const [emotionText, setEmotionText] = useState("");
  const [routineData, setRoutineData] = useState({
    routineText: "",
    period: "",
    selectedDays: [] as string[],
  });

  // ✅ 감정 텍스트 관리 함수 추가
  const saveEmotionText = (text: string) => setEmotionText(text);
  const clearEmotionText = () => setEmotionText("");

  return (
    <routinecontext.Provider
      value={{
        emotionText,
        setEmotionText,
        saveEmotionText,
        clearEmotionText,
        routineData,
        setRoutineData,
      }}
    >
      {children}
    </routinecontext.Provider>
  );
};

export const useRoutine = () => useContext(routinecontext);

export default routinecontext;
