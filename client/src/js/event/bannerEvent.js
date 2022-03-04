const Slide = {
  main: {
    pos: 0,
    current: 1,
  },
  sub: {
    pos: 0,
    current: 1,
  },
  event: {
    pos: 0,
    current: 1,
  },
};

const setSlideTotal = ({ main, sub, event }) => {
  Slide.main.total = main;
  Slide.sub.total = sub;
  Slide.event.total = event;
}

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

const changeSlide = (type, ul, bannerType) => {
  const width = ul.querySelector('.banner').clientWidth;
  if (type === 'next') {
    Slide[bannerType].pos = -width;
    ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;
  }

  else {
    Slide[bannerType].pos = `-${width * Slide[bannerType].total}`;
    ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;
  }
};

const carouselClickHandler = (e) => {
  const button = e.target;
  const bannerType = e.target.offsetParent.dataset.banner;
  const ul = e.target.offsetParent.querySelector('.banner-container');
  const width = ul.querySelector('.banner').offsetWidth;

  if (ul.classList.contains('no-transition')) ul.classList.remove('no-transition');

  // 슬라이드 이동
  if (button.classList.contains('next')) {
    Slide[bannerType].current++;
  }

  if (button.classList.contains('back')) {
    Slide[bannerType].current--;
  }

  Slide[bannerType].pos = `-${width * Slide[bannerType].current}`;
  ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;

  // 현재 슬라이드 표시
  if (Slide[bannerType].current > Slide[bannerType].total) {
    Slide[bannerType].current = 1;
  }

  else if (Slide[bannerType].current === 0) {
    Slide[bannerType].current = Slide[bannerType].total;
  }

  if (bannerType !== 'sub') {
    e.target.offsetParent.querySelector('.current').textContent = Slide[bannerType].current;
  }
};

const carouselTransitionHandler = (e) => {
  const ul = e.target;
  const bannerType = e.target.offsetParent.dataset.banner;

  ul.classList.add('no-transition');

  if (Slide[bannerType].current === 1) {
    changeSlide('next', ul, bannerType);
  }

  else if (Slide[bannerType].current === Slide[bannerType].total) {
    changeSlide('back', ul, bannerType);
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

export { bannerCallback, setCarousel, carouselCallback, carouselTransitionHandler, setSlideTotal };
