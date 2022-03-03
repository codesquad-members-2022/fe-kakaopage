export const getNowDay = () => {
  const now = new Date();
  let nowDay = now.getDay() - 1;
  if (nowDay === -1) {
    nowDay = 6;
  }
  return nowDay;
};
