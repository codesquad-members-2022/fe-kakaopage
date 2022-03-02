import { renderHome } from "./render/all/home.mjs";
import { renderFooter } from "./render/footer/inner.mjs";
import { renderHeaderGnb } from "./render/header/gnb.mjs";
import { renderHeaderInner } from "./render/header/inner.mjs";

document.addEventListener("click", (e) => {
  e.preventDefault();
});

/* header rendering */
renderHeaderInner();
renderHeaderGnb();
renderHome();

/* footer rendering */
renderFooter();
