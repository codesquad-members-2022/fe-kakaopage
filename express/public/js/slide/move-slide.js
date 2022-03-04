const $ = (selected) => document.querySelector(selected);
let CHILD_NUMBER = 0;
let intervalID;

export function startInterval(ms) {
  return new Promise((res) => (intervalID = setTimeout(res, ms)));
}

export function addEvent(slideObj) {
  $('.next').addEventListener('click', () => {
    clearTimeout(intervalID);
    startInterval(0).then(() => translateContainer(slideObj));
  });

  $('.back').addEventListener('click', () => {
    clearTimeout(intervalID);
    slideObj.direction = 1;
    startInterval(0).then(() => translateContainer(slideObj));
  });
}

export function translateContainer(slideObj) {
  const selectedBtn = slideObj.direction === 1 ? 'back' : 'next';
  slideObj.container.style.transitionDuration = '1000ms';
  slideObj.container.style.transform = `translateX(${
    slideObj.direction * (300 / slideObj.totalSlide)
  }%)`;
  slideObj.container.ontransitionend = () => {
    changeLocationEl(slideObj, selectedBtn), addCount(slideObj);
  };
}

function changeLocationEl(slideObj, selectedBtn) {
  slideObj.container.removeAttribute('style');
  selectedBtn === 'back'
    ? slideObj.container.insertBefore(
        slideObj.container.lastElementChild,
        slideObj.container.firstElementChild
      )
    : slideObj.container.appendChild(slideObj.container.firstElementChild);
}

export function addCount(slideObj) {
  if (slideObj.direction === 1) slideObj.direction = -1;

  CHILD_NUMBER === 0
    ? (CHILD_NUMBER = 1)
    : CHILD_NUMBER === 3
    ? (CHILD_NUMBER = 1)
    : CHILD_NUMBER++;

  let selectedChild = $(`.image_container > li:nth-child(${CHILD_NUMBER})`);
  let nextCount = getIndex(selectedChild);
  $('.num_total').innerHTML = `${nextCount} / ${slideObj.totalSlide}`;

  startInterval(3000).then(() => translateContainer(slideObj));
}

function getIndex(ele) {
  let _i = 1;
  while ((ele = ele.previousElementSibling) !== null) {
    _i++;
  }
  return _i;
}
