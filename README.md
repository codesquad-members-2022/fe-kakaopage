# fe-kakaopage

### 2주차

## 생각해본점

### 이벤트 위임

- 기존에 이벤트를 등록하던 방식( render 할 때, 요소 하나하나에 이벤트를 등록)이 맘에 들지 않았었다.
- 때마침 미션내용으로 `이벤트 위임` 이라는 키워드로 이 부분을 개선할 수 있겠다는 생각을 했다.

### Node 개발 환경 적용

- front, back 을 나누어 볼까?
  - back 은 api url 을 통해서 데이터를 받는 간단한 서버로만

## Task List

### Node 개발 환경 적용

- [x] 기존에 VSC Extension 의 `Live server` 를 사용하던 개발 방식에서 Node 환경으로 변경
  - HTML을 로드하는 방법? (`fs.readfile` vs `response.sendFile`)
- [ ] 기존에 사용하던 모듈화 방식 (브라우저 모듈) 을 그대로 사용하면 오류날 것 같은데 고치기
  - 오류 안났음.. 왠지 이유 찾아보기

### 동적 기능 개발 - 이벤트 위임

- [x] 이벤트 등록방식 bubbling 적용하기
- [x] Render 방식 Navigation 별로 등록해놓은 것 추상화

### 추가로 적용해본 것

- [x] front, back 나눠서 두 개의 서버 띄워서 사용해보기
- [ ] back -> api 형태로만 사용, heroku 등을 사용해봐서 데모링크도 띄워보자.
- [x] localStorage 이용해서 fetch 한번만 하기

## 문제가 생겼던 점

- 상대경로 적용문제

  - index.html 과 js 파일 등의 경로를 마음대로 정하고 상대경로로 지정하려다 보니 경로지정에 문제가 생겼었다.

  - 파일 구조를 어떻게 짜는게 좋을까
    - app.js 에서 static 으로 보내니까 public 안으로 넣으면 해결될 것이라고 생각했다.
    - 서버에서 실행할 때 + 로컬에서 실행할 때 모두 경로 정상적용됨

- appendHTML 사용

  - 사용했던 이유 -> header 태그에 추가하면 정적으로 쓰이던 태그들이 innerHTML 때문에 다 날아갔다.
  - 없앤이유 -> setState 로 계속 state 를 관리해줘야 하는데 appendHTML 하면 태그가 계속 중복되어 생성되어서
    - 예를들어 CategoryList 에는 어떤 Genre Navigation State 을 갖고있는지 state 로 관리해야하니 CategoryList State 안에 Navigation 정보를 갖도록 setState 하려고 GenreList 를 추가하고 setState 했는데 CategoryList 가 += 로 두개가 생김

- 이벤트 버블링 방식 채택하니 문제

  - render 를 새로하면 원래 이벤트 리스너들이 다 삭제됐었는데 상위태그(this.target)가 남아있다보니 그대로 남아있게됨
  - remove 해줘야하나?

- 컴포넌트에 state 초기값을 넣는 방식

  - index.js 같은 위치에서 데이터를 생성하고 setState 로 넣어주는 게 좋을까
  - 한번만 쓰일거라면 컴포넌트 안에서 데이터를 불러오는게 좋을까

- 클릭 이벤트마다 genres.json 요청?

  - cache 활용할 수 있는 방법? (localStorage?)

- 태그 생성방식 통일하는거

- 렌더링 이후 원하는 태그 가져오기가 어렵다

- setState 하면 target 을 기반으로 해서 새롭게 rendering 하는 데, innerHTML 을 사용하기 때문에 wrapper 를 새로 설정을 해줘야 하나 생각이 들었다.
