### TODO

- [ ] before, after 활용
- [x] 함수로 HTML 생성
- [x] 생성한 HTML 조합
- [x] CSS 컴포넌트 내에서 적용
- [ ] CSS 네이밍 리팩토링(진행중)
- [ ] 컴포넌트 생성
  - [x] adSlide
  - [x] banner
  - [x] box
  - [x] category
  - [x] dayTOP
  - [x] recommend
  - [x] workSmall
  - [x] 기대신작 TOP
  - [x] 각 장르 TOP
  - [x] 일간 랭킹 TOP
    - [ ] 일간 랭킹 TOP 컴포넌트 나누기
  - [x] 추천 이벤트
- [x] GNB 탭 이동
- [ ] 웹툰 탭의 SNB 탭 이동
- [ ] 배너 슬라이더 이동
- [ ] 요일 연재 TOP 탭 이동

### 폴더 구조

```
│  index.html
│  README.md
│
├─components
│  ├─adSlide
│  │      index.js
│  │
│  ├─banner
│  │      index.js
│  │
│  ├─box
│  │      index.js
│  │
│  ├─Button
│  │      index.js
│  │
│  ├─category
│  │      index.js
│  │
│  ├─dayRankingTop
│  │      index.js
│  │
│  ├─dayTop
│  │      index.js
│  │
│  ├─footer
│  │      index.js
│  │
│  ├─genreTop
│  │      index.js
│  │
│  ├─newTop
│  │      index.js
│  │
│  ├─recommend
│  │      index.js
│  │
│  ├─recommendEvent
│  │      index.js
│  │
│  └─workSmall
│          index.js
│
├─css
│      common.css
│      style.css
│
└─js
        constants.js
        event.js
        handler.js
        index.js
        render.js
        utils.js
```

### 고민중...

#### style 태그의 중복

1. 컴포넌트를 재사용 할때마다 style 태그를 중복해서 생성합니다.
1. 파라미터를 통해서 컴포넌트의 style을 다르게 지정해주고 싶습니다.

그래서,

클래스의 이름을 **동일**하게 지정해주던 방법
➡
클래스의 이름을 **무작위**로 지정해주는 방법

으로 수정하였습니다.

그러나, 동일한 스타일의 컴포넌트를 재사용할 경우에는,

클래스 이름만 다르고 내부 코드는 동일한 **중복된** CSS 클래스를 생성합니다.

```js
export function createBanner({ size, title, status, type, views, ad }) {
  return `
  <style>${getStyle(size)}</style>
  <div class="${banner}">
    <div class="${list}">
      <div class="${img}"></div>
      <div class="banner-info col">
        <div class="${bannerTitle}">${title}</div>
        <div class="banner-category row">
          <div class="${container} row">
            <div class="${icon}"></div>
            <div class="${icon2}"></div>
            <div class="${category}">${type}</div>
            <div class="${blockIcon}"></div>
            <div class="${viewIcon}"></div>
            <div class="${viewsNumber}">${views}만명</div>
          </div>
        </div>
      </div>
    </div>
    <div class="${description}">
      <div class="${text}">${ad}</div>
    </div>
  </div>`;
}
```

#### 탭 이동을 어떻게 구현할지

- 추상화한 HTML

```html
<body>
  <header></header>
  <nav class="GNB">홈 웹툰 웹소설 영화 방송 책</nav>
  <div class="contents">
    <nav class="SNB">홈 요일연재 웹툰 소년 드라마 로맨스 로판 액션무협 BL</nav>
    <!-- ... -->
  </div>
  <footer></footer>
</body>
```

#### snb의 탭 이동

- contents에 innerHTML을 갱신하는 방법으로 랜더링.
- snb가 contents의 하위 엘리먼트.
- snb도 리랜더링됨.
  - 탭을 이동할때마다 이벤트 등록을 snb에 다시 해줘야 하는 상황.
- snb를 contents 상위로 분리하면 될 것 같다.

#### 이벤트를 언제 왜 삭제해주어야 하는가?

- DOM에서 엘리먼트를 제거하고 나면 추가했던 이벤트는 사라지는 것 같다.
  - `getEventListeners(...)`
- 그럼 이벤트 삭제를 언제 왜 해주어야 할까?
  - 일정 조건을 달성하면 더이상 필요없는 이벤트일때?
  - 탭 이동을 구현할 때 필요한가?

### 학습 정리

#### Flexbox 사용법

https://d2.naver.com/helloworld/8540176

#### commit 로그를 작성하는 좋은 사례

#### HTML 시멘틱 태그

#### 웹접근성
