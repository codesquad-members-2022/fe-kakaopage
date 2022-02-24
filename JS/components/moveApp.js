import {$, $all} from '../utility.js'

// ========== makeMoveApp ==========
function renderMoveApp() {
  const main = $('.main');
  const newList = makeMoveApp();
  main.appendChild(newList);

  return newList;
}

function makeMoveApp() {
  const newList = document.createElement("div");
  newList.classList.add('move-app');
  newList.innerHTML = `
  <a href="#">
    <span><strong>코코아페이지</strong> 앱으로 보기</span>
    <i class="fas fa-chevron-right"></i>
  </a>`;

  return newList;
}

export {renderMoveApp}