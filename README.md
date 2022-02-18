# fe-kakaopage

# 다른 사람 pr 엿보기

- [ ] calc
- [ ] stacking context
- [ ] 구분하는 주석 표시도 좋네요.
- [ ] 자주 쓰는 애들 class 묶기: flex center, box-sizing,
- [ ] vw가 %단위 대비 상대적으로 가진 장점
- [ ] rem vs em 차이
- [ ] vsc - live sass compiler
- [ ] 웹폰트?
- [ ] css is 함수

# 목표

- spa 방식으로 해보기
- template, logic 분리
- scss 사용 -> [참고](https://ossam5.tistory.com/90)

# 진행 순서

## 큰 흐름

- `클래스를 사용하지 말라는 요구사항을 못보고 클래스를 사용하다가 리팩토링`
- spa로 헤더의 탭을 누르면 하위 콘텐츠및 타이틀이 변경되게 하기

## 구체적인 흐름 설계

- layout은 html에 태그로 남겨두고 안에 콘텐츠만 js로 렌더링

# 고민

> ✅ : 해결
> ❗️ : 아직 고민 중

✅ spa처럼 만들려다가 주소를 `a href="/" -> a href="/path"` 이런식으로 하면 html이 하나여서 빈화면으로 넘어감.

- 어떤 path이던지 index.html을 다시 랜더링하면 될려나? -> 안 됨. 다시 렌더링할 때 path에 맞는 화면을 불러올 수 있는데 path설정 자체가 안 됨. html은 하나여서.
- 서버가 있다면 app.get("/\*" (\_, res) => res.sendfile(<root file path>, "index.html"))로 계속 html파일을 렌더링해야할듯.
- 서버 없이도 parameter를 활용해 페이지 리프레쉬돼도 빈 화면으로 안넘어가게 만듦.

  ```
    기존방법: / -> /webtoons
    고친방법: / -> /?categoryUid=0
  ```

✅ 하위 컨텐츠 렌더링

- 홈, 웹툰, 웹소설 등의 main카테고리 마다 하위 컨텐츠의 레이아웃은 동일하다.
- 레이아웃은 고정시키고 레이아웃 내부의 컨텐츠만 변경할 수 있도록 만들기
- 대략적인 구조

```html
<header>
  <nav>
    <a data-category="0" href="/?categoryUid=0">홈</a>
    <a data-category="1" href="/?categoryUid=1">웹툰</a>
    <a data-category="2" href="/?categoryUid=2">웹소설</a>
    <a data-category="3" href="/?categoryUid=3">영화</a>
    <a data-category="4" href="/?categoryUid=4">방송</a>
    <a data-category="5" href="/?categoryUid=5">책</a>
  </nav>
</header>
<main class="l-main" id="main-layout">
  <article class="l-main__child" id="sub-category"></article>
  <article class="l-main__child" id="carousel"></article>
  <article class="l-main__child" id="event-box"></article>
  <article class="l-main__child" id="event-carousel"></article>
  <article class="l-main__child" id="main-content"></article>
</main>
```

```js
export const routes = [
  { categoryUid: 0, getContent: Main },
  { categoryUid: 1, getContent: Webtoon },
  { categoryUid: 2, getContent: Novel },
];
```

✅ nav > ul > li > span 이런 구조에서 어디에 addEventListener("click", fn)을 줄까

- a태그에 준 데이터 속성을 활용해, nav의 어디를 누르든 `[data-category]`가 있을 때만 특정 기능이 작동하도록 만듦

❗️ 카테고리마다 레이아웃안의 컨텐츠가 다른데 어떻게 렌더링할까?

- htmltag를 관리하는 폴더를 만들어서 관리할까?

```js
async getHtml () {
  return `<h1>이런식으로</h1>`
}
```

- 아니면 json 파일을 만들어서 받아올까? 이런식으로 하면 태그 안에 값들을 어떻게 동적으로 변경하지? 잘모르겠으니까 위의 방식으로 결정

```json
id: "main-layout",
content: "<h1>세부컨텐츠</h1>
```

❗️ 디버깅 툴

- vscode extention을 사용해서 디버깅하는 방법 알아보기

[참고자료](https://velog.io/@takeknowledge/로컬에서-CORS-policy-관련-에러가-발생하는-이유-3gk4gyhreu)
