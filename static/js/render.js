import { handleTabActive } from './handleStyle/activeTab.js';
import { $get, getParams } from './utils.js';
import { routes } from './router.js';
import { ERROR } from './constants/message.js';
import {
  ELEMENT_CLASS,
  ELEMENT_ID,
  MAIN_CHILD_NODE,
} from './constants/variable.js';

const { NOT_FOUND } = ERROR;
const { MAIN_LAYOUT } = ELEMENT_ID;
const { MAIN_LAYOUT_CHILDREN } = ELEMENT_CLASS;

// 렌더링하기 전 cateogoryUid에 해당하는 데이터를 서버에서 받아오기
async function preRender(uIdObj) {
  const data = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(uIdObj),
  }).then((response) => response.json());
  return data;
}

export async function render() {
  const $mainLayout = $get(MAIN_LAYOUT);
  // 우선 서버 동작 없이 mock데이터로 구현

  try {
    const { categoryUid, subCategoryUid } = getParams();
    const { content, isSuccess, msg } = await preRender({
      categoryUid,
      subCategoryUid,
    });
    if (!isSuccess) {
      throw new Error(msg);
    }

    const selectedCategory = routes.find(
      (route) => route.categoryUid === categoryUid
    );
    if (!selectedCategory) {
      throw new Error(NOT_FOUND);
    }
    // 카테코리와 서브 카테고리 아이디에 맞는 내용 렌더링시작
    // mainlayout의 node를 지우고 새로 랜더링
    $mainLayout.innerHTML = ``;

    const contentObj = await selectedCategory.Category(content);

    // article순서대로 해당 카테고리 내용을 렌더링
    MAIN_CHILD_NODE.forEach(({ CLASS, ID }) => {
      const articleLayout = contentObj[ID];
      if (!articleLayout) return; // 메인에는 서브네브가 없어서 공통 article이 없다면 loop 패스
      const $subLayout = document.createElement('article');
      $subLayout.classList.add(CLASS, MAIN_LAYOUT_CHILDREN);
      $subLayout.setAttribute('id', ID);
      $subLayout.append(articleLayout);
      $mainLayout.append($subLayout);
    });
    // 선택된 카테고리 표시

    if (!handleTabActive({ categoryUid, subCategoryUid })) {
      throw new Error('네비게이션 active에 문제 있음');
    }
  } catch (error) {
    console.log(error);
    if (error.message === NOT_FOUND) {
      history.pushState(null, null, '/');
      location.reload();
    }
  }
}
