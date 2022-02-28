# fe-kakaopage

# pr 피드백 수정사항

- [ ] lazy import 활용과 장점, network탭 확인
- [ ] 반환 값에 따른 함수이름 db/novelDB.js -> getNovelData
- [ ] static/js/articles/Carousel/handleMove.js: 아래 initMove는 화살표함수가 아니고.

```js
renderButtons()  {
},
initMov() {
}
```

- 중첩된 코드의 표현을 콜백함수를 분리하기
- 모든 DOM NODE를 JS로 다 동적으로 추가할 필요는 없고, 껍데기와 기본틀은 HTML을 미리 구성해두는 것도 좋아요. 그리고 변경이 되는 부분만 DOM조작을 하는 것으로.

# 이론정리계획

- [ ] 돔 렌더링 과정
- [ ] Dynamic import
- [ ] json으로 변환 및 json을 변환 하는 함수들
- [ ] fetch API 및 HTTP Header 설정
- [ ] XMLHTTPRequest 는 잘 사용하지 않으나 그 사용법을 알아두자.
- [ ] 웹 클라와 서버 통신 이해
- [ ] 탬플릿 렌더링의 장점
- [ ] http 용어 공부
- [ ] url 구조 공부

# 요구사항

- url라우팅을 통해 req 분석
- json 응답 방법: json데이터를 파일로 저장후 export한다. 필요한 곳에서 require 로 가져온다,
  실제 DB를 통해서 얻어오지 않는다, Json파일이 저장된 파일을 직접 read 하지 않는
- url 구조: REST API 구조를 따르려고 노력
- axios같은 통신 라이브러리 금지
- async함수의 await 보다는 then 매서드 활용

# 목표

하고 싶은 대로 하되, 목표와 그에 따른 이유, 고민과정을 작성하기
