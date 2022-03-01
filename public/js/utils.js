const $ = (selector) => document.querySelector(selector);

const dow = ["일", "월", "화", "수", "목", "금", "토"];
const getToday = () => {
  return dow[new Date().getDay()];
};

export { $, getToday };
