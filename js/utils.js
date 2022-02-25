export const $ = (className) => document.querySelector(className);
export const days = ['월', '화', '수', '목', '금', '토', '일', '완결'];
export const today = days[new Date().getDay()];