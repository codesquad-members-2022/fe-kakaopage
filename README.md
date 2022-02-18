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

❗️ 하위 컨텐츠 렌더링

- carousel, eventbox 및 컨텐츠 들은 겹치니까 해당 요소들을 감싸는 layout의 id를 고정으로 가져오고 안에 내용만 변경하기

✅ nav > ul > li > span 이런 구조에서 어디에 addEventListener("click", fn)을 줄까

- a태그에 준 데이터 속성을 활용해, nav의 어디를 누르든 `[data-category]`가 있을 때만 특정 기능이 작동하도록 만듦
