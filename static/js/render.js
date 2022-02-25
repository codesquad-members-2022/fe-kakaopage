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

  try {
    const { categoryUid, subCategoryUid } = getParams();
    // 서버에서 데이터 가져오기
    const { content, isSuccess, msg } = await preRender({
      categoryUid,
      subCategoryUid,
    });
    if (!isSuccess) {
      throw new Error(msg);
    }

    // 파라미터에 따른 템플릿 가져오기
    const selectedCategory = routes.find(
      (route) => route.categoryUid === categoryUid
    );
    if (!selectedCategory) {
      throw new Error(NOT_FOUND);
    }

    // 파라미터에에 맞는 템플릿 렌더링 시작
    // mainlayout의 node를 지우고 새로 랜더링
    $mainLayout.innerHTML = ``;

    // 선택된 템플릿에 서버에서 가져온 데이터 넣기
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

    // 선택된 카테고리 표시 및 에러 핸들링
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
