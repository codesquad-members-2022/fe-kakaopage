import { throttle } from "throttle-debounce";

const createElement = ({ tag, classes, textContent, children, event }) => {
  const element = document.createElement(tag);
  classes.forEach((className) => {
    element.classList.add(className);
  });
  element.textContent = textContent;
  children?.forEach((child) => {
    element.appendChild(child);
  });
  if (event) {
    const { eventType, callback } = event;
    element.addEventListener(eventType, callback);
  }
  return element;
};

const handlePrevButton = ({ elemWidth, elemUnit }) => {
  const cBox = document.querySelector(".carousel-box");
  const { curX } = cBox.style.transform.match(
    /(?<curX>-?[\d]+(\.[\d])?)/
  ).groups;

  cBox.style.transition = "transform 0.2s";
  cBox.style.transform = `translateX(${+curX + +elemWidth}${elemUnit})`;

  setTimeout(() => {
    cBox.style.transition = "none";
    cBox.style.transform = `translateX(${+curX}${elemUnit})`;
    const lastElem = cBox.lastChild;
    cBox.removeChild(lastElem);

    const cBoxes = cBox.querySelectorAll(".carousel-elem");
    cBoxes.forEach((box) => box.classList.remove("main-elem"));
    const mainElem = cBoxes[0];
    mainElem.classList.add("main-elem");

    const curNum = cBox.parentNode.querySelector(".curNum");
    curNum.textContent = mainElem.dataset.index;

    const firstElem = cBox.firstChild;
    cBox.insertBefore(lastElem, firstElem);
  }, 200);
};

const handleNextButton = ({ elemWidth, elemUnit }) => {
  const cBox = document.querySelector(".carousel-box");
  const { curX } = cBox.style.transform.match(
    /(?<curX>-?[\d]+(\.[\d])?)/
  ).groups;

  cBox.style.transition = "transform 0.2s";
  cBox.style.transform = `translateX(${+curX - +elemWidth}${elemUnit})`;

  setTimeout(() => {
    const firstElem = cBox.firstChild;
    cBox.removeChild(firstElem);

    const cBoxes = cBox.querySelectorAll(".carousel-elem");
    cBoxes.forEach((box) => box.classList.remove("main-elem"));
    const mainElem = cBoxes[1];
    mainElem.classList.add("main-elem");

    const curNum = cBox.parentNode.querySelector(".curNum");
    curNum.textContent = mainElem.dataset.index;

    cBox.appendChild(firstElem);

    cBox.style.transition = "none";
    cBox.style.transform = `translateX(${+curX}${elemUnit})`;
  }, 210);
};

const createArrowBox = ({ elemWidth, elemUnit }) => {
  const prevArrow = createElement({
    tag: "div",
    classes: ["arrow", "arrow__prev"],
    textContent: "<",
    event: {
      eventType: "click",
      callback: throttle(500, () => {
        handlePrevButton({ elemWidth, elemUnit });
      }),
    },
  });
  const nextArrow = createElement({
    tag: "div",
    classes: ["arrow", "arrow__next"],
    textContent: ">",
    event: {
      eventType: "click",
      callback: throttle(500, () => {
        handleNextButton({ elemWidth, elemUnit });
      }),
    },
  });
  const arrowBox = createElement({
    tag: "div",
    classes: ["arrow-box"],
    children: [prevArrow, nextArrow],
  });
  return arrowBox;
};

const createCarouselOrder = (elems) => {
  const carouselCurNum = createElement({
    tag: "span",
    classes: ["orderNum", "curNum"],
    textContent: 1,
  });
  const orderBar = createElement({
    tag: "span",
    classes: ["orderBar"],
    textContent: "/",
  });
  const carouselTotalNum = createElement({
    tag: "span",
    classes: ["orderNum"],
    textContent: elems.length,
  });
  const carouselOrder = createElement({
    tag: "div",
    classes: ["carousel-order"],
    children: [carouselCurNum, orderBar, carouselTotalNum],
  });
  return carouselOrder;
};

const createCarouselElems = (elems) => {
  return elems.map((elem, index) => {
    const cloneElem = elem.cloneNode(true);
    cloneElem.classList.add("carousel-elem");
    cloneElem.setAttribute("data-index", index === 0 ? elems.length : index);
    return cloneElem;
  });
};

/**
 *
 * @param  {...Node} elems 캐러셀에 넣을 요소들
 * @returns {Node} $carousel
 */
const carousel = ({ elems, unit, elemWidth }) => {
  if (elems.length === 1) {
    const ONLY_ONE_SCREEN = elems[0];
    return ONLY_ONE_SCREEN;
  }
  const newElems = [
    elems[elems.length - 1],
    ...elems.slice(0, elems.length - 1),
  ];
  const isRequireClone = elems.length === 2;
  const WIDTH_PER_ELEM = elemWidth;
  const ELEM_UNIT = unit;

  const carouselChildren = isRequireClone
    ? [...createCarouselElems(newElems), ...createCarouselElems(newElems)]
    : createCarouselElems(newElems);

  const carouselBox = createElement({
    tag: "div",
    classes: ["carousel-box"],
    children: carouselChildren,
  });
  carouselBox.style.width = `${
    newElems.length * 100 * (isRequireClone ? 2 : 1)
  }%`;

  carouselBox.style.transform = `translateX(-${WIDTH_PER_ELEM}${ELEM_UNIT})`;

  const arrowBox = createArrowBox({ elemWidth, elemUnit: unit });
  const carouselOrder = createCarouselOrder(newElems);
  const carousel = createElement({
    tag: "div",
    classes: ["carousel"],
    children: [carouselBox, arrowBox, carouselOrder],
  });

  const handleTransitionStart = ({ target }) => {
    console.log(target, "start");
  };
  const handleTransitionEnd = ({ target }) => {
    console.log(target, "end");
  };

  const getInterval = () => {
    return setInterval(() => {
      const cBox = document.querySelector(".carousel-box");
      handleNextButton({ elemWidth, elemUnit: unit });
      cBox.addEventListener("transitionstart", handleTransitionStart, {
        once: true,
      });
      cBox.addEventListener("transitionend", handleTransitionEnd, {
        once: true,
      });
    }, 3000);
  };

  return { $carousel: carousel, getInterval };
};

export default carousel;
