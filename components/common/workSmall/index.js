export function createWorkSmall({ str1, str2, title, views, status }) {
  return `
  <style>${style}</style>
  <div class="work-small col">
    <div class="work-small__container">
      <div class="work-small__thumbnail"></div>
      <div class="work-small__label row">
        <div class="row">
          <div class="work-small__label-first">${str1}</div>
          <div class="work-small__label-second">${str2}</div>
        </div>
        <div class="work-small__time-icon"></div>
      </div>
    </div>
    <div class="work-small__title">${title}</div>
    <div class="work-small__views-container row">
      <div class="work-small__${status}-icon"></div>
      <div class="work-small__views-icon"></div>
      <div class="work-small__views">${views}</div>
      <div>만명</div>
    </div>
  </div>
  `;
}

const style = `
.work-small {
  width: 120px;
  height: 208px;
  background-color: var(--white);
}

.work-small__container {
  overflow: hidden;
  border-radius: 10px;
}

.work-small__thumbnail {
  width: 120px;
  height: 120px;
  background-image: url("//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2");
  background-size: cover;
}

.work-small__title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.work-small__views-icon {
  width: 11px;
  height: 11px;
  background-image: url("https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871");
  background-size: cover;
  margin-top: 4px;
  margin-right: 3px;
}

.work-small__views-container {
  font-size: var(--small);
  color: var(--gray2);
}

.work-small__label {
  height: 30px;
  background-color: var(--black);
  justify-content: space-between;
  padding: 4px 6px 0 6px;
  box-sizing: border-box;
}

.work-small__time-icon {
  width: 16px;
  height: 16px;
  background-image: url("https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf");
  background-size: cover;
  margin-top: 3px;
}

.work-small__label-first,
.work-small__label-second {
  color: var(--yellow);
}

.work-small__title,
.work-small__views-container {
  margin-top: 6px;
}

.work-small__new-icon {
  width: 13px;
  height: 13px;
  background-image: url('https://static-page.kakao.com/static/common/icon_new.svg?4ae84a0f972e30119fb6fcfbb2f59bf9');
  background-size: cover;
  margin: 3px;
}

.work-small__up-icon {
  width: 19px;
  height: 13px;
  background-image: url('https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f');
  background-size: cover;
  margin: 3px;
}
`;
