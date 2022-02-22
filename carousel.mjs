import { createImgTag } from "./util.mjs";
import { imgs } from "./info.js";

/* carousel 개수, 이미지, 정보들 동기화 */
const initCarousel = (carouselInfo) => {
  const total = document.querySelector(".carousel__total").firstChild;

  total.nodeValue = carouselInfo.length;
  const carouselInner = document.querySelector(".carousel__inner");
  for (let i = 0; i < carouselInfo.length; i += 1) {
    const info = carouselInfo[i];
    const card = document.createElement("div");
    card.classList.add("carousel__card");
    card.appendChild(createImgTag("carousel__img", info.img, "메인 이미지"));

    const items = document.createElement("div");
    items.classList.add("carousel__items");
    const titleNode = document.createElement("div");
    titleNode.classList.add("carousel__title");
    const title = document.createTextNode(info.title);
    titleNode.appendChild(title);
    items.appendChild(titleNode);
    items.appendChild(createImgTag("carousel__info", imgs[0].src, imgs[0].alt));
    items.appendChild(createImgTag("carousel__info", imgs[1].src, imgs[1].alt));

    const views = document.createElement("span");
    views.classList.add("carousel__info");
    views.appendChild(document.createTextNode(" 웹툰 | "));
    views.appendChild(createImgTag("", imgs[2].src, imgs[2].alt));
    views.appendChild(document.createTextNode(info.user));
    items.appendChild(views);
    card.appendChild(items);

    const scriptNode = document.createElement("div");
    scriptNode.classList.add("carousel__script");
    const scriptWords = document.createTextNode(info.script);
    scriptNode.appendChild(scriptWords);
    card.appendChild(scriptNode);

    carouselInner.appendChild(card);
  }
};

const addCarouselEvent = (leftClass, rightClass) => {
  const item = document.querySelector(".carousel__inner");

  let x = 0;
  document.querySelector(leftClass).addEventListener("click", () => {
    x += 100;
    item.style.transition = "0.5s";
    item.style.transform = `translateX(${x}%)`;
  });
  document.querySelector(rightClass).addEventListener("click", () => {
    x -= 100;
    item.style.transition = "0.5s";
    item.style.transform = `translateX(${x}%)`;
  });
  item.addEventListener("transitionend", () => {
    console.log(1);
    if (x > 0) {
      item.insertBefore(
        item.lastElementChild.cloneNode(true),
        item.firstElementChild
      );
      item.removeChild(item.lastElementChild);
    } else {
      item.appendChild(item.firstElementChild.cloneNode(true));
      item.removeChild(item.firstElementChild);
    }
    x = 0;
    item.style.transition = "0s";
    item.style.transform = `translateX(${0}%)`;
  });
};

export { initCarousel, addCarouselEvent };
