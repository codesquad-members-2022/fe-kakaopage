import { slideData } from '../data/slide-data/slide-data.js';
import { contents } from '../html-template.js';

const $ = (selected) => document.querySelector(selected);
let CHILD_NUMBER = 0;
let intervalID;

export default function init() {
  addHTML();
  const container = $('.image_container');
  const totalSlide = container.childElementCount;
  addCount(totalSlide);
  addEvent(container, totalSlide);

  startSlide(-1, container, totalSlide, 3000);
}

function addHTML() {
  let mainImageArr = new Set();
  const totalImageSize = 3;

  while (mainImageArr.size !== totalImageSize) {
    mainImageArr.add(slideData[Math.floor(Math.random() * slideData.length)]);
  }

  let template = [...mainImageArr].reduce(
    (acc, curList) => acc + contents.makeImageSection(curList),
    ''
  );

  $('.image_container').innerHTML = template;
}

function startSlide(direction, container, totalSlide, SECOND) {
  intervalID = setInterval(() => {
    translateContainer(direction, container, totalSlide);
  }, SECOND);
}

function addEvent(container, totalSlide) {
  $('.next').addEventListener('click', () => {
    intervalInit(container, totalSlide);
    translateContainer(-1, container, totalSlide);
  });

  $('.back').addEventListener('click', () => {
    intervalInit(container, totalSlide);
    translateContainer(1, container, totalSlide);
  });
}

function intervalInit(container, totalSlide) {
  clearInterval(intervalID);
  startSlide(-1, container, totalSlide, 3000);
}

function translateContainer(direction, container, totalSlide) {
  const selectedBtn = direction === 1 ? 'back' : 'next';
  container.style.transitionDuration = '1000ms';
  container.style.transform = `translateX(${direction * (300 / totalSlide)}%)`;
  container.ontransitionend = () => {
    changeLocationEl(container, selectedBtn), addCount(totalSlide);
  };
}

function changeLocationEl(container, selectedBtn) {
  container.removeAttribute('style');
  selectedBtn === 'back'
    ? container.insertBefore(
        container.lastElementChild,
        container.firstElementChild
      )
    : container.appendChild(container.firstElementChild);
}

function addCount(totalSlide) {
  CHILD_NUMBER === 0
    ? (CHILD_NUMBER = 1)
    : CHILD_NUMBER === 3
    ? (CHILD_NUMBER = 1)
    : CHILD_NUMBER++;

  let selectedChild = $(`.image_container > li:nth-child(${CHILD_NUMBER})`);
  let nextCount = getIndex(selectedChild);
  $('.num_total').innerHTML = `${nextCount} / ${totalSlide}`;
}

function getIndex(ele) {
  let _i = 1;
  while ((ele = ele.previousElementSibling) !== null) {
    _i++;
  }
  return _i;
}
