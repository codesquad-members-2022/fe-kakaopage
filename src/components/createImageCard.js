// 이미지 카드 하나를 만들어서 문자로 리턴
export const createImageCard = (imageCardInfo) => {
  const url = imageCardInfo["url"];
  const rank = imageCardInfo["rank"];
  const title = imageCardInfo["title"];
  const [newIcon, updateIcon, yearsIcon, humanIcon] = imageCardInfo["info"];
  const subscriber = imageCardInfo["subscriber"];

  return `
  <div class="image-card">
    <img class="image-card__img" src="${url}" alt="" />
    <div class="image-card__area"></div>
    <div class="image-card__area__content">
      <div class="image-card__rank">${rank}</div>
      <img
        class="image-card__rank-icon"
        src="./image/bmbadge_waitfree.svg"
        alt=""
      />
    </div>
    <div class="image-card__comment">
      <div class="image-card__comment__comment">${title}</div>
      <div class="image-card__comment__info">
        <img
          class="${newIcon}"
          src="./image/new_icon.svg"
          alt=""
        />
        <img
          class="${updateIcon}"
          src="./image/update.svg"
          alt=""
        />
        <img
          class="${yearsIcon}"
          src="./image/15years.png"
          alt=""
        />
        <img
          class="${humanIcon}"
          src="./image/icon_read_count.png"
          alt=""
        />
        <span class="image-card__comment__info-subscriber">${subscriber}</span>
      </div>
    </div>
  </div>
  `;
};
