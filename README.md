# 구현 결과
[데모 페이지](https://jindonyy.github.io/fe-kakaopage/)  

1. 페이지 로드 시, 웹툰 페이지 렌더링
2. gnb 클릭 시, 해당 gnb에 맞는 페이지 렌더링
3. 요일 연재 TOP 버튼 클릭 시, 해당 탭에 맞는 컨텐츠 렌더링  
<br>

# 구현 계획
<img width="1000" src="https://user-images.githubusercontent.com/17706346/155261615-270e45a6-3f43-4399-a12c-9a34cd13cda4.png">

- controller.js: 뷰에서 DOM을 직접 조작하지 않게 하고, 데이터와 뷰를 주고 받을 수 있는 인터페이스 역할
- view.js: DOM에 사용할 수 있는 페이지별 또는 탭에 맞는 템플릿 리터럴을 반환해주는 역할
- model.js: 페이지별 필요한 정보가 담긴 json을 반환
- components 폴더: 섹션별로 컴포넌트를 구분하고, 그 안에서 중복되는 다시 컴포넌트 따로 분리하여 재사용을 높이려 시도
- render 폴더: 페이지별로 각 컴포넌트를 조합하여 템플릿 리터럴로 반환, view.js에서 사용
- constant.js: 매직넘버, 경로 등 상수 파일
- utility.js: 여러 파일에서 자주 사용하는 함수 모음
- app.js: main 함수 역할  
<br>

#  고민
1. eventListner의 position이 애매해보인다.. 
1. 비동기.. 비동기..  
<br>

# 개선할 점
1. eventListner에서 DOM 조작하지 말아보기
1. 탭 클릭 시, active class 추가되는 gnb, 탭에서 공통 사용 -> 함수로 뺴기
1. rerender 생각해보기