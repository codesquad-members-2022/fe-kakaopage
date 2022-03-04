# fe-kakaopage

# 이론정리계획

- [x] 클로저에서 반환하는 타입 및 클로저 개념 공부
- [x] 돔 렌더링 과정-간략히
- [ ] Dynamic import in nodeJS
- [x] json으로 변환 및 json을 변환 하는 함수들
- [x] fetch API 및 HTTP Header 설정
- [ ] XMLHTTPRequest 는 잘 사용하지 않으나 그 사용법을 알아두자.
- [x] 웹 클라와 서버 통신 이해 및 csr, ssr
- [x] 탬플릿 렌더링의 장점
- [ ] http 용어 공부
- [x] url 구조 공부

# 요구사항

- url라우팅을 통해 req 분석
- json 응답 방법: json데이터를 파일로 저장후 export한다. 필요한 곳에서 require 로 가져온다,
  실제 DB를 통해서 얻어오지 않는다, Json파일이 저장된 파일을 직접 read 하지 않는
- url 구조: REST API 구조를 따르려고 노력
- axios같은 통신 라이브러리 금지
- async함수의 await 보다는 then 매서드 활용

# TODO

- [ ] clearInterval로 버튼 누를 떄 이벤트 삭제 후 재등록
- [x] promise, then, async/await 동작 과정 이해
- [x] pr 요청에 따른 수정
- [ ] db: 데이터 구조 (key, value가 최선일까?) map을 활용하면 더 좋을려나
- [ ] nodejs babel사용해보기: require너무 불편함
- [ ] 요일 탭 구현하면서 데이터 fetch와 렌더링 연습
- [ ] individual DOM : createDocumentFragement()
- [ ] mvc 패턴 (+observer)이란?

# 렌더링 방식 변경

## render.js와 각 카테고리별 관계 수정

`수정 전`

render.js

> 서버에서 데이터 가져오기 -> uid별 페이지 선택 -> 선택된 카테고리별 레이아웃 만들기 -> 레이아웃에 서버에서 가져온 데이터 넣기 -> 만들어진 레이아웃을 화면에 렌더링

category별.js

> innterHtml(탬플릿)을 article별로 return

```js
function Main(content) {
  return {
    [`${CAROUSEL}`]: 'Main',
    [`${EVENT_BOX}`]: `Main`,
    [`${EVENT_CAROUSEL}`]: `Main`,
    [`${MAIN_CONTENT}`]: `Main`,
  };
}
```

`수정 후`

render.js

> 수정 전과 흐름은 같지만 category별.js파일로 `정해진 레이아웃에 서버에서 가져온 데이터 넣기 -> 만들어진 레이아웃을 화면에 렌더링`하는 함수를 리턴하도록 수정했다.

category별.js

> uid별 페이지가 선택되면, 그 때 서버에서 가져온 데이터를 바로 넣기 -> render함수를 리턴해 render.js파일에서 사용가능하게 함

```js
export default function Main(content) {
  const template = {
    [`${CAROUSEL}`]: 'Main',
    [`${EVENT_BOX}`]: `Main`,
    [`${EVENT_CAROUSEL}`]: `Main`,
    [`${MAIN_CONTENT}`]: `Main`,
  };
  return {
    render() {
      return renderPage(template);
    },
  };
}
```

수정 이유

1. category 파일들의 기능을 명확히화게 하고 추가확장이 용이하게 하기 위해

- 단순히 탬플릿을 전달하는 함수에서 템플릿을 만들고 render하는 함수로 변경

2. render.js의 기능 줄이기

- 수정 전에는 render.js에서 데이터를 받아오고, 템플릿은 선택하고, 템플릿에 데이터를 넣고, 렌더링하는 일을 모두 진행했는데, 템플릿을 만들고 렌더링하는 과정을 각 카데고리 파일로 분리
