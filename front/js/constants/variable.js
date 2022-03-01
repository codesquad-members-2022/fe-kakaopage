export const ELEMENT_ID = {
  MAIN_CATEGORY: 'main-nav',
  MAIN_LAYOUT: 'main-layout',
  SUB_CATEGORY: 'sub-category',
  CAROUSEL: 'carousel',
  EVENT_BOX: 'event-box',
  EVENT_CAROUSEL: 'event-carousel',
  MAIN_CONTENT: 'main-content',
};

export const ELEMENT_CLASS = {
  MAIN_LAYOUT_CHILDREN: 'l-main__child',
};

// main에 자식 article이 렌더링되는 순서대로 배열에 class와 id를 넣음
// SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT
export const MAIN_CHILD_NODE = [
  { CLASS: 'c-main__category', ID: 'sub-category' },
  { CLASS: 'l-carousel', ID: 'carousel' },
  { CLASS: 'c-grid', ID: 'event-box' },
  { CLASS: 'c-event', ID: 'event-carousel' },
  { CLASS: 'c-webtoons', ID: 'main-content' },
];

export const NODE_SERVER = 'http://localhost:4000/api';
