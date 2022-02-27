const addHandlerOnBanner = (banner) => {
  const bannerEl = document.querySelector(`.${banner}`);
  bannerEl.addEventListener('click', handleBanner);
};

const handleBanner = (event) => {
  const direction = event.target.dataset.btndirection;
  if (!(direction === 'next' || direction === 'prev')) return;

  const bannerListEl = event.currentTarget.firstElementChild;
  slidingItems(bannerListEl, direction);
};

const slidingItems = (bannerListEl, direction) => {
  const currentiItemIndex = bannerListEl.dataset.currentindex;
  const totalItemCount = bannerListEl.dataset.totalitem;

  bannerListEl.style.transform = `translateX(-720px)`;
};

export { addHandlerOnBanner };
