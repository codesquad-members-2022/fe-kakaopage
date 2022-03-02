import { throttle } from "../../util/util.mjs";

const addCarouselEvent = (leftClass, rightClass) => {
  const item = document.querySelector(".carousel__inner");
  const counts = document.querySelector(".carousel__counts");
  const maxCounts = document.querySelector(".carousel__total");
  const leftButton = document.querySelector(leftClass);
  const rightButton = document.querySelector(rightClass);

  let x = -100;
  item.style.transform = `translateX(${x}%)`;
  leftButton.addEventListener(
    "click",
    throttle(() => {
      counts.firstChild.nodeValue =
        Number(counts.firstChild.nodeValue) === 1
          ? Number(maxCounts.firstChild.nodeValue)
          : Number(counts.firstChild.nodeValue) - 1;
      x += 100;
      item.style.transition = "0.5s";
      item.style.transform = `translateX(${x}%)`;
    }, 500)
  );

  rightButton.addEventListener(
    "click",
    throttle(() => {
      counts.firstChild.nodeValue =
        counts.firstChild.nodeValue === maxCounts.firstChild.nodeValue
          ? 1
          : Number(counts.firstChild.nodeValue) + 1;
      x -= 100;
      item.style.transition = "0.5s";
      item.style.transform = `translateX(${x}%)`;
    }, 500)
  );

  item.addEventListener("transitionend", () => {
    if (x === 0) {
      item.removeChild(item.lastElementChild);
      item.insertBefore(
        item.lastElementChild.previousElementSibling.cloneNode(true),
        item.firstElementChild
      );
    } else {
      item.removeChild(item.firstElementChild);
      item.appendChild(
        item.firstElementChild.nextElementSibling.cloneNode(true)
      );
    }
    x = -100;
    item.style.transition = "0s";
    item.style.transform = `translateX(-100%)`;
  });
};

export { addCarouselEvent };
