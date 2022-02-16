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

- nested router 어느 깊이까지 도달할지
- spa로 만들기(css폴더, 및 static유지)
- css -> scss
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
