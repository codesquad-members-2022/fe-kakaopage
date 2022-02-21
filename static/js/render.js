import { $get } from './utils.js';
import { routes } from './router.js';
import { ERROR } from './constants/message.js';
import {
  ELEMENT_CLASS,
  ELEMENT_ID,
  MAIN_CHILD_NODE,
} from './constants/variable.js';

const { NOT_FOUND } = ERROR;
const { MAIN_LAYOUT } = ELEMENT_ID;
const { MAIN_LAYOUT_CHILDREN } = ELEMENT_CLASS;

async function preRender(uid) {
  const body = { uid };
  const data = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
  return data;
}

export async function render(uid) {
  const $mainLayout = $get(MAIN_LAYOUT);
  const categoryUid = Number(uid);
  // const uidContent = await preRender(categoryUid);
  try {
    const selectedCategory = routes.find(
      (route) => route.categoryUid === categoryUid
    );
    if (!selectedCategory) {
      throw new Error(NOT_FOUND);
    }
    $mainLayout.innerHTML = ``;
    const contentObj = await selectedCategory.getContent();
    // Object.entries(MAIN_CHILD_NODE).forEach(([key, { CLASS, ID }]) => {
    //   const $subLayout = document.createElement('article');
    //   $subLayout.classList.add(CLASS, MAIN_LAYOUT_CHILDREN);
    //   $subLayout.setAttribute('id', ID);
    //   $subLayout.append(contentObj[ID]);
    //   $mainLayout.append($subLayout);
    // });
    MAIN_CHILD_NODE.forEach(({ CLASS, ID }) => {
      const $subLayout = document.createElement('article');
      $subLayout.classList.add(CLASS, MAIN_LAYOUT_CHILDREN);
      $subLayout.setAttribute('id', ID);
      $subLayout.append(contentObj[ID]);
      $mainLayout.append($subLayout);
    });
  } catch (error) {
    console.log(error);
    if (error.message === NOT_FOUND) {
      history.pushState(null, null, '/');
      location.reload();
    }
  }
}
