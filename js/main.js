import home from './components/home.js';
import serial from './components/serial.js';
import webtoon from './components/webtoon.js';
import dataWebtoon from './date-webtoon.js';
import boy from './components/boy.js';
import drama from './components/drama.js';
import romance from './components/romance.js';
import fantasy from './components/fantasy.js';
import martialArts from './components/martial-arts.js';
import bl from './components/bl.js';
import slide from './slide.js';

(function init() {
  document.querySelector('.menubar_tag').addEventListener('click', changeUI);
})();

function removeClass() {
  const removeBtn = document.querySelectorAll('.menubar_tag button');

  removeBtn.forEach((btn) => {
    if (btn.classList.value === 'change-color') {
      btn.classList.remove('change-color');
    }
  });
}

function changeUI(e) {
  if (!e.target.closest('button')) return false;

  removeClass();
  const title = e.target.closest('button').innerText;
  e.target.closest('button').classList.add('change-color');

  switch (title) {
    case '홈':
      home();
      slide();
      break;
    case '요일연재':
      serial();
      slide();
      break;
    case '웹툰':
      webtoon();
      dataWebtoon();
      slide();
      break;
    case '소년':
      boy();
      slide();
      break;
    case '드라마':
      drama();
      slide();
      break;
    case '로멘스':
      romance();
      slide();
      break;
    case '로판':
      fantasy();
      slide();
      break;
    case '무협':
      martialArts();
      slide();
      break;
    case 'BL':
      bl();
      slide();
      break;
  }
}
