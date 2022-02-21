export function createButton() {
  return `
  <div style="${style.container}">
    <img style="${style.img}" src="https://static-page.kakao.com/static/pc/appDownload.png?ec8ae2e191ce28a0a4eaa59d5577fa8b" alt="download link">
  </div>
  `;
}

const style = {
  container: `
    width: 720px;
    height: 70px;
    margin: auto;
    background-color: var(--yellow2);
    display: flex;
    cursor: pointer;
  `,
  img: `
    width: 504px;
    height: 70px;
    justify-content: center;
    margin: auto;
  `,
};
