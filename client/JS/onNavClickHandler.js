import {
  removePart,
  drawWithAssembly,
  headerAssembly,
  webtoonAssembly,
  daysAssembly,
} from "./assembly.js";
import { selector, addClass, removeClass } from "./utility.js";
import { selectedNav } from "./navigator.js";

const removeAndDrawView = (target, name) => {
  let _target = typeof target === "string" ? target : target.innerHTML;
  let view = selector("main");
  let assembly;
  switch (name) {
    case "days__menu--nav":
      _target = selectedNav[".days__nav"];
    case "days__nav":
      view = selector(".column-contents");
      assembly = daysAssembly;
      removePart(".column-contents");
      break;
    case "webtoon__nav":
      assembly = webtoonAssembly;
      removePart("main", name);
      break;
    case "header__nav":
      assembly = headerAssembly;
      removePart("main");
      break;
  }
  drawWithAssembly(assembly, _target, view);
};

const markSelectedNav = (target) => {
  const parentNav = target.parentNode;
  const previousSelectedNav = selector(".selected", parentNav);
  removeClass(previousSelectedNav, "selected");
  addClass(target, "selected");
  selectedNav[`.${parentNav.className}`] = target.innerHTML;
};

const onNavClickHandler = (target, className) => {
  markSelectedNav(target);
  removeAndDrawView(target, className);
};

export { onNavClickHandler };
