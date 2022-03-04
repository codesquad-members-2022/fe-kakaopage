import { icons } from "../../assets/icons.js";

const getHeaderTemplate = () => {
    return `
      <div class="header__container">
          <h1 class="header__logo">
            <a href="#"
              ><img src=${icons.kakaoLogo}alt="카카오페이지 메인 로고"
            /></a>
          </h1>
          <div class="header__utils">
            <form class="header__search-form">
              <input type="text" class="header__search-input" />
              <button type="submit" class="header__search-btn">
                <img src=${icons.search} alt="검색" />
              </button>
            </form>
            <div class="header__stage">
              <a href="#" class="header__stage-logo"
                ><img src=${icons.stageLogo} alt="스테이지 로고"
              /></a>
              <img
                class="header__stage-tooltip"
                src=${icons.stageTooltip}
                alt="스테이지 툴팁"
              />
            </div>
            <div class="header__user-services">
              <div class="header__user-service"><a href="#">캐시충전</a></div>
              <div class="divider"></div>
              <div class="header__user-service"><a href="#">로그인</a></div>
            </div>
          </div>
      </div>
    `
}

export {getHeaderTemplate}

    