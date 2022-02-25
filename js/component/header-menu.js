export const headerMenu = (data, list) => {
  const template = `
  <nav class="menu-top">
    <h1 class="kakaopage"><img src=${data.kakaopage}></h1>
      <div class="kakaopage-menu" >
        <div class="search-wrap">
          <form class="search-form" action="">
            <input
              class="search-input"
              type="text"
              placeholder
              value
              maxlength="30"
            />
          </form>
          <img class="css-searchBtn" src=${data.readingGlasses}/>
        </div>
        <button class="kakaopage-menu2">
          <div class="menu-stage"><img class="css-stage" src=${
            data.stage
          }></div>
          <div class="menu-cash">캐시충전</div>
          <div class="menu-login">로그인</div>
        </button>
        <div class="menu-stage-tooltip"><img class="css-stage-tooltip" src=${
          data.stageAlert
        }></div>
      </div>
  </nav>
  <nav class="menu-list">
    <ul>
    ${list
      .map(
        (v, i) =>
          `<li ${
            i === 1 ? "class=check" : "class"
          }><a data-action=header_${v} ><img src=${data[v]}></a></li>`
      )
      .join("")}  
    </ul> 
  </nav>`;

  return template;
};
