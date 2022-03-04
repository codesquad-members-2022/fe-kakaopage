const $ = (select) => document.querySelector(select);
const $all = (select) => document.querySelectorAll(select);

const getData = (router) =>  {
  return fetch(`http://localhost:3000/${router}`)
  .then(res => res.json());
}

export {$, $all, getData}