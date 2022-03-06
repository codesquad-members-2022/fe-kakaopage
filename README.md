# 구현 결과
[데모 페이지](https://jindonyy.github.io/fe-kakaopage/static/)  

- [X] 디렉토리 구조 개선
  ```
  ├── 📁static
  │   ├── 📁resources
  │   │   ├── 📁css
  │   │   ├── 📁font
  │   │   └── 📁images
  │   ├── 📁src
  │   │   ├── 📁data
  │   │   │   └── 📁json
  │   │   ├── 📁modules
  │   │   │   └── 📁slider
  │   │   │       └── slider.js
  │   │   ├── 📁util
  │   │   │   └── utility.js
  │   │   ├── 📁views
  │   │   │   ├── 📁components
  │   │   │   ├── 📁pages
  │   │   │   └── render.js
  │   │   ├── controller.js
  │   │   └── main.js
  │   └── index.html
  └── server.js
  ```
- [X] slider 파일 모듈화
- [X] eventListner 파일 삭제
- [ ] component 간의 의존성 없애기 (수정 중)
- [ ] 네트워크 라우터 (구현 중)
<br>

# 구현 과정
- 디렉토리 구조: controller.js 파일의 위치가 애매..
- slider: slider를 controller에서 분리
mainBanner 클래스를 기존 slider 함수들에서 제거하여 모듈처럼 사용하려 개선했으나 아직 버그 존재..!
- eventListner: 각 컴포넌트 안에 각 컴포넌트에 맞는 eventListner 추가한 뒤, 페이지별 렌더 후 listner 함수 실행하여 등록하는 방식으로 수정
- component: 작게 더 나눈 컴포넌트들을 큰 컴포넌트가 사용하는 방식인데 중복되더라도 합치는게 나을까?  
슬라이더 버튼은 각 배너 컴포넌트로 합침.