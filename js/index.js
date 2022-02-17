function $get(id) {
  return document.getElementById(id);
}

const navigateTo = (url) => {
  history.pushState(null, null, url);
};

const $nav = $get('main__nav');

$nav.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target.dataset.category);
  if (event.target.matches(`[data-category]`)) {
    navigateTo(event.target.href);
  }
});
