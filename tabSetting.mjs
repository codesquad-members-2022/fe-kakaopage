const todayTapSet = (className) => {
  const today = new Date();
  const $tab = [...document.querySelectorAll(className)];
  $tab[(today.getDay() + 6) % 7].classList.add(
    "selected-color",
    "selected-box"
  );
};

const tabMoving = (className) => {
  const $tab = [...document.querySelectorAll(className)];
  $tab.forEach((elem) => {
    elem.addEventListener("click", () => {
      $tab.forEach((val) => {
        val.classList.remove("selected-color", "selected-box");
      });
      elem.classList.add("selected-color", "selected-box");
    });
  });
};

export { todayTapSet, tabMoving };
