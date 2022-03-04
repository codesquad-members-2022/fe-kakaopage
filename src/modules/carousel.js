import { throttle } from "throttle-debounce";

const createElement = ({ tag, classes, textContent, children, event, css }) => {
  const element = document.createElement(tag);
  classes.forEach((className) => {
    element.classList.add(className);
  });
  element.textContent = textContent;
  children?.forEach((child) => {
    if (child) element.appendChild(child);
  });
  if (event) {
    const { eventType, callback } = event;
    element.addEventListener(eventType, callback);
  }
  if (css) {
    Object.keys(css).forEach((attr) => {
      element.style[attr] = css[attr];
    });
  }
  return element;
};

const handleArrowButton = ({
  isPrev = false,
  carouselBox,
  elemWidth,
  elemUnit,
  css,
}) => {
  const { curX } = carouselBox.style.transform.match(
    /(?<curX>-?[\d]+(\.[\d])?)/
  ).groups;

  const moveX = isPrev ? +curX + +elemWidth : +curX - +elemWidth;

  carouselBox.style.transition = "transform 0.2s";
  carouselBox.style.transform = `translateX(${moveX}${elemUnit})`;
  if (css) {
    Object.keys(css).forEach((attr) => {
      carouselBox.style[attr] = css[attr];
    });
  }
  setTimeout(() => {
    const removeElem = isPrev ? carouselBox.lastChild : carouselBox.firstChild;
    carouselBox.removeChild(removeElem);

    const cElems = carouselBox.querySelectorAll(".carousel-elem");
    cElems.forEach((box) => box.classList.remove("main-elem"));
    const mainElem = isPrev ? cElems[0] : cElems[1];
    mainElem.classList.add("main-elem");

    const curNum = carouselBox.parentNode.querySelector(".curNum");
    if (curNum) curNum.textContent = mainElem.dataset.index;

    if (isPrev) {
      const firstElem = carouselBox.firstChild;
      carouselBox.insertBefore(removeElem, firstElem);
    } else {
      carouselBox.appendChild(removeElem);
    }

    carouselBox.style.transition = "none";
    carouselBox.style.transform = `translateX(${+curX}${elemUnit})`;
  }, 201);
};

const createArrowBox = ({ carouselBox, elemWidth, elemUnit, css }) => {
  const arrows = [
    {
      direction: "prev",
      content: "<",
    },
    {
      direction: "next",
      content: ">",
    },
  ];
  const $arrows = arrows.map(({ direction, content }) => {
    return createElement({
      tag: "div",
      classes: ["arrow", `arrow__${direction}`],
      textContent: content,
      event: {
        eventType: "click",
        callback: throttle(500, () => {
          handleArrowButton({
            isPrev: direction === "prev" ? true : false,
            carouselBox,
            elemWidth,
            elemUnit,
            css: css.elemCss,
          });
        }),
      },
      css: css.arrowCss,
    });
  });
  const arrowBox = createElement({
    tag: "div",
    classes: ["arrow-box"],
    children: [...$arrows],
    css: css.arrowBoxCss,
  });
  return arrowBox;
};

const createCarouselOrder = ({ elems, css }) => {
  const orderInfos = [
    {
      tag: "span",
      classes: ["orderNum", "curNum"],
      textContent: 1,
    },
    {
      tag: "span",
      classes: ["orderBar"],
      textContent: "/",
    },
    {
      tag: "span",
      classes: ["orderNum"],
      textContent: elems.length,
    },
  ];

  const carouselOrder = createElement({
    tag: "div",
    classes: ["carousel-order"],
    children: [...orderInfos.map((info) => createElement(info))],
    css,
  });

  return carouselOrder;
};

const createCarouselElems = ({ elems, css }) => {
  return elems.map((elem, index) => {
    const cloneElem = elem.cloneNode(true);
    cloneElem.classList.add("carousel-elem");
    cloneElem.setAttribute("data-index", index === 0 ? elems.length : index);
    if (css) {
      Object.keys(css).forEach((attr) => {
        cloneElem.style[attr] = css[attr];
      });
    }
    return cloneElem;
  });
};

/**
 *
 * @param  {{elems:[Node], unit:string, elemWidth:number, css:object}} carouselInfo 캐러셀 정보
 * @returns {object} {$carousel, getInterval}
 */
const carousel = ({ elems, unit, elemWidth, css }) => {
  const { elemCss, orderCss, arrowBoxCss, arrowCss } = css;

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
    ? [
        ...createCarouselElems({ elems: newElems, css: elemCss }),
        ...createCarouselElems({ elems: newElems, css: elemCss }),
      ]
    : createCarouselElems({ elems: newElems, css: elemCss });

  const carouselBox = createElement({
    tag: "div",
    classes: ["carousel-box"],
    children: carouselChildren,
  });
  carouselBox.style.width = `${
    newElems.length * WIDTH_PER_ELEM * (isRequireClone ? 2 : 1)
  }${ELEM_UNIT}`;

  carouselBox.style.transform = `translateX(-${WIDTH_PER_ELEM}${ELEM_UNIT})`;

  const arrowBox = arrowBoxCss
    ? createArrowBox({
        carouselBox,
        elemWidth,
        elemUnit: unit,
        css: { arrowBoxCss, arrowCss, elemCss },
      })
    : null;

  const carouselOrder = orderCss
    ? createCarouselOrder({ elems: newElems, css: orderCss })
    : null;
  const carousel = createElement({
    tag: "div",
    classes: ["carousel"],
    children: [carouselBox, arrowBox, carouselOrder],
  });

  const handleTransitionStart = ({ target }) => {
    // next, prev 버튼의 비활성화? 어떻게?
  };
  const handleTransitionEnd = ({ target }) => {
    // next, prev 버튼의 활성화? 어떻게?
  };

  const getInterval = () => {
    return setInterval(() => {
      const carouselBox = document.querySelector(".carousel-box");
      handleArrowButton({ carouselBox, elemWidth, elemUnit: unit });
      carouselBox.addEventListener("transitionstart", handleTransitionStart, {
        once: true,
      });
      carouselBox.addEventListener("transitionend", handleTransitionEnd, {
        once: true,
      });
    }, 3000);
  };

  return { $carousel: carousel, getInterval };
};

export default carousel;
