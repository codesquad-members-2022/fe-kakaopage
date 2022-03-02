

// export const headerBar = (target)=>{
import Component from "../Core/Component.js";

export const HeaderBar = class extends Component{
    template(){
    return`
    <div class="headerBar">
        <h1 class="HomeLink">
            <img src="https://static-page.kakao.com/static/common/logo-kakaopage.svg?e0dffe87c45ca42b47399538391a1954"/>
        </h1>
        <div class="headerNav">
            <div class="searchBarWarp">
                <div class="searchBarBox">
                    <form>
                        <input/>
                    </form>
                </div>
                <div class="searchIcon">
                    <img src="https://static-page.kakao.com/static/pc/btn_search.png?a8ce9e4eba0250e52d4570c605f79f9a"/>
                </div>
            </div>
            <div class="icon">
                <a><img src="https://static-page.kakao.com/static/common/pc-logo-stage.svg?67473e9acf34aa0425a982b16f882f5f"/></a>
                <img src="https://static-page.kakao.com/static/common/stage-tooltip.svg?e37d1bc523d4daad835b7ea0620ec658"/>
            </div>
            <button class="navBtn">
                <div>캐시충전</div>
                <div class="separator"></div>
                <div>로그인</div>
            </button>
        </div>
    </div>
    `
    }

}