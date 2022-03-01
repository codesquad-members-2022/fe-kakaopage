import { NODE_SERVER } from '../constants/variable.js';

// 렌더링하기 전 cateogoryUid에 해당하는 데이터를 서버에서 받아오기
export async function getUidContent({ categoryUid, subCategoryUid }) {
  const data = await fetch(
    `${NODE_SERVER}/?categoryUid=${categoryUid}&subCategoryUid=${subCategoryUid}`
  ).then((response) => response.json());
  return data;
}
