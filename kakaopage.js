const renderingNav = (nav, selected) => {
  document.querySelectorAll(`.${nav}__nav__btn`).forEach((e) => {
    e.id = "";
  });
  selected.id = "selected";
};

$(".dowTop__nav").addEventListener("click", (e) => {
  if (e.target.nodeName !== "LI") return;
  renderingNav("dowTop", e.target);
});

$(".page-main__nav").addEventListener("click", (e) => {
  if (e.target.nodeName !== "LI") return;
  renderingNav("page-main", e.target);
});
