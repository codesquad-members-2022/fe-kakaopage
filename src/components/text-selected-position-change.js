export const textSelectedPositionChange = (el, idx) => {
  for (let j = 0; j < el.length; j++) {
    el[j].className = "nav-box__text weekly-nav";
  }
  el[idx].className = "nav-box__text weekly-nav selected-text";
};
