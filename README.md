# fe-kakaopage

# 다른 사람 pr 엿보기

- calc
- stacking context
- 구분하는 주석 표시도 좋네요.
- 자주 쓰는 애들 class 묶기: flex center, box-sizing,
- vw가 %단위 대비 상대적으로 가진 장점
- rem vs em 차이
- vsc - live sass compiler
- 웹폰트?
- css is 함수

- html태그에서 id를 사용할 땐 클래스와 달리 id역할은 무엇인지 스스로 정의하고 사용
- async/await

# 프로그래밍 요구사항

- tempalte literal 문법
- DOM 조작과정에서 createElement, appendChild, insertBefore 등의 메서드
- Event delegation으로 중복된 이벤트 등록 줄이기
- node.js사용
- 어느 정도까진 괜찮지만 계속 dom을 추가하고 빼는 건 좋지 못할 수 있다.(apppend, remove)
- 탬플릿 리터럴 vs createElement -> 프레임워크vs바닐라로 이어지는 성능과 효율성

# 공부할 내용

- [x] history api
- [ ] 동적으로 돔 조작 및 이벤트 등록,삭제
- [x] event bubbling, capturing, event delegation
- [ ] nodejs - express

# 미션 구현과정 및 고민들

## [x] 파리미터 라우팅

문제

- 카테고리 네비게이션을 클릭하면 해당 화면이 렌더링되지만, 새로고침이나 url을 통해 접근하면 화면이 렌더링되지 않는다.

고민

- 미션2: 서버없이 url과 url파리미터만 사용해서 렌더링할 수 있는지 고민해보기
- 미션3: 서버가 있지만 이미 `파라미터`로 구현해서 /main, /webtoon과 같은 path는 사용하지 않기로함. `사실상 현재 서버는 없어도 라우팅에 문제 없음`

해결

- url에서 파라미터만 가져와서 새로고침시 해당 파라미터로 렌더링
- 첫 렌더링시 파라미터가 없을 때는 default를 0으로 하고 렌더링
- 현재 카카오페이지는 메인카테고리와 서브카테고리로 구분된다. 메인카테고리에 따라 렌더링 되는 ui는 5가지 레이아웃으로 나눌 수 있는데, 레이아웃은 고정이고 안에 컨텐츠만 바뀐다. 따라서, index.html에는 5가지 레이아웃틀만 남겨두고 안에 카테고리 uid에 맞는 데이터를 불러와서 렌더링하기로 한다.

```js
// utils.js
export function getParams() {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const categoryUid = Number(params.get('categoryUid'));
  const subCategoryUid = Number(params.get('subCategoryUid'));
  return { categoryUid, subCategoryUid };
}
// render.js
export async function render() {
  const $mainLayout = $get(MAIN_LAYOUT);
  // 우선 서버 동작 없이 mock데이터로 구현
  // const uidContent = await preRender(categoryUid);
  try {
    const { categoryUid, subCategoryUid } = getParams();
    const selectedCategory = routes.find(
      (route) => route.categoryUid === categoryUid
    );
    if (!selectedCategory) {
      throw new Error(NOT_FOUND);
    }
    // 카테코리와 서브 카테고리 아이디에 맞는 내용 렌더링시작
  } catch (error) {
    console.log(error);
    if (error.message === NOT_FOUND) {
      history.pushState(null, null, '/');
      location.reload();
    }
  }
```

## [x] node.js를 활용 목적 및 라우팅 관리

- express서버에서 라우팅을 관리하기보다 `돔조작과 history api조작 연습을 위해 클라이언트에서 라우팅관리`
- `app.get("/*" (_, res) => res.sendfile(, "index.html"))`이런식으로 어떤 path로 가든 html파일을렌더링하기
- `라우팅관리`: `/, /webtoons`이런식으로 카테고리별로 path를 만들어 위의 설명대로 어떤 path로 가든 index.html을 렌더링하게할려다가 이미 url 파리미터로 구분했기 때문에 `서버는 데이터 렌더링목적으로만 사용.`
- 카데고리와 서브카테고리에 맞는 데이터만 post요청시 보내주는 것으로 계획 중
- front에서 레이아웃을 렌더링하는 함수(render)를 실행하기 전에 post로 categoryUid에 맞는 데이터를 server에서 가져오는 함수(preRender)만들기

```js
// render.js - 클라
// 렌더링하기 전 cateogoryUid에 해당하는 데이터를 서버에서 받아오기
async function preRender(uid) {
  const body = { uid };
  const data = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
  return data;
}
// server.js - 서버
// mocke데이터를 post로 받아올 예정
app.post('/*', (req, res) => {
  const { uid } = req.body;
  res.send({ uid });
});
```

## DOM 조작관련 문제들

1. [ ] html 태그에서 바로 onclick 비효율적인가?

2. [ ] dom요소를 지우고 계속 새로 만드는게 나을까 innerHtml로 요소만 바꾸는게 나을까

- innerHtml로 html > body > main에 있는 5개의 article태그를 가져와, 안에 구성만 바꿔주는 방식
- 카테고리와 서브카데고리에 맞는 데이터를 받아서 넘겨줌.

```html
<body>
  <header></header>
  <main>
    <article class="l-main__child" id="sub-category"></article>
    <article class="l-main__child" id="carousel"></article>
    <article class="l-main__child" id="event-box"></article>
    <article class="l-main__child" id="event-carousel"></article>
    <article class="l-main__child" id="main-content"></article>
  </main>
</body>
```

```js
// 웹툰 카테고리 예시
export const Webtoon = async (subCategoryUid) => {
  const subCategory = renderSubCategory(subCategoryIndexArr);
  const carousel = renderCarousel(subCategoryUid);
  const eventBox = `Webtoon`;
  const evenCarouel = `Webtoon`;
  const mainContent = `Webtoon`;
  return renderMainChildDOM({
    subCategory,
    carousel,
    eventBox,
    evenCarouel,
    mainContent,
  });
};

//categoryUid와 subCategoryUid별 데이터를 받아 레이아웃에 전달하는 함수
export function renderMainChildDOM({
  subCategory,
  carousel,
  eventBox,
  evenCarouel,
  mainContent,
}) {
  const returnObj = {};
  returnObj[SUB_CATEGORY] = subCategory;
  returnObj[CAROUSEL] = carousel;
  returnObj[EVENT_BOX] = eventBox;
  returnObj[EVENT_CAROUSEL] = evenCarouel;
  returnObj[MAIN_CONTENT] = mainContent;
  return returnObj;
}
```

그런데 안에 구성 렌더링을 할 때 `innerHtml로 하니까 이벤트리스너 등록하기가 까다로웠음`. 아래 3번에서 해결

3. [x] innherHTml에 이벤트리스너 등록 어떻게 하지?

wrapper를 createElement로 만들고, wrapper안에 요소를 innerHtml로 만들었음

```js
export function renderSubCategory(subCategoryIndexArr) {
  const { categoryUid, subCategoryUid } = getParams();
  const newUl = document.createElement('ul');
  newUl.classList.add('c-category');
  newUl.innerHTML = `
  ${subCategoryIndexArr
    .map(
      (categoryIndex, idx) =>
        `<li class="main__index c-category__index ${
          idx === Number(subCategoryUid) && 'sub-category-active'
        }" >
          <a data-subCategory=${idx} href="/?categoryUid=${categoryUid}&subCategoryUid=${idx}">${categoryIndex}</a>
        </li>`
    )
    .join('')}`;
  newUl.addEventListener('click', (event) =>
    handleClickNavigation(event, 'subCategory', true)
  );
  return newUl;
}
```

4. [ ] carousel 애니메이션 만들기

- 'js carousel'과 같은 키워드 검색없이 carousel이 동작하려면 어떤 이벤트와 css요소를 사용해야할까 고민하면서 구현해보았습니다.
- setInterval로 3초 간격으로 이미지가 넘어가게 만들었습니다

문제

- 현재 보여지는 타켓 이미지의 번호($/3: $부분)를 동적으로 관리하는데 어려움을 겪었습니다.
- 컴포넌트를 기능별로 나누었을 때 공통으로 사용하는 변수 관리 어려움.
