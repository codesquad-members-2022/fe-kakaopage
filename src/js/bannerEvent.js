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

export { bannerCallback };