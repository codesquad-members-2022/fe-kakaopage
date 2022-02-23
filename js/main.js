import home from './components/home.js';
import serial from './components/serial.js';
import webtoon from './components/webtoon.js';
import boy from './components/boy.js';
import drama from './components/drama.js';
import romance from './components/romance.js';
import fantasy from './components/fantasy.js';
import martialArts from './components/martial-arts.js';
import bl from './components/bl.js';

(function init() {
  document.querySelector('.menubar_tag').addEventListener('click', changeUI);
})();

function changeUI(e) {
  const title = e.target.innerText;

  switch (title) {
    case '홈':
      home();
      break;
    case '요일연재':
      serial();
      break;
    case '웹툰':
      webtoon();
      break;
    case '소년':
      boy();
      break;
    case '드라마':
      drama();
      break;
    case '로멘스':
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
}
