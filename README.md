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

# 이론정리

- script 위치에 따른 로딩

# 진행 순서

## 큰 흐름

- nested router 어느 깊이까지 도달할지
- spa로 만들기(css폴더, 및 static유지)
- css -> scss 혹은 css리팩토링
- static 소스 관리
- 더미 데이터로 만들기

## 구체적인 방향

- js html탬플릿 만들어서 viewer분리

  - body#id로 가져올까하다가 header, main(main도 구분해서) 미리 표시될 수 있게하기
  - 유튜브 로딩될 때 회색 화면 마냥

- nested router

  - 카카오 페이지는 주소의 파라피터가 변경되는 식임.
  - https://page.kakao.com/main?`categoryUid`=10&`subCategoryUid`=10000
  - 아래 요일 연재는 라우팅없이 ui만 변경됨.

- carousel vanilla로 구현하기

- 최종 폴더구조는

```bash
├── component
│   ├── sample.js
│   └── sample.css
└── index.html
```

## 고민

- html, documen가 loaded되고 난 뒤에 실행되는것이 아닌 특정 dom이 렌더링 되고 js동작할 수 있도록 할 수 있나?

  - navigation을 먼저 렌더링하고, 해당 부분이 완료되면 나머지 부분을 렌더링하고 싶음.
  - 별 차이는 없지만 스크립트가 로드되기전에 navigation의 이동버튼을 눌렀을 때 동작하면 안되니까
  - 일단 DOMContentLoaded이후 body를 로드한 후 위의 기능적인 것을 작동시키기 위해 navigation이 있을 때만 작동할 수 있도록 `if(!navigation){}`이런식으로 작동시키기

- script를 body아래 썼으면 DOMContentLoaded이거 안써도 되나.

- 정적 변수 관리

  - id나 class를 정적 변수에 관리해야하나?

- spa처럼 생각처럼 안됨
  - 서버가 없어서 그런가
  - 그냥 해당 태그 누르면 맞는 id 값이 다르면 display: none으로 안보여주기
