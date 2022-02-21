const SubBannerItem = ({ title, bannerImage, link }) => {
  return `<li class="banner">
            <a href="${link}">
              <img src="${bannerImage}" alt="${title}" />
            </a>
          </li>`
}

export default SubBannerItem;