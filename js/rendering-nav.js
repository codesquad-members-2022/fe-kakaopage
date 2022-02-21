export const renderingNav = (selectedNav, selectedElement) => {
  document.querySelectorAll(`.${selectedNav} li`).forEach((e) => {
    e.id = "";
  });
  selectedElement.id = "selected";
};
