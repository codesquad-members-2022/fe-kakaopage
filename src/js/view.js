export const renderSet = {
  renderHeader(header) {
    const headerEl = document.querySelector('.header');
    headerEl.insertAdjacentHTML('afterbegin', header);
  },

  renderGlobalNavigation(gnb) {
    const gnbEl = document.querySelector('.gnb');
    gnbEl.insertAdjacentHTML('afterbegin', gnb);
  },

  renderFooter(footer) {
    const footerEl = document.querySelector('.footer');
    footerEl.insertAdjacentHTML('afterbegin', footer);
  },
};
