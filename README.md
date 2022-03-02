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
- [ ] Express 서버 구성
- [ ] dummy data 생성
- [ ] dummy data 를 가져와서 랜더링

### 폴더 구조

```
│  index.html
│  package.json
│  README.md
│
├─components
│  ├─common
│  │  ├─adSlide
│  │  │      index.js
│  │  │
│  │  ├─banner
│  │  │      index.js
│  │  │
│  │  ├─box
│  │  │      index.js
│  │  │
│  │  ├─Button
│  │  │      index.js
│  │  │
│  │  ├─category
│  │  │      index.js
│  │  │
│  │  ├─dayRankingTop
│  │  │      index.js
│  │  │
│  │  ├─dayTop
│  │  │      index.js
│  │  │
│  │  ├─genreTop
│  │  │      index.js
│  │  │
│  │  ├─newTop
│  │  │      index.js
│  │  │
│  │  ├─recommend
│  │  │      index.js
│  │  │
│  │  ├─recommendEvent
│  │  │      index.js
│  │  │
│  │  └─workSmall
│  │          index.js
│  │
│  └─tab
│      ├─global
│      │      book.js
│      │      broadcast.js
│      │      home.js
│      │      movie.js
│      │      webnovel.js
│      │      webtoon.js
│      │
│      └─sub
│              webtoonHome.js
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
  <nav class="SNB">홈 요일연재 웹툰 소년 드라마 로맨스 로판 액션무협 BL</nav>
  <div class="contents">
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
    클릭하는 해당 엘리먼트에 이벤트를 거는것이 아니라 상위 엘리먼트에 이벤트를 걸고 이벤트 버블링을 사용하는 경우에는 이벤트를 삭제해야 한다.
    탭을 이동하면 계속 이벤트 리스너가 쌓이기 때문에.

#### 브랜치

- 실험용 브랜치
  - 이름은 어떻게 지어야 하나?
  - git issue를 발급해서 설명을 작성한다?
    - merge하지 않을 경우에는 issue는 그냥 close?

#### JSON

- JSON 불러오는 방법
  - XMLHttpRequest

#### event 처리하는 코드의 위치

- 컴포넌트 파일 내에서 아하?

## 학습 정리

### Flexbox

- 레이아웃의 구성 방법에는 `display`, `float`, `position` 등이 있지만 구현 방법이 복잡하고 표현하는데 한계가 있다.
- 장점

  - 크기, 순서를 유연하게 배치할 수 있다.
  - 뷰포트, 크기가 불명확하고 동적으로 변하는 경우에도 효율적으로 정렬, 배치할 수 있다.
  - 복잡한 계산 없이 요소의 순서, 크기를 유연하게 배치할 수 있다.

- 부모 요소에 다음과 같은 CSS 속성값을 넣어주면 사용할 수 있다.

```css
.flex_container {
  display: flex;
}
```

- 부모의 속성

```css
.flex_container {
  flex-direction, flex-wrap, justify-content, align-items, align-content
}
```

- 자식의 속성

```css
.flex_item {
  flex, flex-grow, flex-shrink, flex-basis, order
}
```

https://d2.naver.com/helloworld/8540176

### commit 로그를 작성하는 좋은 사례

- 커밋 메세지를 왜 잘써야 할까?

  - 커밋 로그 가독성
  - 협업, 리뷰 프로세스
  - 코드 유지보수
  - 좋은 가독성과 나은 협업, 결국에는 유지보수를 더 쉽게 하기 위함인 것 같다.

- 좋은 커밋메세지를 위한 7가지 약속
  - 제목과 본문 한 줄 띄워 구분
  - 제목은 영문 기준 50자 이내
  - 제목 첫 글자 대문자
  - 제목 끝에 `.` 금지
  - 제목은 `명령문`
  - 본문은 영문 기준 72자마다 줄 바꿈
  - 본문은 `어떻게`보다 `무엇을`, `왜`에 맞춰 작성

https://meetup.toast.com/posts/106

### HTML 시멘틱 태그

- 태그를 의미에 맞게 사용해야 한다.
- 예를 들어 헤더를 나타내는 경우에는 `<div>`가 아닌 `<header>` 태그를 사용한다.

### 웹접근성

- 장애 유무에 상관 없이 웹사이트를 이용할 수 있게 하는 방식이다.
- 다음과 같은 사항들을 고려해야 한다.
  - 시각
  - 운동성
  - 청각
  - 발작
  - 인지
- 웹 브라우징에 쓰이는 보조과학기술
  - 스크린 리더
  - 화면 확대 도구
  - 음성 인식
  - 키보드 오버레이

https://ko.wikipedia.org/wiki/%EC%9B%B9_%EC%A0%91%EA%B7%BC%EC%84%B1

### Event

#### Event type, Event object

#### Event가 비동기적으로 어떻게 동작하는가?

#### Event delegation
