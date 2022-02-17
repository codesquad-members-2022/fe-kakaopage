import serial from './serial.js';
import webtoon from './webtoon.js';

(function init() {
  const $ = (selector) =>
    document.querySelector(selector).addEventListener('click', changeUI);

  $('.menubar_tag > button:nth-child(1)');
  $('.menubar_tag > button:nth-child(2)');
  $('.menubar_tag > button:nth-child(3)');
  $('.menubar_tag > button:nth-child(4)');
  $('.menubar_tag > button:nth-child(5)');
  $('.menubar_tag > button:nth-child(6)');
  $('.menubar_tag > button:nth-child(7)');
  $('.menubar_tag > button:nth-child(8)');
  $('.menubar_tag > button:nth-child(9)');
})();

function changeUI(e) {
  const title = e.target.innerText;

  switch (title) {
    case '홈':
      break;
    case '요일연재':
      serial();
      break;
    case '웹툰':
      webtoon();
      break;
    case '소년':
      break;
    case '드라마':
      break;
    case '로멘스':
      break;
    case '로판':
      break;
    case '무협':
      break;
    case 'BL':
      break;
  }
}
