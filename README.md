# fe-kakaopage

## 요구 사항

### 1주차 미션1

#### 헤더

- [x] html 구조 작성
- [x] 헤더의 상단 레이아웃
- [ ] 헤더의 상단 서브 네비게이션 버튼 css
- [ ] 헤더의 하단 네비게이션 레이아웃 및 css
  - [x] 헤더의 하단 네비게이션 각 요소 이미지 삽입
  - [x] 헤더의 하단 네비게이션 레이아웃
  - [ ] 영화, 방송, 책 우측 상단에 노란점을 추가
- [x] 헤더와 main이하가 css로 보았을때 분리되도록 작업
- [x] 스크롤 내려도 헤더가 고정되어서 화면에 보이도록 구현

#### 메인 네비게이션

- [x] 네이게이션 글자, 배경 색상
- [x] 네비게이션 레이아웃

#### 메인 배너

- [x] 배너 이미지 삽입
- [x] 배너 이미지를 크기에 맞게 조정
- [ ] 배너 이미지 상단에 아이콘과 텍스트
  - [x] 배너 이미지 상단에 아이콘과 텍스트가 보이도록 구현
  - [ ] 배너 이미지 상단에 아이콘과 텍스트 css 개선

#### 메인 요일 네비게이션, 필터바

- [x] 요일 네비게이션 레이아웃
- [x] 요일 네비게이션 css
- [x] 필터바 네비게이션 레이아웃
- [ ] 필터바 네비게이션 css

### 메인 홈

- [x] 메인 배너 하단 네비게이션 레이아웃
- [ ] 메인 배너 하단 네비게이션 css
  - [ ] border radius css
- [x] 메인 이벤트 배너 레이아웃
- [x] 메인 이벤트 배너 css
- [x] 요일 연재 TOP 레이아웃
- [x] 요일 연재 TOP css
- [x] 일간 랭킹 TOP 레이아웃
- [ ] 일간 랭킹 TOP css
- [x] 추천 이벤트 레이아웃
- [x] 추천 이벤트 css

#### 메인 웹툰 컨텐츠

- [x] 웹툰 컨텐츠 레이아웃
- [ ] 웹툰 컨텐츠 css
  - [ ] 아이콘 크기 조정

#### 푸터

- [ ] 푸터 레이아웃
- [ ] 푸터 css

### 1주차 미션2

- [ ] 함수로 프로그래밍을한다. 단, 클래스를 사용하지않는다.
- [x] 월요일을 누르면 새로고침 없이 다른 웹툰들을 다시 렌더링 한다.

### 2주차 미션1

- [x] 상단 탭을 누를때마다 해당하는 하위 컨텐츠들이 렌더링된다.
      홈과 요일연재를 번갈아가면서 누르는 경우 탭에 따라 하위 컨텐츠가 렌더링 되다가 아무리 홈을 눌러도 요일연재의 하위 컨텐츠가 렌더링된다.
- [x] 탭을 누를시 새로고침이 발생하지 않는다.
- [ ] 웹툰 요일별 탭 선택이 가능하도록 구현한다.
  - [x] 월요일을 누르면 새로고침 없이 다른 웹툰들을 다시 렌더링 한다.
- [ ] 서버를 띄워 클라이언트측 컨텐츠가 보이도록 한다.

#### 2주차 미션2

- [ ] 데모버전의 클릭하여 넘어가는 캐러셀을 구현한다.
  - [x] 간단한 동작을 구현한다.
  - [ ] 마지막 이미지에서 다음 이미지 넘어가는 경우 하나의 이미지만 지나친다.
  - [ ] 연속해서 클릭하여도 하나의 이미지씩만 넘어간다.
- [x] 데모버전의 자동으로 넘어가는 캐러셀을 구현한다.
- [ ] 구현한 카카오페이지에 캐러셀 적용한다.
  - [ ] 캐러셀의 사진이 다음/이전으로 넘어간다.
  - [ ] 캐러셀의 사진 위의 글자나 아이콘등이 사진과 함꼐 다음/이전으로 넘어간다.

## 진행상황

### 1주차 미션1

#### 홈 탭

https://user-images.githubusercontent.com/58525009/154987681-1fde9280-4e99-4ef4-b712-370c694c680d.mp4

#### 요일연재 탭

https://user-images.githubusercontent.com/58525009/154492255-c6fc51cf-94ff-49c7-8d7e-658707118929.mp4

### 1주차 미션2

#### 요일연재 탭

https://user-images.githubusercontent.com/58525009/154607701-f3e10833-b4df-4396-b12e-53c1d3712910.mp4

#### 고민한 사항

- section, article 태그 사용 시점
  section, aritcle 태그 사용 시점을 고민하였습니다. 컨텐츠의 종류가 바뀌는 것을 section으로 나누고 section내부에서 여러 요소를 article로 하였습니다. article에는 제목(h1태그)이 포함되도록 하였습니다.

- 클래스명
  클래스명 짓는것이 어려웠습니다.

### 2주차 미션1

#### 홈, 요일연재 탭 동적기능 개발

- 시도 1

https://user-images.githubusercontent.com/58525009/155128798-c0ebcaae-3b5e-4a62-af13-786a1737def5.mp4

홈과 요일연재를 번갈아가면서 누르는 경우 탭에 따라 하위 컨텐츠가 렌더링 되다가 아무리 홈을 눌러도 요일연재의 하위 컨텐츠가 렌더링됩니다.

팀원들에게 공유하여 콜라에게 이벤트 위임한 태그(ul)의 하위 태그(li)가 아니면 return 하라고 조언을 얻었지만 이 경우는 li가 아닌 ul을 누를경우 처리를 해주는것입니다. 현재 문제 상황은 웹툰 탭을 누르는 과정에서 기존의 html의 홈의 하위 컨텐츠의 elements들을 변수에 저장해 둔것이 바뀌는 것입니다. 따라서 문제 상황에 적용하여 해결할 수 없다고 판단하여 다른 방식을 고민하고있습니다.

- 시도2

https://user-images.githubusercontent.com/58525009/155669491-67536be4-6409-4844-ba12-4b768bfeec3e.mp4

#### 구조

header와 상단 배너 이미지, 추천이벤트 이하는 모든 탭에서 공통입니다. 그래서 이 부분을 제외한 부분을 div태그로 하나의 컨테이너 역할을 하게 하여 이 컨테이너 하위에 자식 DOM을 추가 및 삭제하여 탭에 따라서 해당 하위 컨텐츠가 보이도록 구현하였습니다.

#### 해결과정에서 고민한 사항

cloneNode를 할 경우 얕은 복사가 아닌 깊은 복사임을 알 수 있었습니다. 깊은 복사이기 때문에 복사 이전에 부모노드와의 부모 자식관계도 사라지고 dom 구조상 부모 내부의 형제 뒤에 insertAdjacentHTML을 하여도 부모 자식 관계가 형성이 안되었습니다. 부모 자식 관계가 형성될 줄 알고 코드를 짜고 당연하게 그럴줄 생각하여서 이 부분을 발견하느라 헤맸습니다.
DOM api중에서 html 리터럴 템플릿을 활용하는것은 없을까 궁금하여 찾아보니 insertAdjacentHTML이 있음을 확인하였습니다. 다만 제거나 교체 관련한 api는 찾지 못하였습니다.

### 2주차 미션2

#### 캐러셀 - carouselPractice.html

https://user-images.githubusercontent.com/58525009/155253730-7f89f0ff-f2ae-491d-abf2-c2373d9cb6c1.mp4

- 연속 클릭시 실제 카카오페이지 화면

https://user-images.githubusercontent.com/58525009/155254187-0a9db121-536b-4f6d-b4d1-14babb2c3d6a.mp4

- 연속 클릭시 구현한 캐러셀의 화면

https://user-images.githubusercontent.com/58525009/155254220-1b80cdd2-d61b-416a-a534-6fc4c75deeda.mp4

- 문제점 : 연속 클릭시 각 이미지가 하나씩 넘겨지는게 아니라 빠르게 여러 이미지가 지나갑니다.

- 해결책 : 쓰로틀을 적용하고자 합니다.

#### 무한 슬라이드 (미완성)

https://user-images.githubusercontent.com/58525009/155653111-d6820f80-7d73-48c2-b90f-00213c246d96.mp4

##### 구조

![image](https://user-images.githubusercontent.com/58525009/155673866-4bc157c4-2171-42f4-876d-3b55824bdf0d.png)

무한으로 보이기 위한 핵심요소는 transition효과 유무라고 생각하였습니다. 물론 5번 이미지에 1번 이미지를, 그 다음에는 2번 이미지 등을 DOM에 다시 삽입할 수 있겠지만 효율성 때문에 DOM조작은 최소화 하고자 하였습니다. 5번 이미지까지 보이게 되면 맨 앞으로 이동하는데 이때 tranistion효과를 없애주고 바로 다음 1번 이미지를 transition효과를 주어 보여주고자 하였습니다.

##### 고민 중인 사항

5번 이미지에서 클릭을 몇번해야 1번 이미지를 볼 수 있는 상황입니다.

#### 자동 슬라이드

https://user-images.githubusercontent.com/58525009/155653166-96ed9c93-983a-440f-a60f-9bc1498376a8.mp4

처음에 requestAnimationFrame를 시도했지만 오류를 해결하지 못하여 setTimeout으로 구현해보았습니다. 리뷰하면서 muffin이 figure라는 태그를 소개해주었습니다. 찾아보니 시맨틱한 마크업 사용을 위하여 img태그를 figure로 감싸고 figure내에 figcaption으로 컨텐츠에 대한 설명을 작성할 수 있음을 알았습니다.

### 3주차 미션

#### 설계

1. server, client로 폴더 나누기
2. 서버에서 정적 파일 직접 제공하는것(app.use(express.static('folder'));)에서 get 요청에 따라 json파일만 보내주고 frontend 폴더에서 받은 데이터를 이용하여 렌더하는 방식으로 변경
3. fetch할 대상 고민

![image](https://user-images.githubusercontent.com/58525009/156026527-f13e4ae9-df0f-4ca5-aa91-976d53e19145.png)

헤더의 nav바는 nav에 해당하는 데이터들이 바뀌기 때문에 서버로부터 정보를 얻어와야한다고 생각하였다.

![image](https://user-images.githubusercontent.com/58525009/156026327-2827953d-1b5d-4aa1-b705-642daa7b9ae4.png)

하지만 웹툰>요일연재 하위의 요일별 nav는 실시간으로 자주 바뀌는 정보도 아니고 대량의 데이터도 아니기 때문에 헤더의 nav바에서 받은 데이터 중 일부를 요일별로 클릭할때마다 클라이언트 단에서 보여주어야한다고 생각하였다. 즉, 이 단계에서는 서버로부터 요청을 하지않게 하여 서버로 부터의 요청을 최소화한다.

#### 고민할 점

templating을 서버와 클라이언트 중에서 어디서 하는게 효율적일까? 각각의 장단점은 무엇일까?

get할때 url을 'home/toon', 'home/week'인 경우에 get을 다 만들지 않고 한꺼번에 할 수 있을까?

url 설계

![image](https://user-images.githubusercontent.com/58525009/156026387-12bb2fe0-66a9-45f8-bdad-88a94dc12461.png)

계층구조로 홈은 header/category/1 과 같이 표현하는것이 어떤가 생각해보았다. 여기서 실제 페이지의 URL에서 ‘?&=’와 같은 것들은 언제 사용할지 고민해보아야겠다.

#### 학습정리

##### 비동기 코드 분석

```jsx
function one() {
  console.log("one");
}

function two() {
  console.log("two");
}

setTimeout(one, 0);

two();
```

###### 처음 생각

실행 순서 : two, one

동기로 일단 setTimeout two순서로 실행되는데 one은 비동기 콜백이어서 브라우저에서 등록된 콜백함수가 태스크큐에서 있다가 two가 콜스택에서 비워지는것을 이벤트 루프가 확인하고 실행된다.

###### 학습 후 정리

1. setTimeout 함수가 호출된다. setTimeout함수는 실행 컨텍스트가 생성되고 콜 스택에 푸쉬되어 현재 실행중인 실행 컨텍스트가 된다.
2. setTimeout 함수가 실행되면 콜백 함수가 호출 스케줄링 되어서 브라우저의 관리로 setTimeout 타이머가 예약되고 setTimeout은콜백함수에서 팝된다.
3. 브러우저의 관리하에 setTimeout의 지연 시간 이후에 콜백 큐(혹은 태스크 큐)에 콜백함수가 푸쉬된다. 코드에서 지연시간을 0으로 설정되었지만 최소 지연 시간 4ms이 적용된다.
4. 이벤트 루프가 콜스택이 비어있는지 확인하고 비어있다면 콜백 큐에 대기하는 콜백함수를 콜 스택에 올린다.
5. 콜백함수가 종료되면 콜 스택에서 팝된다.

###### 학습 후 알게된 사실

- 최소 지연 시간 4ms

지연시간(setTimeout의 2번째 파라미터)을 4ms이하로 설정하는 경우 최소 지연 시간으로 4ms가 지정된다. 콜 스택이 아직 비어있지 않다면 콜백함수가 태스크 큐(콜백 큐)에 대기하다가 콜 스택이 비어야 호출되므로 실제 대기시간은 더 늘어날 수 있다.

- 왜 최소 지연 시간을 설정하고 왜 하필 4ms일까?

궁금증이 생겼었는데 마침 리뷰시간에 최소 지연시간을 설명한 후에 다른 팀원이 질문을 하였다. 처음에는 막연하게 브라우저에게 부담이 되는것인지, 아니면 타이머라는것 자체가 0을 부여하는게 의미가 없어서 인지 라는 이유들을 생각해보았다. 의문점을 가졌지만 답을 찾은것은 아니라 팀원들이 함께 고민하고 찾아보았다.

0ms를 허용하지 않은 이유는 이벤트루프를 과도하게 반복되면 javascript 엔진이 이벤트 루프를 차단한다. 4ms인 이유는 대부분의 컴퓨터 CPU에서 과도한 CPU회전, 전력소비가 일어나지 않기 때문이다.

참고

- 책 자바스크립트 딥다이브 42단원 비동기 프로그래밍
- [Why does setTimeout have a minimum delay of 4ms?](https://www.mo4tech.com/why-does-settimeout-have-a-minimum-delay-of-4ms.html)

##### REST API란?

http프로토콜에 맞지 않게 디자인하여서 REST API등장하게 되었다. uri, 메소드, data를 함께 보내는데 해당 uri에 data를 메소드의 행위대로 처리하는것이다. get과 delete는 추가하거나 삭제하는것이기 때문에 data를 따로 보내지 않아도 된다.

##### uri와 url의 차이는?

uri는 네트워크상 자원을 말하고, url은 네트워크상 자원이 어디 있는지 구체적인 위치를 말한다.

##### put vs patch

```jsx
student {

name,

score

}
```

put은 student전체를 고치는 개념이다.

put은 student.name만 고치는 개념이다.

## 추후 할 일

- [ ] 웹툰 컨텐츠를 grid가 아닌 flex로 구현해보기
- [x] 미션2를 진행하면서 웹툰 레이아웃이 깨져서 다시 수정하기

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
