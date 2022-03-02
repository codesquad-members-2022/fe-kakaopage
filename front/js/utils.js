export function $get(id) {
  return document.getElementById(id);
}

// 처음렌더링시 params가 없을 땐 0,0으로 반환
export function getParams() {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const categoryUid = Number(params.get('categoryUid'));
  const subCategoryUid = Number(params.get('subCategoryUid'));
  return { categoryUid, subCategoryUid };
}
