const SmallImgContainer = ({ title, image, rating, waitFree }) => {
  return `<div class="img-container">
            <img src="${image}" alt="${title}" />
            <div class="ranking-info">
              <span class="rating pseudo-img">${rating}</span>
              ${waitFree ? `<img src="src/img/icons/bmbadge_waitfree.svg" alt="기다리면 무료" />` : ''}
            </div>
          </div>`;
}

export default SmallImgContainer;