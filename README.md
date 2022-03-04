# FE Mission week3. Kakaopage Clone

##### Feb 28 ~ Mar 4, 2022

##### [🟡 Demo Link](https://millie-kakaopage.herokuapp.com/)

---

## Step 6

#### 1. 폴더 구조 개편

- js 폴더에서 index.js 파일을 제외하고 나머지 파일은 노출되지 않도록 폴더를 만들었습니다.
- slider만을 위한 로직을 담은 파일인 slider.js는 feature라는 폴더에 저장되도록 했는데 더 나은 방법이 있을까요?

#### 2. `Promise.all` 활용 연습

- Promise의 정적 메서드 중 하나인 `all`을 활용해 보고 싶어서, json 파일을 하나 더 생성하여 실습해 보았습니다.

```js
const getAllData = urls => {
  const requests = Object.values(urls).map(url =>
    fetch(url).then(responses => responses.json())
  );
  return Promise.all(requests);
};
```

- fetch로 url을 Promise로 매핑하고, json으로 변환합니다. 이 배열을 Promise.all로 감싸줍니다.
- 모든 데이터를 가져온다는 의미로 이름을 `getAllData`라고 했는데 괜찮은 네이밍일까요?

#### 3. 기존 `loadData` 함수 리팩토링

```js
// Before
const loadData = async url => {
  const response = await fetch(url);
  const json = await response.json();
  const data = await json;
  return data;
};

// After
const loadData = async (url, path = '') => {
  const response = await fetch(`${url}${path}`);
  return response.json();
};
```

- path를 전달하여 구체적인 경로로 지정했을 때도 fetch할 수 있도록 수정해 보았습니다.
- 곧바로 response를 json으로 변환한 후의 Promise를 리턴하게 했습니다.

#### 4. `reduce` 활용 연습

- 반복되는 list item을 생산할 때 `forEach` 대신 `reduce`를 활용해 보고 싶어서 category.json을 추가한 김에 이 부분도 연습해 보았습니다.

---

## 📓 What I Learned / What I have to learn

- [(nodejs) Express : res.send() res.json() res.end() 비교](https://velog.io/@yunsungyang-omc/nodejs-Express-res.send-res.json-res.end-%EB%B9%84%EA%B5%90)
- [JS info | Promise API](https://ko.javascript.info/promise-api)
