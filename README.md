# README.md

## [데모 페이지](https://youryu0212.github.io/clone-kakaopage/)

- 기능 : 월,화,수,목,금,토,일 탭 전환
- 슬라이딩 배너 구현 ( 3초에 한번씩 or 클릭시 전환 )

## 카카오페이지 클론 - HTML,CSS,Javascript

- [x] 카카오페이지 헤더 구현
- [x] 네비게이션 바 레이아웃 구현
- [x] 이미지 박스 ( 설명 멘트 및 광고 이미지 포함 ) 레이아웃 구현
- [x] 이미지 카드 ( 웹툰별 리스트에 사용하기 위함 ) 레이아웃 구현
- [x] 네비게이션 레이아웃 활용 : 탭 UI
- [x] 네비게이션 레이아웃 활용 : 요일 탭 UI
- [x] 네비게이션 레이아웃 활용 : 웹툰 선택기준 UI
- [x] 웹툰 리스트 레이아웃 구현
  - [x] 이미지 카드 레이아웃 활용 : 웹툰 정보 출력 이미지 카드 구현
- [x] footer 구현

## DOM API를 활용한 카카오페이지 동적 기능 개선

- 학습목표 :
- [x] 요일 연재 탭 각 요일별 데이터 구축
- [x] 요일 하이라이트 표시 이동
- [x] 이미지 박스 교체 함수
- [x] 이미지 카드 교체 함수
- [x] 선택된 요일 글자 진하게 표시 (selected-text) position 이동 함수
- [x] 이벤트 핸들링 함수
- [x] 이벤트 버블링 활용
- [x] 슬라이딩 배너 광고 : 자동 슬라이딩, 버튼 활성화

## 피드백

- [x] 클래스명 축약 : main-content**content**nav**circile -> main-content**nave_circle
- [x] 파일 네이밍 변경 : (\_) -> (-) 이용
- [ ] 다음에는 forEach 사용해 볼 것
- [ ] imageCard[n].childNodes[i].className === "image-card\_\_comment" (현재 상태에서는 재활용 가능성이 없어 아직 구현 x)
- [x] children[1].children 대신 셀렉터로 표현가능 (imageBoxContainer.querySelector(".image-box\_\_page-info") 등 활용)
- [x] el,boxInfo 등 변수명 불분명 -> 헝가리안 표기법 확인할 것 ( 헝가리안 표기법은 프로젝트 규모가 큰 현재에는 잘 사용하지 않는 방법이라고 하여 변수명을 좀 더 의미있게 변경 )
