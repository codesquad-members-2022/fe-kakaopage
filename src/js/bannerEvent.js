import { MainBanners, SubBanners, EventBanners } from '../data';

const Slide = {
  main: {
    pos: 0,
    current: 1,
    total: MainBanners.length,
  },
  sub: {
    pos: 0,
    current: 1,
    total: SubBanners.length,
  },
  event: {
    pos: 0,
    current: 1,
    total: EventBanners.length,
  },
};

// Carousel 구현을 위해 슬라이드 추가
const setCarousel = (html) => {
  const ul = html.querySelector('.banner-container');
  const length = ul.childElementCount;
  const firstBanner = ul.querySelector(`[data-count="1"]`);
  const lastBanner = ul.querySelector(`[data-count="${length}"]`);

  ul.insertAdjacentElement('afterbegin', lastBanner.cloneNode(true));
  ul.insertAdjacentElement('beforeend', firstBanner.cloneNode(true));

  ul.style.transform = `translateX(-${100 / (length + 2)}%)`;

  return html;
};

const carouselClickHandler = (e) => {
  const button = e.target;
  const bannerType = e.target.offsetParent.dataset.banner;
  const ul = e.target.offsetParent.querySelector('.banner-container');
  const width = ul.querySelector('.banner').clientWidth;

  if (button.classList.contains('next')) {
    Slide[bannerType].current++;
  }

  if (button.classList.contains('back')) {
    Slide[bannerType].current--;
  }

  Slide[bannerType].pos = `-${width * Slide[bannerType].current}`;

  ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;

  if (Slide[bannerType].current > Slide[bannerType].total) {
    ul.style.transition = 'none';
    Slide[bannerType].pos = -width;
    Slide[bannerType].current = 1;
    ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;
    ul.style.transition = 'all 700ms';
  }

  else if (Slide[bannerType].current === 0) {
    ul.style.transition = 'none';
    Slide[bannerType].pos = `-${width * Slide[bannerType].total}`;
    Slide[bannerType].current = Slide[bannerType].total;
    ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;
    ul.style.transition = 'all 700ms';
  }

  if (bannerType !== 'sub') {
    e.target.offsetParent.querySelector('.current').textContent = Slide[bannerType].current;
  }
};

const bannerClickHandler = (e) => {
  const button = e.target;
  const bannerType = e.target.offsetParent.dataset.banner;
  const ul = e.target.offsetParent.querySelector('.banner-container');
  const width = ul.querySelector('.banner').clientWidth;

  if (button.classList.contains('next')) {
    if (Slide[bannerType].current === Slide[bannerType].total) return;
    Slide[bannerType].pos -= width;
    Slide[bannerType].current++;
  }

  if (button.classList.contains('back')) {
    if (Slide[bannerType].current === 1) return;
    Slide[bannerType].pos += width;
    Slide[bannerType].current--;
  }

  ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;
  if (bannerType !== 'sub') {
    e.target.offsetParent.querySelector('.current').textContent = Slide[bannerType].current;
  }
};

const checkTarget = (e) => e.target.tagName === 'BUTTON';

const bannerCallback = (e) => checkTarget(e) && bannerClickHandler(e);

const carouselCallback = (e) => checkTarget(e) && carouselClickHandler(e);

export { bannerCallback, setCarousel, carouselCallback };