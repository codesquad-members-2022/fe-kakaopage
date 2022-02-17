import Header from './views/Header.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('일반 script 파일 실행된 이후에 실행');
});

function $take(id) {
  return document.getElementById(id);
}

const $header = $take('js-header');
const headerView = new Header('js-header');
$header.innerHTML = await headerView.getHtml();
