// ========== banner__btns ==========
export function makeBannerBtns() {
  const btnInfo = {
    prev: {
      class: 'banner__prev',
      iconClass: 'fas fa-chevron-left'
    },
    next: {
      class: 'banner__next',
      iconClass: 'fas fa-chevron-right'
    }
  }

  const newDiv = document.createElement("div");
  newDiv.classList.add('banner__btns');

  let innerHTML = '';
  for (let i in btnInfo) {
    innerHTML += `<button type="button" class="${btnInfo[i].class}"><i class="${btnInfo[i].iconClass}"></i>`
  }

  newDiv.innerHTML = innerHTML;

  return newDiv;
}