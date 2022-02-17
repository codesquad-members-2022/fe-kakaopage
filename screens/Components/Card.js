const Card = ({ title }) => {
  return `<li class="card">
    <div class="card__imgBox">
      <img
        class="cardImg"
        src="./images/contents/막내황녀님.png"
        alt="${title}"
      />
      <div class="imgInfo">
        <span class="rank">✭ 10.0</span>
        <span><i class="fas fa-clock"></i></span>
      </div>
    </div>
    <div class="card__title">
      <span>${title}</span>
    </div>
    <div class="card__info">
      <span class="info-status">UP</span>
      <span class="info-user">
        <i class="fas fa-user"></i>
        <span>115.7만명</span>
      </span>
    </div>
  </li>`;
};

export default Card;
