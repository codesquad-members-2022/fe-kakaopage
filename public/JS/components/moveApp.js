import {$} from '../utility.js'

// ========== makeMoveApp ==========
function renderMoveApp() {
  const moveApp = `
    <div class="move-app">
      <a href="#">
        <span><strong>코코아페이지</strong> 앱으로 보기</span>
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  `;

  $('.main').insertAdjacentHTML('beforeend', moveApp);
}

export {renderMoveApp}