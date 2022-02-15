# fe-kakaopage

### 미션 - 카카오페이지 클론-HTML,CSS개발

[0. 미션 계획](#미션-계획)  
[1. 구현 범위](#1-구현-범위)  
[2. 프로그래밍 순서도](#2-프로그래밍-순서도)  
[3. 컴포넌트 나누기](#3-컴포넌트-나누기)  
[4. 콘텐츠 데이터 구조 만들기](#4-콘텐츠-데이터-구조-만들기)  
[5. 커밋 규칙 정하기](#5-커밋-규칙-정하기)  
[6. 스텝으로 나눠서 구현하기](#6-스텝으로-나눠서-구현하기)  
[7. 최종 결과](#7-최종-결과)

<br>

## 미션 계획

1. 구현할 범위 잡기
2. 프로그래밍 순서도 초안 작성
3. 컴포넌트 나누기
4. 콘텐츠 데이터 구조 만들기
5. 커밋 규칙 정하기
6. 스텝별로 나눠서 구현하기

<br>

## 1. 구현 범위

- 카카오페이지의 웹툰, 웹소설 탭

  - 웹툰, 웹소설 내부 카테고리의 모든 탭은 정상적으로 동작
  - '요일' 카테고리가 노출되는 경우 정상적으로 동작
  - 탭UI는 새로운 페이지 이동x, 현재 화면에서 렌더링
  - 슬라이더 VanillaJS로 구현

- 구체적인 구현 범위는 버젼별 구현 내용에 작성 예정

<br>

## 2. 프로그래밍 순서도

- **초안**

<img width="600" src="https://mansaout.github.io/storage/codesquard/fe-kakaopage/flowchart_01.png">

- **최종**

<br>

## 3. 컴포넌트 나누기

### 로드 시 무조건 렌더링 되는 부분

- Header
- GlobalNavigation
- Footer

<img width="600" src="https://mansaout.github.io/storage/codesquard/fe-kakaopage/comp1.jpg">

<br>

### 탭 클릭에 따라 선택적으로 렌더링 되는 부분

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

## 4. 콘텐츠 데이터 구조 만들기

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

## 5. 커밋 규칙 정하기

> **제목 : "태그: 제목" 형태**

- 제목은 변경 사항에 대한 짧은 요약
- 본문은 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명

#### 태그 이름 & 설명

- 기능
  - `Feat`: 새로운 기능을 추가한 경우
  - `Fix`: 버그를 고친 경우
  - `Design`: CSS, SCSS, HTML 등 사용자 UI 변경

<br>

- 개선
  - `Refactor`: 프로덕션 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우
  - `Style`: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
  - `Comment`: 필요한 주석 추가 및 변경

<br>

- 기타
  - `Docs`: README 등 문서를 수정한 경우
  - `Upload`: 이미지 파일 등을 추가할 경우

<br>

#### [참고자료: [협업] 협업을 위한 git 커밋컨벤션 설정하기](https://overcome-the-limits.tistory.com/entry/협업-협업을-위한-기본적인-git-커밋컨벤션-설정하기)

<br>

## 6. 스텝으로 나눠서 구현하기

### **`step1`** : 콘텐츠 데이터 생성, 고정형 컴포넌트 생성

- 사용할 콘텐츠 데이터를 생성한다. data.js
- 항상 고정되있는 컴포넌트를 만든다. Header, Footer, GlobalNavigation
- index.html 로드 시 고정형 컴포넌트 렌더링 -> '홈' 탭 포커스
- GlobalNavigation 을 제대로 동작 시킴 -> 홈, 웹툰, 웹소설 탭 이동 가능하게
  - 탭 별로 내부 콘텐츠는 x

<br>

### **`step2`** : 고정되지 않는 컴포넌트 생성

<br>

### **`step3`** : 웹툰 탭

<br>

### **`step4`** : 웹소설 탭

<br>

### **`step5`** : 홈 탭

<br>

## 7. 최종 결과
