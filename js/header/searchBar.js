import { selector } from '../util/util.js';

const FORM_SELECTOR = '.search-bar';
const INPUT_SELECTOR = '.search-bar__input';
const $searchBarForm = selector(FORM_SELECTOR);

$searchBarForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $searchBarInput = selector(INPUT_SELECTOR);
  $searchBarInput.value = '';
});
