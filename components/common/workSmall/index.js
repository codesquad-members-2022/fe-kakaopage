// TODO: 순위, 별점 글자 레이아웃 구조 변경
export function createWorkSmall({
  title,
  views,
  status,
  thumbnail = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEUAAAABAQF9fX2ZmZmsrKyLi4u2trYHBwd5eXm0tLSdnZ2Dg4OJiYmoqKiRkZGNjY36+vr09PTk5OTW1tbMzMzExMS9vb1qampjY2NpaWk2P5IbAAACsklEQVR4nO3djXKaQBSG4bMYWFTU1sakvf8b7fIjYjqthOqY7+z7jjNBg2EfEIwjMfbt+/HH6+upqtbrl91uM7TaH8oyXboOZbMtirpY1LYp/1W7mP1qs7rZ5mVO62rS27o67Y62Md+9W2UxWrAwKd0+TpwLi7q5/PN8w5zXX66ufmKhw9fYXqyxXRLGePmmTeaZDGPJ6ptzv2VrbrYwWp2EwUbhZCYL/z+K/r63jDZr9c1b3tW12N5S2Kr12QfifR6lZ8Htcd+J+GG22N5QpCNNq41/LvRTI/3bmGaMbM52nr28MPlhvatO23DJ4CUK50fp3dbhVwuhfgj1y0bYPR/6fL4YtyFC2QbhPguh00PNICzdCxv3wnLxS/gvH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1C8bYdNNPnswD2kQbs27sDhP+usi9LojDsLa/TukdX/a87NH84guQvN9Lob//bBweyhF6CCE+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfgj1m75D6v2dGYSqIdQPoX7jOVFe3+TO57w2hMIh1A+hfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUL9shIcshL7/Hr80p1tw+vk0XonjNvR+9uXe3G7EQdj9Z7kMhC6JF6FTIEIHIdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1C/bIQb98IXt0CEDkKoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/RDqh1A/hPoh1A+hfpkJXRonQt+f/OFfuDavu2E+wioLoVPjldAlcSp0fSxFKBxC/RDqN/7WFmOw+OzRPKB+w9VpG/bT7rLYqjph8CkM0UJC9q8tfD5KbRCeLO2ISfjsNf6AYnuk2abX+L57t+PPpq63hcM61a+339l2GAd91T5eAAAAAElFTkSuQmCC",
}) {
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

  return `
  <style>${style}</style>
  <div class="work-small col">
    <div class="work-small__container">
      <div style="background-image: url(${thumbnail})" class="work-small__thumbnail"></div>
      <div class="work-small__label row">
        <div class="row">
          <div class="work-small__label-first">⭐</div>
          <div class="work-small__label-second">10.0</div>
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
