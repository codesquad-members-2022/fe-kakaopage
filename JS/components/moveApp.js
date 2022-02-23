import {$, $all} from '../utility.js'

// ========== makeMoveApp ==========
function renderMoveApp(selector) {
  const main = $('.main');
  const newList = makeMoveApp(selector);
  main.appendChild(newList);

  return newList;
}

function makeMoveApp(selector) {
  const newList = document.createElement("div");
  newList.classList.add(selector);
  newList.innerHTML = `<a href="#">
  <span><strong>코코아페이지</strong> 앱으로 보기</span>
  <i class="fas fa-chevron-right"></i>
</a>`;

  return newList;
}

export {renderMoveApp}