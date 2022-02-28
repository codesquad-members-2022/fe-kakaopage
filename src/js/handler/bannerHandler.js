import { select } from '../util.js';

const addHandlerOnBanner = (banner) => select(`.${banner}`).addEventListener('click', handleBanner);

const handleBanner = (event) => {
  const direction = event.target.dataset.direction;
  if (!direction) return;

  const ulEl = event.currentTarget.firstElementChild;

  const startIndex = 0;
  const endIndex = ulEl.children.length - 1;

  const currentIndex = Number(select('.main-banner__item--current', ulEl).dataset.index);
  const prevIndex = Number(currentIndex) - 1;
  const nextIndex = Number(currentIndex) + 1;

  const itemWidth = 720;
  const defaultTranslateX = -1440;
  const endTranslateX = -(endIndex * itemWidth);

  const slideList = () => {
    if (direction === 'prev') {
      if (startIndex === currentIndex) {
        return;
      }
      ulEl.style.transform = `translateX(${-(prevIndex * itemWidth)}px)`;
      select('.main-banner__item--current', ulEl).classList.remove('main-banner__item--current');
      select(`.main-banner__item[data-index="${prevIndex}"]`, ulEl).classList.add(
        'main-banner__item--current'
      );

      let currentOrder = select('.main-banner__curr-order').textContent;
      let totalOrders = select('.main-banner__total-count').textContent;

      if (currentOrder == 1) {
        currentOrder = totalOrders;
        select('.main-banner__curr-order', ulEl.parentNode).textContent = currentOrder;
        return;
      }
      currentOrder--;
      select('.main-banner__curr-order', ulEl.parentNode).textContent = currentOrder;
    }

    if (direction === 'next') {
      if (endIndex === currentIndex) {
        return;
      }
      ulEl.style.transform = `translateX(${-(nextIndex * itemWidth)}px)`;
      select('.main-banner__item--current', ulEl).classList.remove('main-banner__item--current');
      select(`.main-banner__item[data-index="${nextIndex}"]`, ulEl).classList.add(
        'main-banner__item--current'
      );

      let currentOrder = select('.main-banner__curr-order').textContent;
      let totalOrders = select('.main-banner__total-count').textContent;

      if (currentOrder == totalOrders) {
        currentOrder = 1;
        select('.main-banner__curr-order', ulEl.parentNode).textContent = currentOrder;
        return;
      }
      currentOrder++;
      select('.main-banner__curr-order', ulEl.parentNode).textContent = currentOrder;
    }
  };
};

export { addHandlerOnBanner };
