# fe-kakaopage

## 🤹‍♀️ 기능 구현 ([데모페이지](https://mogooee.github.io/fe-kakaopage/))

## 1. 요일 탭 이동

- `Date` 인스턴스의 `get.day()`메서드를 이용해 오늘 날짜가 제일 처음 화면에 렌더링 되도록 함.
- 카카오 홈페이지에서 크롤링으로 받아온 데이터를 각각의 웹툰 카드로 매핑함.
- 클릭한 엘리먼트의 `innerText`로 요일의 정보를 얻어 데이터에서 웹툰의 연재 요일과 같은 요소만 필터링하여 렌더링 함.
<p align="center"><img src="https://user-images.githubusercontent.com/92701121/154663404-2a8aff79-0c78-45cf-90cc-0e12684f3386.gif" width="50%" heigth="50%"></p>

<br>

## 2. 스크롤 이벤트

- '요일 연재' 탭에서 스크롤 이벤트가 발생할때마다 웹툰들을 한 줄씩 렌더링
- 브라우저의 높이, 스크롤의 높이, 컨텐츠가 렌더링 될 위치로 남은 여백을 계산한다.
- 하나의 웹툰 카드 만큼의 공간이 생길때마다, 웹툰을 한 줄씩 렌더링하고 모든 웹툰이 렌더링 되면 스크롤 이벤트가 끝난다.
<p align="center"><img src="https://user-images.githubusercontent.com/92701121/155300420-7e0ba6b0-a41a-40b9-8bf8-86781b161bd4.gif" width="50%" heigth="50%"></p>

<br>

## 3. 무한 슬라이드

- 가장 첫번째와 마지막 슬라이드를 클론하여 슬라이드의 끝단에 붙이고 복사본의 마지막 슬라이드로 이동시 즉시 원본으로 넘어가게 하여 무한 슬라이드를 구현함.
- 슬라이드가 완전히 넘어가기 전에 발생하는 클릭 이벤트를 막아 오류를 방지
- 슬라이드 위에 커서가 올라오면 자동재생이 멈추고 버튼을 클릭하면 슬라이드를 넘길 수 있음
- 탭 클릭시 카데고리에 맞는 슬라이드 데이터를 사용하여 렌더링 함.

<p align="center"><img src="https://user-images.githubusercontent.com/92701121/156715538-a9bc0a1b-b9c9-4c8f-a62c-896f7cf3f23a.gif" width="50%" heigth="50%"></p>
