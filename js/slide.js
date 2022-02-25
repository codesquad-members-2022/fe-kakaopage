import { slideData } from './data/slide-data.js';
import { contents } from './html-template.js';

export default function addEvent() {
  addHTML();
  const $ = (selected) => document.querySelector(selected);
  const container = $('.image_container');
  const totalSlide = container.childElementCount;
  paintTotalNum(totalSlide);
  $('.next').addEventListener(
    'click',
    translateContainer.bind(this, -1, container, totalSlide)
  );
  $('.back').addEventListener(
    'click',
    translateContainer.bind(this, 1, container, totalSlide)
  );

  startSlide(-1, container, totalSlide);
}

function addHTML() {
  let template = '';
  let mainImageArr = new Set();

  while (mainImageArr.size !== 3) {
    mainImageArr.add(slideData[Math.floor(Math.random() * slideData.length)]);
  }

  for (let obj of mainImageArr) {
    template += contents.makeImageSection(obj);
  }
  document.querySelector('.image_container').innerHTML = template;
}

function startSlide(direction, container, totalSlide) {
  setInterval(() => {
    translateContainer(direction, container, totalSlide);
  }, 3000);
}

function paintTotalNum(totalSlide) {
  document.querySelector(
    '.num_total'
  ).innerText = `${totalSlide} / ${totalSlide}`;
}

function translateContainer(direction, container, totalSlide) {
  const selectedBtn = direction === 1 ? 'back' : 'next';
  container.style.transitionDuration = '1000ms';
  container.style.transform = `translateX(${direction * (300 / totalSlide)}%)`;
  container.ontransitionend = () => changeLocationEl(container, selectedBtn);
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
