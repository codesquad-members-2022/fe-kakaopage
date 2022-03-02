# step1 ~ step4

## 구현 내용

### 탭 이동 구현
![탭이동](https://user-images.githubusercontent.com/85747667/156290675-1028ff75-eb69-4d3f-ba54-bb28dd93fd3f.gif)
- 장르 탭(홈, 요일연재, 웹툰, 소년) 클릭시 해당하는 화면 렌더링

### 요일 클릭
![요일클릭](https://user-images.githubusercontent.com/85747667/156290741-07d89d87-ecca-4c70-a0a0-687ae7cca693.gif)

- 요일 클릭시 해당하는 웹툰 리스트 렌더링

### carousel slide
![carousel](https://user-images.githubusercontent.com/85747667/156290756-a312eb0c-6881-4d6a-911e-496fae1c5555.gif)

- [x] 무한 슬라이딩
- [x] 자동 슬라이딩
- [x] 수동 슬라이딩
  - 수동 슬라이딩시 자동 슬라이딩 일시 정지
- [x] 자동 또는 수동 슬라이딩시 우측하단에 페이지 번호 표시

# step5

## 변경 사항
- components 리팩토링
  - 가독성을 위해 컴포넌트의 생성 방식을 템플릿 리터럴 방식으로 통일
  - innerHTML과 appendChild 대신 insertAdjacentHTML로 변경
  - fetch로 서버에 데이터를 요청해서 렌더링 하는 방식으로 리팩토링

- express 서버 생성
![](https://user-images.githubusercontent.com/85747667/156298769-b55b923d-37dd-4626-9f05-4728f75ea555.png)
  - 모든 데이터 요청을 서버로부터 JSON형태로 받아서 처리

## 수정할 내용
- main.js의 이벤트와 관련된 함수들을 비동기 방식으로 처리하기
- 프로미스 예외처리 하기