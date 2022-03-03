# fe-kakaopage

# 이론정리계획

- [ ] 클로저에서 반환하는 타입 및 클로저 개념 공부
- [x] 돔 렌더링 과정-간략히
- [ ] Dynamic import in nodeJS
- [ ] json으로 변환 및 json을 변환 하는 함수들
- [ ] fetch API 및 HTTP Header 설정
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
- [ ] pr 요청에 따른 수정
- [ ] db: 데이터 구조 (key, value가 최선일까?) map을 활용하면 더 좋을려나
- [ ] nodejs babel사용해보기: require너무 불편함
- [ ] 요일 탭 구현하면서 데이터 fetch와 렌더링 연습
- [ ] individual DOM : createDocumentFragement()
- [ ] mvc 패턴 (+observer)

# pr 피드백 수정

1. [fallback이 뭐지](https://github.com/codesquad-members-2022/fe-kakaopage/pull/172#issuecomment-1056689774)

# 구조 변경

/category/mainCategory(main, webtoon).js들은 레이아웃만 전달하는 듯

어차피 categoryUid, subCategoryUid에 따라 서버에서 해당하는 데이터를 받고, 프론트는 렌더링하는 거라면, render를 각 카테고리 안으로 넣어도 될듯.

수정하고 싶은 방향

파리미터에 따라 템플릿을 가져올 때 selectedCategory.Category(content)로 선언하고, contentObj.render()이런식으로 실행apah
