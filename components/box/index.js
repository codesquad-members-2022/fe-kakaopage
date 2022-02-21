export function createBox({ title, contents = "" }) {
  return `
  <style>${style}</style>
  <div class="box col">
    <div class="box__header row">
      <div class="box__title">${title}</div>
      <div class="box__more row">
        <div class="box__more-text">더보기</div>
        <div class="box__more-icon"></div>
      </div>
    </div>
    <div class="box__contents">${contents}</div>
  </div>
  `;
}

const style = `
.box {
  width: 720px;
  min-height: 100px;
  height: fit-content;
  background-color: var(--white);
  padding: 22px 0 10px 0;
  margin: 0 auto;
  box-sizing: border-box;
}

.box__header {
  justify-content: space-between;
  padding: 0 19px; 0 19px;
}

.box__title {
  font-size: var(--medium);
}

.box__more {
  cursor: pointer;
}

.box__more-text {
  color: var(--gray2);
}

.box__more-icon {
  width: 8px;
  height: 14px;
  background-image: url("https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e");
  background-size: cover;
  margin-top: 4px;
  margin-left: 3px;
}

.box__contents {
  display: flex;
  flex-wrap: wrap;
}
`;
