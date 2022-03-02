# fe-kakaopage

## 3주차

### 🧐 어떤 생각으로?

- 3주차 미션 전

- [x] Webpack 을 사용해서 build 환경에 따른 fetch url 을 설정해보자.
  - 개발 환경에서는 localhost 에서 쓰는 백엔드서버를 사용
  - Github pages 에 Deploy 하는 환경에서는 Heroku 에 올린 백엔드서버를 사용
- [x] Webpack+babel 로 build 된 폴더에 있는 html로 데모링크를 띄우는 방법을 알아보자.
- [x] 생성자 패턴으로 사용하던 메소드를 prototype 패턴으로 바꿔보자

  - <a href="https://www.npmjs.com/package/gh-pages">gh-pages</a> 사용

- 3주차

- [x] 지난주에 하던 캐러셀 구현 ....
  - carousel branch 파서 구현? - O
  - 일단 슬라이더는 구현했음, 클릭이벤트를 달아보자.
- [x] <a href="https://github.com/healtheloper/fe-kakaopage-back">fe-kakaopage-back</a> api 만들기?
  - kakao page 는 탭을 눌렀을 때 query 로 category id 를 지정하여 데이터를 가져옴
  - 네트워크 탭에서 특정 탭을 눌렀을 때 나오는 데이터구조를 다 긁어서 해당 정보들마다 api 를 만들어보자

<img width="512" alt="스크린샷 2022-03-02 오전 10 35 29" src="https://user-images.githubusercontent.com/58503584/156277983-47c8aa6c-bd58-466c-a0b9-0408e8cc8c52.png">

<img width="598" alt="스크린샷 2022-03-02 오전 10 36 05" src="https://user-images.githubusercontent.com/58503584/156278027-71b87b6d-cd62-4986-96d8-dd0141da0fb9.png">

- 카카오페이지는 `/main` 으로 GET 했을 때, query 의 내용을 바탕으로 데이터를 얻어오는걸로 확인을 해서 그렇게 동작할 수 있게 만들어보았다.

### 🧑‍💻 알아볼점

- Webpack config 에서 사용할 수 있는 다양한 loader 들

### ❗️문제발생 then 해결한 방법

- Node Element 를 찾는 방법을 어떻게 해결할지 2주 째 고민중

  - createElementDiv 라는 함수를 사용해서 동작하게 했는데, target 에 innerHTML 을 하는 방식과 template 를 혼용해서 렌더링을 하고있어서 클래스가 렌더링 하는 방식(부모-자식컴포넌트의 연결)의 구조를 변경해야 겠다고 생각했다.

- 실제 CSR 에서는 render 이후 mount 를 하는 로직을 사용한다고 해서 mount 함수를 추가해 template 를 한이후 querySelector 로 template 한 Element 를 얻어오게 하면 되겠다는 아이디어로 새로 리팩터링을 해보고 있다.

- 데모 링크 생성
  - build 된 파일들을 기반으로 데모링크를 생성하면 되겠다 생각했다.
  - github pages 는 root 혹은 docs 폴더에 있는 index.html 을 검색해서 build 폴더를 검색하게 할 방법은 없을지 찾아보았다.
  - gh-pages 라는 모듈을 사용하면 deploy 하기위한 브랜치를 새로 파서 build 폴더를 github pages 에서 사용할 수 있게 할 수 있었다.

### ✅ PR 리뷰에서 개선한 점

- 빌드 환경에 따른 백엔드 서버 연결 (Webpack + babel 사용)
- 생성자 패턴의 메소드 사용방식 -> Prototype 패턴으로 변경
- 유틸함수 나누기
  - 클론 페이지 서비스내에서만 사용할 유틸함수 (serviceUtils.js)
  - 범용적으로 쓰여질 함수 (utils.js)

### 👋 다음 PR엔?

- Contents Box 렌더 마무리
- Carousel 버그 수정
  - 슬라이더 버튼 추가
- v2(카카오페이지 api response를 긁어온) api 로 데이터 구조 바꿔보기
