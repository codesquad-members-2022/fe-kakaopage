# fe-kakaopage

## 3주차

### 🧐 어떤 생각으로?

- 3주차 미션 전

- [x] Webpack 을 사용해서 build 환경에 따른 fetch url 을 설정해보자.
  - 개발 환경에서는 localhost 에서 쓰는 백엔드서버를 사용
  - Github pages 에 Deploy 하는 환경에서는 Heroku 에 올린 백엔드서버를 사용
- [x] Webpack+babel 로 build 된 폴더에 있는 html로 데모링크를 띄우는 방법을 알아보자.

  - <a href="https://www.npmjs.com/package/gh-pages">gh-pages</a> 사용

- 3주차

- [x] 지난주에 하던 캐러셀 구현 ....
  - carousel branch 파서 구현? - O
  - 일단 슬라이더는 구현했음, 클릭이벤트를 달아보자.
- [ ] fe-kakaopage-back api 만들기?
  - kakao page 는 탭을 눌렀을 때 query 로 category id 를 지정하여 데이터를 가져옴
  - 네트워크 탭에서 특정 탭을 눌렀을 때 나오는 데이터구조를 다 긁어서 해당 정보들마다 api 를 만들어볼까.

### 🥲 아쉬웠던 || 어려웠던 점?

### 👍 잘했던 || 좋았던점

### 🧑‍💻 알아볼점

- Webpack config 에서 사용할 수 있는 다양한 loader 들

### ❗️문제발생 then 해결한 방법

- node ID 를 만들어야겠다. 왜?
  - Component 를 만들었을 때, 그 해당 Component 의 template 뿐 아니라 dom 에서 쓰일 node type 도 필요했음
  - 왜 필요했나? -> 만든 컴포넌트의 하위태그를 지정할 때
  - node ID 로 어떻게 할건데? -> target 에서 querySelectorById 로 찾으면 될 듯
  - node Id 여러개 넣어야할때는? 랜덤함수넣자

### ✅ PR 리뷰에서 개선한 점

### 👋 다음 PR엔?
