const searchBarForm = document.querySelector('.search-bar');

searchBarForm.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target[0].value = '';
});
