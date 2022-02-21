import home from './home.js';
import serial from './serial.js';
import webtoon from './webtoon.js';
import boy from './boy.js';
import drama from './drama.js';
import romance from './romance.js';

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
      break;
    case '무협':
      break;
    case 'BL':
      break;
  }
}
