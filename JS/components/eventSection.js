// ========== event ==========
export function makeEventSection() {
  const newList = document.createElement("div");
  newList.classList.add('event__img');
  newList.innerHTML = `<img src="https://dn-img-page.kakao.com/download/resource?kid=deu6dT/hzp2nVsO2d/FYkdB8uFGaSppYpxkP4Gck" alt="런칭 기념 이벤트">`

  return newList;
}
