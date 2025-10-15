// api/api.js
const SERVER_IP = "http://3.37.215.53:8080"; // 실제 서버 주소로 바꿔줘

export const getRoutines = async () => {
  try {
    const response = await fetch(`${SERVER_IP}/routines`);
    if (!response.ok) throw new Error("서버 응답 오류");
    const data = await response.json();
    return data; // JSON 배열 형태 반환
  } catch (error) {
    console.error("getRoutines 에러:", error);
    return [];
  }
};

export default getRoutines;
