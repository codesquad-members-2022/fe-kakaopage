# step1 ~ step5

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

### express 서버 생성
![](https://user-images.githubusercontent.com/85747667/156298769-b55b923d-37dd-4626-9f05-4728f75ea555.png)
  - 모든 데이터 요청을 서버로부터 JSON형태로 받아서 처리


# step6

## 변경 사항
코드 리뷰를 바탕으로 리팩토링에 중점을 두었습니다.

### 1. 캐러셀 슬라이드 리팩토링 
  - init 메서드 실행시 container, list 인자를 넣도록 수정했습니다.

### 2. components 리팩토링 / render 폴더 생성
- forEach 반복문을 reduce로 변경했습니다. 
- 컴포넌트 내부의 render 관련 함수들을 분리해서 render 폴더 안의 components에 넣어주었습니다.
- 기존의 render.js 파일은 각 페이지를 렌더링 하므로 파일명을 pages 로 바꾸고 render 폴더 안에 넣어주었습니다.

### 3. router 폴더 내부의 작은 파일들을 하나로 통합
- 같은 구조의 파일을 하나로 통합해주었습니다.

### 4. 폴더 구조 및 이름 변경
- public 폴더 내부에 있는 data 폴더를 밖으로 빼줬습니다. 
  - public은 클라이언트에서 사용하는 정적 파일이므로 서버에서 사용하는 data 폴더가 그 안에 들어있으면 이상하다고 생각이 들었습니다.
 - CSS JS assets 폴더 이름 변경
   - [mdn의 파일 다루기 문서](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/Dealing_with_files)를 참고하면서 폴더 이름을 수정했습니다.