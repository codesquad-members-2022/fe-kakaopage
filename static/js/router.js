import { Main } from './category/Main.js';
import { Webtoon } from './category/Webtoon.js';
import { Novel } from './category/Novel.js';
import { render } from './render.js';

export const routes = [
  { categoryUid: 0, getContent: Main },
  { categoryUid: 1, getContent: Webtoon },
  { categoryUid: 2, getContent: Novel },
];

export function navigateTo(url, categoryUid) {
  history.pushState(null, null, url);
  render(categoryUid);
}
