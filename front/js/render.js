import { handleTabActive } from './handleStyle/activeTab.js';
import { getParams } from './utils.js';
import { routes } from './router.js';
import { ERROR } from './constants/message.js';
import { getUidContent } from './api/getUidContent.js';

const { NOT_FOUND } = ERROR;

export async function render() {
  try {
    const { categoryUid, subCategoryUid } = getParams();

    // 서버에서 데이터 가져오기
    const { content, isSuccess, msg } = await getUidContent({
      categoryUid,
      subCategoryUid,
    });
    if (!isSuccess) {
      throw new Error(msg);
    }

    // 파라미터에 따른 템플릿 가져오기
    const targetTemplate = routes.find(
      (route) => route.categoryUid === categoryUid
    );
    if (!targetTemplate) {
      throw new Error(NOT_FOUND);
    }

    // 선택된 템플릿에 서버에서 가져온 데이터 넣기
    const targetCategory = targetTemplate.Category(content);
    // 데이터를 넣은 탬플릿 렌더링
    targetCategory.render();

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
