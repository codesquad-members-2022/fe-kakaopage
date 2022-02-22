## 구현 방식
[데모 페이지 링크](https://lv0314.github.io/fe-kakaopage/test.html)
카카오 페이지 메인에서 고정되는 부분(header, genre-nav, footer)를 제외한
메인 컨텐츠 부분은 특정 형식이 반복된다는 점을 고려하여
각 형식을 템플릿 리터럴로 만들어서 활용 (format0~12 구현)  
이 format들을 조립해서 장르별로 페이지를 만들고(createPage.js) genre-nav 각 요소별로 이벤트 등록  
이미지, 웹툰 제목, 기타 설명 등은 더미데이터를 만들어 랜덤으로 불러오는 방식으로 구현  

## 미구현
- navigation 클릭 시 css 주는 부분을 navigation 마다 효과가 달라서 어떻게 주는게 최선일지 고민 중
- 요일 클릭 이벤트 부분
- css이름이나 형식에서 중복 제거 등 리팩토링

웹툰 메뉴는 template literal로 구현했으니
추가 메뉴들은 createElement를 사용하여 구현

genre-nav에 각각 이벤트를 추가하는게 맞을까?
genre-nav는 HTML의 고정 항목이고, 각각 렌더링하는 페이지가 다르기 때문에 어쩔 수 없는 부분인 것 같다

이벤트 위임 : body에 하고 조건문을 써서 e.target의 유효성 검사를 하고 클릭 이벤트가 발동하도록 했는데
그러면 body의 엘리먼트를 클릭할 때 마다 유효성 조건 검사를 하는데 낭비가 아닐까?

re-rendering을 막는 법 : 검색해보니 history API를 써서 페이지를 이동하는 것 처럼 동작하게 하면 처음 렌더링 된 상태로 저장하고 있는 것 같음