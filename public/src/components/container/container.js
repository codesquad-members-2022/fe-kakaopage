export default function makeContainer(containerInfo, containerLayout) {
  return `
    <div class="container ${containerInfo.class}">
      ${makeContainerTitle(containerInfo.title)}
      ${containerLayout}
    </div>
  `;
}

function makeContainerTitle(title) {
  return `
  <div class="container__title">
    <h3>${title}</h3>
    <div class="container__title__more">
      <span>더보기</span>
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
  `
}