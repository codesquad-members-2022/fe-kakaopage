const addHandlerOnGnb = () => {
  const gnbEl = document.querySelector('.gnb');
  gnbEl.addEventListener('click', HandleGnb);
};

const HandleGnb = (event) => {
  const tabName = event.target.dataset.tab;
  if (!tabName) return;

  const currTab = document.querySelector('.gnb__item--active');
  if (currTab) currTab.classList.remove('gnb__item--active');

  const newTab = event.target;
  newTab.classList.add('gnb__item--active');

  loadTabContent(tabName);
};

const loadTabContent = (tabName) => {
  if (tabName === 'toon') {
    return;
  }
  if (tabName === 'novel') {
    return;
  }
  const main = document.querySelector('.main');
  main.innerHTML = `${tabName}탭은 준비 중입니다. 웹툰과 웹소설을 이용해주세요.`;
};

export { addHandlerOnGnb };
