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

- [x] event bubbling, capturing, event delegation
- [ ] express

# 목표 및 진행상황

## [x] 파리미터 라우팅으로 수정

현재상황

- 카테고리에 따라 고유 id번호를 부여하고, 메인페이지에서 파리미터 url로 카테고리 id를 전달해 해당 카테고리 페이지를 렌더링하게 해뒀다.

문제

- 카테고리 네비게이션을 클릭하면 해당 화면이 렌더링되지만, 새로고침이나 url을 통해 접근하면 화면이 렌더링되지 않는다.

고민

- 서버없이 url과 url파리미터만 사용해서 렌더~링할 수 있는지 고민해보기

해결

- url에서 파라미터만 가져와서 새로고침시 해당 파라미터로 렌더링
- 첫 렌더링시 파라미터가 없을 때는 default를 0으로 하고 렌더링

```js
const urlParams = window.location.search;
const params = new URLSearchParams(urlParams);
let targetCategoryUid = params.get('categoryUid');
if (targetCategoryUid) {
  targetCategoryUid = 0;
}
render(targetCategoryUid);
```

## [x] node.js를 활용해 브라우저 새로고침없이 탭 이동

- express서버에서 라우팅을 관리하기보다 돔조작과 history api조작 연습을 위해 클라이언트에서 라우팅관리
- `app.get("/*" (_, res) => res.sendfile(, "index.html"))`이런식으로 어떤 path로 가든 html파일을렌더링하기
- `라우팅관리`: `/, /webtoons`이런식으로 카테고리별로 path를 만들어 위의 설명대로 어떤 path로 가든 index.html을 렌더링하게할려다가 이미 url 파리미터로 구분했기 때문에 서버는 데이터 렌더링목적으로만 사용.

## [ ] 데이터를 mock db폴더로 분리하기

현재상황 및 고민

- second 미션을 진행하면서 데이터와 html구조를 어떻게 분리해야하나 고민했다.
- 마땅한 해결책이 생각나지 않아 우선 html전체를 렌더링하고 추후에 데이터와 구조를 분리해야겠다는 계획만 세웠다.

해결

- 현재 카카오페이지는 메인카테고리와 서브카테고리로 구분된다. 메인카테고리에 따라 렌더링 되는 ui는 5가지 레이아웃으로 나눌 수 있는데, 레이아웃은 고정이고 안에 컨텐츠만 바뀐다. 따라서, index.html에는 5가지 레이아웃틀만 남겨두고 안에 카테고리 uid에 맞는 데이터를 불러와서 렌더링하기로 한다.
- front에서 레이아웃을 렌더링하는 함수(render)를 실행하기 전에 post로 categoryUid에 맞는 데이터를 server에서 가져오는 함수(preRender)만들기

## innerHtml vs remove-append

뭐가 더 효율적일까?

해당 문제를 해결하면서 생겨난 또 다른 문제들

- html 태그에서 바로 onclick 비효율적인가?
- innherHTml에 이벤트리스너 등록
- dom요소를 지우고 계속 새로 만드는게 나을까 innerHtml로 요소만 바꾸는게 나을까

1. innerHtml 방식

원래 innerHtml로 html > body > main에 있는 5개의 article태그를 가져와, 안에 구성만 바꿔주는 방식이었음. 그런데 안에 구성 렌더링을 할 때 innerHtml로 하니까 이벤트리스너 등록하기가 까다로웠음.

2. remove-append 방식
