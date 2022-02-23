const SmallImgContainer = ({ title, squareImage, rating, waitFree }) => {
  return `<div class="img-container">
            <img src="${squareImage}" alt="${title}" />
            <div class="ranking-info">
              <span class="rating">${rating}</span>
              ${waitFree ? 
                `<img src="src/img/icons/bmbadge_waitfree.svg" alt="기다리면 무료" />` :
                '<span class="type">웹툰</span>'}
            </div>
          </div>`;
}

export default SmallImgContainer;