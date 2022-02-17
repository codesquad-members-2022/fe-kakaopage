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

## 고민

- spa처럼 만들려다가 주소를 `a href="/" -> a href="/path"` 이런식으로 하면 html이 하나여서 빈화면으로 넘어감.

  - 어떤 path이던지 index.html을 다시 랜더링하면 될려나?
  - 서버가 있다면 app.get("/\*" (\_, res) => res.sendfile(<root file path>, "index.html"))로 계속 html파일을 렌더링해야할듯.
  - 서버 없이는 불가능한가? ->

- 하위 컨텐츠 렌더링
  - carousel, eventbox 및 컨텐츠 들은 겹치니까 해당 요소들을 감싸는 layout의 id를 고정으로 가져오고 안에 내용만 변경하기
