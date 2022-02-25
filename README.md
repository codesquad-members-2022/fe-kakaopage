# fe-kakaopage

# pr 피드백

- export 되는 함수 구현방식만 잘 참고해서 수정
- 비동기적인 상황정도가 아니면 위 if(!selectedCategor) 에서 처리해도 되긴하고요.
  에러라는 상황을 표현하고 싶다면 지금처럼 할 수 있고요

# 이론정리계획

[ ] 돔 렌더링 과정

- 대충 순서는 알겠는데 설명할 정도는 아님

[x] HTML collection 및 돔 탐색 메소드들 별 특징

- live collection vs static collection:
- html collection vs nodeList

htmlcollection: live
childNode 프로퍼티가 반환하는 nodelsit: live
nodelist: static

-> hc나 nl이나 고차함수 잘 안먹히니까 배열로 만들어서 사용하면 편함

[x] 돔 삽입

- insertAdjacentHTML
- innerHTML
- crateElement -> append(or appendChild)

[x] DOM 노드 간의 관계 접근 프로퍼티

- element type만 찾는지 텍스트 요소를 포함하는지 구분해서 사용

[ ] vanilla js 디자인 패턴?

디자인 패턴이 뭘까? 일단 모듈 패턴으로 리팩토링하기로 계획. 큰 이유는 없고 한 번 해볼려고

나중에 mvc패턴도 해볼생각

디자인 패턴에 너무 종속되지 말고 일단하고 싶은대로 코드 짜기

> https://www.patterns.dev/posts/classic-design-patterns/#whatisapattern

Dynamic import

[x] js로 css 접근

Inline, External, Internal에 따라 다름. 왜 다르지...

# 리팩토링 목표

- 특정 데이터가 바뀔 때 전체가 렌더링되는 것이 아니라 특정부분만 렌더링되는 경우가 있을텐데 컴포넌트(특정영역)별로 변화를 감지해서 다시렌더링 되게 해야하나?

  - 렌더함수를 어떻게 정의할까? `innerHtml = ''` 이걸 리턴하는 식으로 하면 될듯.
  - article태그를 innerhtml로 렌더링하고 안에 탬플릿 분리해서 선언하는 로직

- 흐름

  - category & subCategory에 해당하는 파라미터를 누르면 서버에 post로 uid전달 -> 해당 데이터 서버에서 받기 -> 템플릿안에 데이터를 삽입해서 렌더링

https://ichi.pro/ko/vanilla-jslo-peuleonteu-endeu-guseong-yoso-jagseong-152350005486233

# 고민들

### 클로저 활용

- carousel에서 인덱스번호를 private하게 관리해보고 싶어서 closure를 사용함
- 클로저 안에 함수를 선언한건 잘못된건가? 클로저에서 리턴하는 함수마다 공통적으로 쓰는 로직이 있어서 분리했는데 잘 모르겠음.

### 따닥 방지

- https://darrengwon.tistory.com/1312
