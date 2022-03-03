import {
  ELEMENT_CLASS,
  ELEMENT_ID,
  MAIN_CHILD_NODE,
} from '../constants/variable.js';
import { $get } from '../utils.js';

const { MAIN_LAYOUT } = ELEMENT_ID;
const { MAIN_LAYOUT_CHILDREN } = ELEMENT_CLASS;

export default function renderPage(targetTemplate) {
  const $mainLayout = $get(MAIN_LAYOUT);
  // 파라미터에 맞는 템플릿 렌더링 시작
  // mainlayout의 node를 지우고 새로 랜더링
  $mainLayout.innerHTML = ``;
  try {
    // article순서대로 해당 카테고리 내용을 렌더링
    MAIN_CHILD_NODE.forEach(({ CLASS, ID }) => {
      const articleLayout = targetTemplate[ID];
      if (!articleLayout) return; // 메인에는 서브네브가 없어서 공통 article이 없다면 loop 패스
      const $subLayout = document.createElement('article');
      $subLayout.classList.add(CLASS, MAIN_LAYOUT_CHILDREN);
      $subLayout.setAttribute('id', ID);
      $subLayout.append(articleLayout);
      $mainLayout.append($subLayout);
    });
  } catch (error) {
    return new Error('renderPage.js에 문제가 있음');
  }
}
