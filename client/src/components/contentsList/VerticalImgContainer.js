const VerticalImgContainer = ({ title, coverImage, waitFree }) => {
  return `<div class="img-container">
            <img src="${coverImage}" alt="${title}" class="thumbnail" />
            ${waitFree ? '<img src="src/img/icons/badge_time.png" alt="기다리면 무료" class="badge" />' : ''}
          </div>`;
}

export default VerticalImgContainer;