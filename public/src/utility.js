const $ = (select) => document.querySelector(select);
const $all = (select) => document.querySelectorAll(select);

const getData = (router) =>  {
  return fetch(`https://clone-kakaopage-dobby.herokuapp.com/${router}`)
  .then(res => res.json());
}

export {$, $all, getData}