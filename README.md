# fe-kakaopage

## 웹툰 탭을 눌렀을 때 동작
- [x] 웹툰 탭 밑의 border 색상 변경
  - [x] 기왕이면 CSS가 부드럽게 transition 되도록 하기
- [x] 더미페이지에서 화면 UI로 렌더링 되도록 하기

## 카테고리 탭 UI 동작
- [X] 탭 글자 색상 변경
  - [X] 기왕이면 CSS가 부드럽게 transition 되도록 하기
- [X] 요일연재 탭을 클릭시에 만화 그리드 UI가 변경되어 나오도록 한다.
- [X] 홈 탭을 클릭 시에 중간 광고 배너 등을 렌더링 한다.
- [ ] 그 외 탭 동작 구현

## 요일별 탭 UI 동작
- [X] 요일 별 탭 클릭시 글자 색상 및 배경 색상 변경
  - [X] 기왕이면 CSS가 부드럽게 transition 되도록 하기

## 캐러셀 동작
- [x] 자동으로 슬라이더 애니메이션 실행
- [x] 클릭 시 애니메이션 실행
- [x] inifinite slider 구현
- [x] 클릭과 자동 애니메이션 간섭 없이 동작

## 서버 
- [x] html 및 정적 파일 렌더링


 캐러셀 슬라이더 애니메이션은 requestAnimationFrame으로 구현해보았습니다. 양쪽 끝에 각각 첫번째와 마지막 슬라이드를 복사해서 붙여넣고 해당 슬라이더에 도달하는 transitionend 이벤트가 발생할 시에
transition:none으로 style을 변경한 뒤 인덱스를 다시 1 또는 length-1로 변경하는 방식으로 끊어지지 않고 이어지는 것처러 보이게 하였습니다. 다만 문제는 로직을 아무래도 외부에서 참고하여 작성하다 보니 코드가 최적화된 것과는 거리가 멀어서 상당히 길고 다량의 이벤트를 등록하고 있습니다. 이를 최대한 분리시켜서 리팩토링 할 수 있도록 해야할 것 같습니다. 
서버는 간단하게 view engine을 사용하여 html과 정적파일들을 렌더링 하였습니다. 
파일을 전부 express-server라는 폴더에 이동하고 해당 디렉토리에 패키지를 새로 초기화해서 각각의 package.json과 node_modules 폴더를 따로 가지게 되었는데 맞는 구성 방식인지 궁금합니다. 우선 npm script도 yarn run start를 하시면 해당 디렉토리에서 서버가 실행되도록 설정하였습니다.

리뷰에 남겨주신 await 이후에 코드는 이 결과에 관심이 없는 코드라는 리뷰를 보고 느낀 점이 있어서 blocking할 이유가 없는 await은 최대한 제거하려고 하였습니다. 또한, 페이지 성능 상 어떤 것이 우위인지 알 수는 없지만 파라미터로 계속 넘겨주더라도 fetch요청 횟수를 최대한 줄이는 것이 맞는 것 같아 페이지의 가장 상위 함수 컴포넌트에서 한 번만 fetch 요청하고 데이터를 계속해서 내려주는 방식으로 데이터를 전달하여 렌더링하엿습니다.
이 부분은 전역 저장소를 구현함으로써 다음 미션에서 해결할 수 있다고 생각합니다. 이제 앞으로는 상태를 가지는 컴포넌트와 전역 저장소를 활용하여 구현하는 것을 목표로 주말동안 작업해보려 합니다.


