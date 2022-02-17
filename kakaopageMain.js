function changeNavBorderColor(e) {
  const navTabs = e.parentNode.childNodes;
  for (let i = 1; i < navTabs.length; i += 2) {
    const tab = navTabs[i];
    tab.style.borderBottom = "none";
  }
  e.style.borderBottom = "3px solid #ffd200";
}
