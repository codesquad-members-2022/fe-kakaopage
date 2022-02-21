import { renderAll } from './render.js';
import { setContainerWidth } from './js';

const init = () => {
  renderAll();
  // 현재 일부 요소만 컴포넌트화 되어 있어서
  // 추후 renderAll에서 모두 렌더링하는 것으로 변경할 예정
  setContainerWidth('main', 'sub');
}

init();