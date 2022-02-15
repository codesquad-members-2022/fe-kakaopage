# fe-kakaopage

### 미션 - 카카오페이지 클론-HTML,CSS개발

<br>

[0. 미션 계획](#미션-계획)  
[1. 구현 범위](#1-구현-범위)  
[2. 프로그래밍 순서도](#2-프로그래밍-순서도)  
[3. 컴포넌트 나누기](#3-컴포넌트-나누기)  
[4. 콘텐츠 데이터 구조 만들기](#4-콘텐츠-데이터-구조-만들기)  
[5. 스텝으로 나눠서 구현하기](#5-스텝으로-나눠서-구현하기)  
[6. 최종 결과]()

<br>

### 미션 계획

1. 구현할 범위 잡기
2. 프로그래밍 순서도 초안 작성
3. 컴포넌트 나누기
4. 콘텐츠 데이터 구조 만들기
5. 스텝별로 나눠서 구현하기

<br>

### 1. 구현 범위

- 카카오페이지의 웹툰, 웹소설 탭

  - 웹툰, 웹소설 내부 카테고리의 모든 탭은 정상적으로 동작
  - '요일' 카테고리가 노출되는 경우 정상적으로 동작
  - 탭UI는 새로운 페이지 이동x, 현재 화면에서 렌더링
  - 슬라이더 VanillaJS로 구현

- 구체적인 구현 범위는 버젼별 구현 내용에 작성 예정

<br>

### 2. 프로그래밍 순서도

- **초안**

<img width="600" src="https://mansaout.github.io/storage/codesquard/fe-kakaopage/flowchart_01.png">

- **최종**

<br>

### 3. 컴포넌트 나누기

#### 로드 시 무조건 그러야하는 부분

- Header
- GlobalNavigation
- Footer

<img width="600" src="https://mansaout.github.io/storage/codesquard/fe-kakaopage/comp1.jpg">

<br>

#### 탭 클릭에 따라 변하는 부분

- SubNavigation
- GridMenu
- MainBanner
- PromotionBanner
- SectionBasic
- SectionWeek
- ItemCardScore
- ItemCardRank
- ItemRow
- ItemRowRank

<img width="600" src="https://mansaout.github.io/storage/codesquard/fe-kakaopage/comp2.jpg">

<br>

### 4. 콘텐츠 데이터 구조 만들기

- 화면에 그릴 콘텐츠 데이터

```js
const Item = {
  id: 'a0001', // id
  title: '플랜터스의 정원', // 제목
  caption: '저는 당신이 마음에 들었어요!', // 캡션
  type: '웹툰', // 콘텐츠 종류: 웹소설 or 웹툰
  category: '드라마', // 카테고리: 소년, 드라마, 로맨스, 로판, 액션무협, BL, 판타지, 현판, 무협, 판드, 단행본
  day: 5, // 연재 요일: 0, 1, 2, 3, 4, 5, 6
  author: '김현식', // 작가
  score: 7.5, // 별점: 0.0~10.0
  views: 3.5, // 조회수(만 명)
  age: 'all', // 연령: all, 15
  new: true, // 신규 여부: true, false
  up: true, // 업데이트 여부: true, false
  crown: true, // 왕관 여부: true, false
};
```

<br>

### 5. 스텝으로 나눠서 구현하기

#### **`step1`** : 콘텐츠 데이터 생성, 고정형 컴포넌트 생성

- 사용할 콘텐츠 데이터를 생성한다. data.js
- 항상 고정되있는 컴포넌트를 만든다. Header, Footer, GlobalNavigation
- index.html 로드 시 고정형 컴포넌트 렌더링 -> '홈' 탭 포커스
- GlobalNavigation 을 제대로 동작 시킴 -> 홈, 웹툰, 웹소설 탭 이동 가능하게
  - 탭 별로 내부 콘텐츠는 x

<br>

#### **`step2`** : 고정되지 않는 컴포넌트 생성

<br>

#### **`step3`** : 웹툰 탭

<br>

#### **`step4`** : 웹소설 탭

<br>

#### **`step5`** : 홈 탭

<br>

### 6. 최종 결과
