const createElement = ({ tag, classes, textContent, children }) => {
  const element = document.createElement(tag);
  classes.forEach((className) => {
    element.classList.add(className);
  });
  element.textContent = textContent;
  children?.forEach((child) => {
    element.appendChild(child);
  });
  return element;
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

  const carouselOrder = createCarouselOrder(newElems);
  const carousel = createElement({
    tag: "div",
    classes: ["carousel"],
    children: [carouselBox, carouselOrder],
  });

  const handleTransitionEnd = ({ target }) => {
    const { curX } = target.style.transform.match(
      /(?<curX>-[\d]+(\.[\d])?)/
    ).groups;
    target.style.transition = "none";
    target.style.transform = `translateX(${
      +curX + +WIDTH_PER_ELEM
    }${ELEM_UNIT})`;

    const firstElem = target.querySelector(".carousel-elem");
    target.removeChild(firstElem);

    const cBoxes = target.querySelectorAll(".carousel-elem");
    cBoxes.forEach((box) => box.classList.remove("main-elem"));
    const mainElem = cBoxes[1];
    mainElem.classList.add("main-elem");

    const curNum = target.parentNode.querySelector(".curNum");
    curNum.textContent = mainElem.dataset.index;

    target.appendChild(firstElem);
  };

  const handleTransitionStart = () => {};

  const getInterval = () => {
    return setInterval(() => {
      const cBox = document.querySelector(".carousel-box");
      cBox.style.transition = "transform 0.2s";
      cBox.style.transform = `translateX(-${WIDTH_PER_ELEM * 2}${ELEM_UNIT})`;
      cBox.removeEventListener("transitionstart", handleTransitionStart);
      cBox.removeEventListener("transitionend", handleTransitionEnd);

      cBox.addEventListener("transitionstart", handleTransitionStart);
      cBox.addEventListener("transitionend", handleTransitionEnd);
    }, 3000);
  };

  return { $carousel: carousel, getInterval };
};

export default carousel;
