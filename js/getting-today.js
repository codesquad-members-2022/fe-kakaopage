const dow = ["일", "월", "화", "수", "목", "금", "토"];
export const getToday = () => {
  return dow[new Date().getDay()];
};
