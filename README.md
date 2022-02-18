# 🍫카카오페이지 클론

# 1. HTML, CSS 개발
## __🏁 학습목표__
- HTML 태그 활용
- CSS 기반 동작 원리, 레이아웃 구성 원리 이해
- HTML, CSS 지식을 활용한 웹 단일 페이지 개발
- HTML, CSS 기본 디버깅 방법

## __🔨 구현 계획__
- [X] header, main, footer 영역 위치와 사이즈 설정하고 정렬하기
- [X] __header__
  - [X] top, nav 영역 잡기
  - [X] top
    - [X] 로고   
    - [X] 검색창
    - [X] 스테이지
    - [X] 캐시충전
    - [X] 로그인 버튼
  - [X] nav
    - [X] 네비게이션 메뉴 구현
    - [X] 네비게이션 메뉴 알림 뱃지 구현
- [ ] __main__
  - [X] 장르 네비게이션 메뉴
  - [X] 큰 슬라이드 광고 배너
  - [X] 컨텐츠 메뉴
  - [X] 작은 슬라이드 광고 배너
  - [X] TOP 컨텐츠 공통 스타일 구현
    - [X] 타이틀
    - [X] 더보기
    - [X] 만화 프로필
  - [X] 요일 연재 TOP 요일별 네비게이션
  - [X] 기대 신작 TOP 광고 배너 -> __❗️ TODO 큰 슬라이드 광고 배너 스타일 활용해서 수정__
  - [X] 일간 랭킹 Item
  - [X] 추천 이벤트
  - [X] 카카오페이지 앱으로 보기 버튼
- [X] __footer__
  - [X] 회사 정보
  - [ ] 저작권 인증 마크

## __🔨 구현 과정__
### __1. header, main, footer 영역 확보__
```css
header {
    ...
    width: 100%;
    height: 150px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

main {
    ...
    width: 720px;
    margin: 170px auto 0;
}

footer {
    ...
    width: 720px;
    margin: 0 auto;
}
```
- header 를 상단에 고정시키기 위해 position 속성을 사용
- main과 footer 를 가운데 정렬하기 위해 margin 속성의 좌우를 auto로 설정

### __2. 검색창__
```html
<div class="search">
    <form class="search__form">
        <input type="text" class="search__input">
    </form>
    <img src="resources/images/btn_search.png" alt="검색버튼" class="search__button">
</div>
```
- header 에 있는 검색창은 input form 과 img 를 div로 묶어 구현했다.
- search div의 border 로 테두리를 그리고 input은 border 와 outline 을 모두 제거
- input 의 배경색은 transparent로 설정
- 돋보기 버튼 위에 마우스를 올리면 커서가 적절하게 바뀌도록 cursor 속성을 pointer 로 설정

### __3. header 메뉴 구분자__
```html
<div class="header__menu">
    <div class="menu">
        <button class="menu__button">캐시충전</button>
        <div class="menu__separator"></div>
        <button class="menu__button">로그인</button>
    </div>
</div>
```
```css
.menu__separator {
    width: 1px;
    height: 12px;
    margin: 0 10px;
    background-color: #e2e2e2;
}
```
- header 우측에 있는 캐시충전 로그인 사이의 구분자를 어떻게 구현해야 할지 고민했는데 가운데 div를 넣어 그려주는 방법을 알게 되어 구현해봄
- width와 height로 사이즈를 정해주고 margin 으로 간격을 조절하기만 하면 된다!

### __4. header 네비게이터 메뉴__
```html
<nav class="header-nav">
    <ul class="header-nav__list">
        <li class="header-nav__item header-nav__item--selected">
            <a href="#">웹툰</a>
            <img src="resources/images/icon_clock.png" alt="연재아이콘">
        </li>
        ...
```
- ul 태그 header-nav__list 의 display 를 flex 로 줘서 li 요소들을 가로로 정렬했다.
- 메뉴 선택시 아래에 노란줄이 나타나는건 header-nav__item--selected 클래스의 border-bottom 속성값을 설정하는 것으로 구현.
- 웹툰과 웹소설에 있는 점과 시계 아이콘은 그냥 사진으로 잘라와서 옆에 붙였다. ^//^)>

### __5. header 네비게이터 뱃지__
```html
<li class="header-nav__item header-nav__item--selected">
    <a href="#">웹툰</a>
    <img src="resources/images/icon_clock.png" alt="연재아이콘">
    <div class="header-nav__badge">
        <div class="header-nav__badge--icon"></div>
    </div>
</li>
```
```css
.header-nav__badge {
    width: 7px;
    padding-left: 5px;
    padding-bottom: 30px;
}

.header-nav__badge--icon {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #ffd200;
}
```
- 알림의 역할을 하는 뱃지는 위의 구분자를 구현했던 방식을 따라서 div를 만들어서 구현했다.
- 텍스트와 뱃지의 가로 정렬은 li 태그인 header-nab__item 의 display 를 flex로 해서 가로로 배치함.
- 처음에는 div 하나로만 했었는데 우측 상단위에 정렬하려면 겉을 감싸는 div가 필요할거 같아서 2중으로 만들어서 겉의 div의 padding left, bottom 속성을 조절해서 위치를 잡았다.

### __6. 장르 네비게이션 메뉴__
```css
.main-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 720px;
    margin: 0 auto;
    background-color: #ffff;
}

.main-nav__list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 720px;
}

.main-nav__item {
    padding: 24px 0;
    font-size: 20px;
}
```
- 위에 구현한 네비게이터와 같이 flex 로 구현했다.