# README.md

## [데모 페이지](https://youryu0212.github.io/clone-kakaopage/)

- 기능 : 월,화,수,목,금,토,일 탭 전환
- 기능 : 웹툰 탭 하위의 홈 ~ BL 더미페이지 전환 (요일연재만 html-css로 제작)
- 슬라이딩 배너 구현 ( 3초에 한번씩 or 클릭시 전환 )
- 데모 페이지에는 json을 생략하였지만, 코드는 express 서버를 열어 json 요청, fetch 받아 사용하는 방식 구현

## 피드백

1. change-image-card.js

- [x] changeImageCardInfo가 뭐하는 함수인가? ⇒ 렌더링 하는 거라면 ImageCardInfoView 라고 해도 될 듯
- [x] change-image-card.js 파일에 8번째줄 forEach로 바꿔보기
- sol : change-image-card.js파일에 실패 테스트 케이스를 발견 (요일별로 이미지 갯수가 다를 경우 에러) -> 파일을 삭제하고 render > weekly > render-webtoon-weekly.js 파일에 수정 함수 추가

- [x] createImageCard.js 파일 destructuring 문법 활용 : 구조분해 할당 사용
- [x] render-handler.js 파일 이벤트 등록 코드 함수 안에서 : 이벤트 등록 함수 분리
- [x] render-handler.js 파일 57~60 줄 하나의 함수로 : getNowDay 함수 분리
- [x] render폴더 안에 더미 데이터 생성 중복 함수로 분리 : 더미데이터 생성 함수 분리 재사용

## 학습진행상황

- 이벤트 등록 함수를 왜 구분해야 하는지 의아했지만, 태그명과 콜백함수를 매개변수로 받아서 여러 파일에서 재사용 가능한 것을 보고 유지 보수에 강점이 있는 것을 느낌 하지만 원래 addEventListener 역시 핸들러를 콜백으로 받기 때문에 큰 이점이 있는지는 의문인 상황
- 더미 파일의 경우 나중에 구현하게 되면 모두 로직이 달라지기 때문에 중복 코드가 많았음. 해당 중복을 생성해주는 함수를 분리하여 중복을 줄일 수 있음
- 작은 단위의 함수로 나누면서 폴더 구조에 대해서 다시 한번 고민하게 됨
- 기존 코드의 문제점을 발견(이미지 카드 변경 로직이, 각 요일별 이미지 갯수가 다를 경우 동작x)하고 로직을 변경하여 개선
- 작은 단위의 함수를 조합하여 클래스-상속에 의지하지 않고도 재사용이 가능한 것을 느낌
- promise-then 학습중

## 질문사항

- 이벤트 등록 코드를 함수 안에서 해보라는 피드백을 듣고, 아래 코드처럼 이벤트 등록 함수를 별도로 분리시켰습니다. 그런데 해놓고 보니 각 파일에서 사용하기 위해 addEventListener이랑 큰 차이가 없는 것 같이 느껴집니다. 이렇게 분리하는 것이 강점이 있을까요?? 아니면 피드백해주신 내용은 이렇게 분리하라는 것이 아니라 이벤트 등록 코드만 외부 공간에 있으니, 이벤트 등록역시 다른 코드들처럼 함수 안에서 진행하라는 뜻이었을까요?

```javascript
export const onClickListener = (targetTag, callback) => {
  targetTag.addEventListener("click", (evt) => {
    callback(evt);
  });
};
```

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

## 슬라이드 구현

- [x] 자동 슬라이딩
- [x] 무한 슬라이딩
- [x] 버튼 이벤트 (이벤트 버블링 활용)
- [x] 셋타임아웃, 셋인터벌 활용

## express를 이용한 서버 구현

- [x] npm 학습
- [x] express 설치
      <img width="1215" alt="image" src="https://user-images.githubusercontent.com/87521172/155580109-38a6461d-17f7-46cb-b4df-bf56ac4a7b21.png">

## 이전 step 피드백

- [x] 클래스명 축약 : main-content**content**nav**circile -> main-content**nave_circle
- [x] 파일 네이밍 변경 : 파일 이름 연결에 언더바(\_) 사용 -> 대쉬 (-)로 변경
- [x] children[1].children 대신 셀렉터로 표현가능 (imageBoxContainer.querySelector(".image-box\_\_page-info") 등 활용)
- [x] el,boxInfo 등 변수명 불분명 -> 헝가리안 표기법 확인할 것 ( 헝가리안 표기법은 프로젝트 규모가 큰 현재에는 잘 사용하지 않는 방법이라고 하여 변수명을 좀 더 의미있게 변경 )
- [x] 변수명이 의도를 담을 수 있게 구체적으로 작성 ( handler -> weeklyWebtoonHandler 처럼 변수에 의미를 부여)

## SETP3 이후 피드백 반영 :

- [x] 4가아니고 다른 갯수도 동작하게 한다면?? 어렵겠군요.. :
  - 매직 넘버 (4) => imageCardInfo.length 로 변경
- [x] 메서드가 좀 복잡해보이죠? 아주 긴 건 아닌데. 하위함수로 더 분리할 수 있을까? 한번 고민은 해보세요. : image-box-handler.js의 nextImage 함수
- [x] 하위함수로 분리하고 나서 위 함수랑 중복을 해결할 수 있는 부분도 생길지 모르겠네요. : image-box-handler.js의 prevImage 함수
  - 두 메소드에서 setInterval 타이머 초기화 로직 중복을 하위함수로 분리
- [x] 이런걸 써 됩니다. target.parentNode 그런데 DOM구조가 바뀌면 이 코드가 동작하지 않을수도 있어요
  - 다음, 이전 두 버튼의 이벤트를 분리하여 parentNode 사용을 제거 가능, 이벤트 버블링 구현 연습을 위해 구현은 x
- [x] 계산에 의해서 이런값을 설정하는 것 좋고요. 100이라는 숫자는 여전히 매직넘버긴하고요. 이름 달아주셔요.
  - 매직넘버 제거 : const TRANSLATE_RANGE = 100; const SLIDER_INTERVAL = 2000;

## STEP4 변경사항 :

- 파일 네이밍컨밴션 변경 : handler -> weeklyWebtoonHandler
- 변수명 네이밍컨벤션 변경 : main -> webtoon-weekly, cardInfo -> weeklyWebtoonImageCard 등
- 폴더구조 변경 : js파일 별도 폴더로 이동
- express 서버 구현

## step5 변경사항:

- HTML 부분 하드 코딩 데이터를 js로 동적으로 생성
- 더미데이터를 추가하여 탭 간 전환 기능 추가
- JS 폴더 구조 변경 ( 기존 JS파일을 이동하지는 않았지만, 새로 구성한다면 해보고 싶은 폴더 구조로 변경. 좋은 구조는 아닌듯 하지만 기존의 구성보다는 발전된 것 같다. )
- 함수 단위를 조금 더 작게 수정 (render에서 한번에 구성하지 않고 각각 요소에 필요한 렌더 함수로 나눔 )
- 이미지 카드 교체 과정에서 불필요한 반복문 제거. (querySelector로 탐색은 진행되기 때문에 시간복잡도는 비슷하겠지만 코드의 가독성 증가)
- imageCard[n].childNodes.children 등의 코드를 제거하여 html 구조 의존도 감소

## PR 피드백 :

- [x] forEach 등 고차함수 활용 (render-webtoon-weekly.js 에서 webtoonWeeklyWebtoon 태그에 이미지 카드를 만들어서 넣는 과정에서 입력받은 이미지 카드양에 따라 만들어서 넣을 수 있도록 forEach 활용 )
- [x] imageCard[n].childNodes 의 사용 빈도가 5회 이상이어서 imageCardNodes 변수로 저장 -> 사용하는 함수 전부 리팩토링
- [x] class가 추가된다면 className으로 비교할때 버그가 생길 수 있습니다. -> (change-image-card.js 파일 함수 : className 비교가 아니라 그냥 해당 클래스를 가진 요소를 쿼리셀렉터로 바로 선택 )
- [x] 여기 함수는 좀 복잡해보이죠? 작은 함수 여러개를 만들어 보세요 -> (image-box-handler.js의 nextImg, prevImg 함수에서 중복을 추출해 selectContainerBoxRange, imageBoxCntChangeAndTimerReset 두 하위함수를 생성 )
