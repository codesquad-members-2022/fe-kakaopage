import { carouselInfo } from "./info.js";

const initCarousel = (carouselInfo) => {};

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
