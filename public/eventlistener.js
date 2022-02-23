import { $ } from "./utils.js";
import { renderHome } from "./render.js";

const webtoonCateEvL = () => {
  return $(".webtoon-category").addEventListener("click", (e) => {
    const cateList = e.target.closest("ul").childNodes;
    cateList.forEach((node) => {
      if (node.nodeType === 1) {
        node.classList.remove("text-color--black");
      }
    });
    e.target.classList.add("text-color--black");

    const children = [...$("main").childNodes].slice(1);
    children.forEach((child) => $("main").removeChild(child));

    switch (e.target.dataset.cate) {
      case "home": {
        renderHome();
        break;
      }
    }
  });
};

export { webtoonCateEvL };
