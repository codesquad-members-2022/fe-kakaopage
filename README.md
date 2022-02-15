# fe-kakaopage

# 목표

- 미션을 수행하기 위해 필요한 git 관련 지식 정리
- 브라우저 동작원리 정리( + 웹 접근성)
- 기획서도 고려해서 미션1을 설계하기
- 용도에 맞는 tag 사용하기
- flexbox 사용법 정리
- css 캐스캐이딩, 상속, selector 정리
- 객체지향을 생각해서 viewer와 js부분을 구분해보기
- DOM, Event, Templating 이 무엇인지, 동작방법, 동적기능 이해

# git 사용법 정리

✅ Done

- 간단한 명렁어들
  - git config
  - git init
- commit 작성법 및 약속 정리
- repository 관련 정리:
  - clone vs fork
  - fetch vs pull
  - upstream / downstream

❗️ Not yet

- branch -> 미션1PR 이후 정리할 예정
  - rebase vs merge

# Mission - 카카오페이지 클론

## 목표

- 코드쓰기 전에 어떻게 묶을지 색깔로 표시하기
- css 적용할 거 생각해서 html tag 묶기
- 정적 html, css화면만 구성

# 고민

❓ 이 상태에서는 dori내의 브랜치 못보나? local에만 브랜치가 나눠저 있는건가? 아닌데, push할 때 새로 판 branch로 push했는데...

![스크린샷 2022-02-14 오후 11 34 12](https://user-images.githubusercontent.com/71386219/153883813-ac766d7b-ef76-43c2-a275-efaaaadceca2.png)

❓ 커밋 메세지를 얼마나 세분화해야하는지

- 아무리 작아도 주제가 구분되면 구분해서 커밋해야하나? 예를 들어, 미션목표정하기 -> html 구조짜기

❓ html tag

- session vs artice 차이

❓ css convetion

- ✅ naming -> convention 정리
- naming: `main__carousel__button` vs `main__carousel > button`
- BEM 규칙을 적용하여 하위 요소는 클래스 이름에 포함하지 않도록 한다.
- 깊이가 깊은 하위 요소를 표현하기에 BEM이 불편하다. 다른 방법론도 공부해봐야겠다.

```css
/* 기존 */
main__carousel__img-container__text-container
/* 수정 */
carousel__img-container
carousel__text-container
```

❓ flexbox 남용?

# html 구조짜기 및 간단한 네이밍

![이미지-1](https://user-images.githubusercontent.com/71386219/153881920-aa848f63-bb26-48c7-b39c-a000ceac688d.jpg)
