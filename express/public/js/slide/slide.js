import { getJson } from '../util.js';
import { contents } from '../html-template.js';
import { addEvent } from './move-slide.js';
import { addCount } from './move-slide.js';
import { startInterval } from './move-slide.js';
import { translateContainer } from './move-slide.js';
const $ = (selected) => document.querySelector(selected);

const slideObj = {
  direction: -1,
  container: null,
  totalSlide: null,
};

export default function slideInit() {
  getJson('slide-data/slide-data.json').then((data) => {
    addImage(data);
    startSlide();
  });
}

function addImage(data) {
  let mainImageArr = new Set();
  const totalImageSize = 3;
  while (mainImageArr.size !== totalImageSize) {
    mainImageArr.add(data[Math.floor(Math.random() * data.length)]);
  }
  let template = [...mainImageArr].reduce(
    (acc, curList) => acc + contents.makeImageSection(curList),
    ''
  );
  $('.image_container').innerHTML = template;
}

function startSlide() {
  const container = $('.image_container');
  const totalSlide = container.childElementCount;
  slideObj.container = container;
  slideObj.totalSlide = totalSlide;
  addEvent(slideObj);
  addCount(slideObj);
  startInterval(3000).then(() => translateContainer(slideObj));
}
