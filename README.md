# fe-kakaopage

- [x] 웹툰 말고도 웹소설, 영화 Category 도 사용한다고 했을 때 어떻게 Render 할 지 ?

  - Category 를 사용하고자 하니 Render 하는 방식이 복잡해져서.. 어떻게 처리할지 고민
  - Category 아래에 GenreNav 가 존재하는 식이라서 Category 를 Render 해줄 때 GenreNav 도 새로 Render 하게 해야 selected 등의 값이 초기화되어서 해당 부분을 설정하는게 힘들었다..

- [x] Categoty 선택 시 class 명 selected 주기
- [x] 다른 Category 선택 시 selected 클래스명 삭제하기
- [x] Genre 도 동일하게 selected 클래스 생성+삭제하기

- [x] Days Nav (요일별 이동) 만들기

- [ ] Rank 의 순위 기준??
  - 카카오페이지 : 누적 조회수, 댓글, ... 어떻게?
  - 일단 rank는 평점(9.9)으로 통일

### MainBanner Component

- [ ] 이미지 슬라이더?
  - 일단 이미지 1개만 불러오는 태그로 작성
