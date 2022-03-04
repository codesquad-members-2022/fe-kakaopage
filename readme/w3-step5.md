# FE Mission week3. Kakaopage Clone

##### Feb 28 ~ Mar 4, 2022

##### [🟡 Demo Link](https://millie-kakaopage.herokuapp.com/)

---

## Step 5. API Server

- [ ] Express server에서 JSON 응답하는 방법 이해하기
- [ ] REST API URL 구성 이해하기
- [ ] router 이해하고 활용해보기

---

### 커밋 진행상황

> 기능이 추가된 부분은 없고, 리팩토링 위주로 진행했습니다.

#### 1. Reflect feedbacks

- namse님의 피드백을 반영하여 수정하였습니다.
- [Feedback-step4.md](Feedback-step4.md)에 구체적인 내용을 정리해 보았습니다.

#### 2. Refactor: modify data flow

- render.js 로직에서 웹툰 데이터를 직접적으로 쓰지 않고 인자로 받아서 쓸 수 있도록 수정했습니다.

#### 3. Add: filter webtoons using default route parameter

- default parameter를 활용해서 요일별로 웹툰이 필터링될 수 있도록 로직을 작성해 보았습니다.

#### 4. Refactor: load webtoon data asynchronously

- 기존 util.js에서 데이터를 비동기적으로 불러와 data 변수를 export 하는 대신, eventHandler.js에서 데이터가 필요할 때마다 그에 맞는 데이터를 비동기적으로 불러울 수 있도록 수정하였습니다.
  - util.js에 있던 전역변수 data가 필요없어져 삭제했습니다.
- 데이터를 필터링하는 로직을 server.js에 놓고, 그 외에 있었던 것은 삭제했습니다.

#### 5. Add: utils folder

- 기존에는 util.js 안에 유틸 함수와 하드코딩 방지를 위한 상수들이 섞여 있었는데 이를 분리하고자 utils라는 폴더를 만들고, 그 안에 utils.js와 constants.js를 생성해 각각 분리해 주었습니다.

#### 6. Deploy: using heroku

- heroku를 이용하여 배포하였습니다.
- 서버를 매번 켤 필요가 없어져서 편리해졌습니다.

### 고민

- 지금까지 구현한 로직에서 무엇을 더 해나가면 좋을지 고민이 됩니다. 미션은 어느정도 구현했지만 부족하다는 생각은 드는데, 그게 무엇인지 구체적으로 보이지는 않아서 답답한 느낌도 듭니다.
  - 상태관리가 가능한 컴포넌트를 만드는 식으로 리팩토링을 해 보는 시도는 어떻게 생각하시나요?
  - 혹은 여기서 더 개선하면 좋을 점, 추가하면 좋겠는 점이 있을까요?

---

## 📓 What I Learned / What I have to learn

- [Express로 REST API 구성하기](https://darrengwon.tistory.com/312)
- [Express res.json과 res.send 비교](https://haeguri.github.io/2018/12/30/compare-response-json-send-func/)
- [(nodejs) Express : res.send() res.json() res.end() 비교](https://velog.io/@yunsungyang-omc/nodejs-Express-res.send-res.json-res.end-%EB%B9%84%EA%B5%90)
