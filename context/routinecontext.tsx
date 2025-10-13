import { createContext, ReactNode, useContext, useState } from "react";

const routinecontext = createContext<any>(null);

export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  const [emotionText, setEmotionText] = useState(""); // ✅ 추가
  const [routineData, setRoutineData] = useState({
    routineText: "",
    period: "",
    selectedDays: [] as string[],
  });

  return (
    <routinecontext.Provider value={{ emotionText, setEmotionText, routineData, setRoutineData }}>
      {children}
    </routinecontext.Provider>
  );
};

export const useRoutine = () => useContext(routinecontext);

export default routinecontext;
