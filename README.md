# fe-kakaopage

## 요구 사항

### 헤더

- [x] html 구조 작성
- [ ] 헤더의 상단 레이아웃
  - [x] 헤더와 main이하가 css로 보았을때 분리되도록 작업
- [ ] 헤더의 상단 서브 네비게이션 버튼 css
- [ ] 헤더의 하단 네비게이션 레이아웃 및 css
  - [x] 헤더의 하단 네비게이션 각 요소 이미지 삽입
  - [x] 헤더의 하단 네비게이션 레이아웃
  - [ ] 영화, 방송, 책 우측 상단에 노란점을 추가

### 메인 네비게이션

- [x] 네이게이션 글자, 배경 색상
- [x] 네비게이션 레이아웃

### 메인 배너

- [x] 배너 이미지 삽입
- [ ] 배너 이미지를 크기에 맞게 조정

## 고민한 사항

- section, article 태그 사용 시점
  section, aritcle 태그 사용 시점을 고민하였습니다. 컨텐츠의 종류가 바뀌는 것을 section으로 나누고 section내부에서 여러 요소를 article로 하였습니다. article에는 제목(h1태그)이 포함되도록 하였습니다.

- 클래스명
  클래스명 짓는것이 어려웠습니다.

## 진행상황

![image](https://user-images.githubusercontent.com/58525009/154412251-d683a3cf-7622-4dd8-bffd-dfd99e8cc229.png)

![image](https://user-images.githubusercontent.com/58525009/154187491-7cd9fa4a-572f-49ea-b4e8-414b69b52f8f.png)

헤더 구조도 실제 페이지와 다른것 같아서 html구조 및 css를 수정해야합니다.

## git 연습

PR보내는 과정을 git명령어로 하는것이 제대로 이해하고 사용하는지 의심이 들어서 source tree로 실습하여 정리하였습니다.

링크

- [source tree로 Pull Requst 보내는 과정 실습](https://gist.github.com/HongJungKim-dev/8349df5c30ce6c6f85974c7d3144e096)

## 커밋 메시지 컨벤션

다음과 같은 규칙으로 커밋 메시지를 작성하고 있습니다.

- feat  : 유저 입장에서의 새로운 기능을 추가하는 커밋
- fix : 유저 입장에서 발생한 에러를 수정하는 커밋
- chore : 패키지, 빌드 관련 파일 수정, 파일 변경등 production과 관련없는 커밋
- docs : 문서 수정에 대한 커밋
- style : 코드 스타일 혹은 포맷(공백, 줄바꿈)등에 관한 커밋 (CSS, 코드 변경 미포함)
- refactor : 코드 리팩토링(코드 변경 사항)에 대한 커밋 (변수명 변경도 포함)
