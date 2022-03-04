import { routes } from '../constants/routes.js';

// 렌더링하기 전 cateogoryUid에 해당하는 데이터를 서버에서 받아오기
export function getUidContent({ categoryUid, subCategoryUid }) {
  return fetch(
    `${routes.uidContent}/?categoryUid=${categoryUid}&subCategoryUid=${subCategoryUid}`
  ).then((response) => response.json());
}
