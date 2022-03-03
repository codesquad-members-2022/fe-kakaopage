const store = {
  webtoons : [],
  navItems: {},
  banners: {},
  categories: {}
}

const setWebtoons = (webtoons) => store.webtoons = webtoons;

const setNavItems = (navItems) => store.navItems = navItems;

const setBanners = (banners) => store.banners = banners;

const setCategories = (categories) => store.categories = categories;

export { store, setWebtoons, setNavItems, setCategories, setBanners };
