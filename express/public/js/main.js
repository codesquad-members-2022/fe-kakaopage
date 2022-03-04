import home from './menu/home.js';
import serial from './menu/serial.js';
import webtoon from './menu/webtoon.js';
import dataWebtoon from './date-webtoon.js';
import boy from './menu/boy.js';
import drama from './menu/drama.js';
import romance from './menu/romance.js';
import fantasy from './menu/fantasy.js';
import martialArts from './menu/martial-arts.js';
import bl from './menu/bl.js';
import slide from './slide/slide.js';

(function init() {
  document.querySelector('.menubar_tag').addEventListener('click', changeUI);
  home();
  slide();
})();

function removeClass() {
  const removeBtn = document.querySelectorAll('.menubar_tag button');

  const colorBtn = [...removeBtn].filter(
    (btn) => btn.classList.value === 'change-color'
  );

  colorBtn[0].classList.remove('change-color');
}

function changeUI(e) {
  if (!e.target.closest('button')) return;

  removeClass();
  const title = e.target.closest('button').innerText;
  e.target.closest('button').classList.add('change-color');

  switch (title) {
    case '홈':
      home();
      break;
    case '요일연재':
      serial();
      break;
    case '웹툰':
      webtoon();
      dataWebtoon();
      break;
    case '소년':
      boy();
      break;
    case '드라마':
      drama();
      break;
    case '로맨스':
      romance();
      break;
    case '로판':
      fantasy();
      break;
    case '무협':
      martialArts();
      break;
    case 'BL':
      bl();
      break;
  }
  slide();
}
