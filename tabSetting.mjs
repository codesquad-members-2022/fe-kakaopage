const todayTapSet = (className) => {
  const today = new Date();
  const $tab = [...document.querySelectorAll(className)];
  $tab[(today.getDay() + 6) % 7].classList.add(
    "selected-color",
    "selected-box"
  );
};

export { todayTapSet };
