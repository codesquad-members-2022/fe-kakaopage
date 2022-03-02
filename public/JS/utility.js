const $ = (select) => document.querySelector(select);
const $all = (select) => document.querySelectorAll(select);

const getData = async (url) =>  {
  const res = await fetch(url);
  const body = await res.json();
  return body;
}

export {$, $all, getData}