function changeBorderColor(e) {
  const Tabs = e.parentNode.childNodes;
  for (let i = 1; i < Tabs.length; i += 2) {
    const tab = Tabs[i];
    tab.style.borderBottom = "none";
  }
  e.style.borderBottom = "3px solid #ffd200";
}
