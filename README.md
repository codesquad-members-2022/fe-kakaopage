# fe-kakaopage

### 2주차 - 금요일PR

### 🧐 어떤 생각으로?

- `front` - `back` 폴더 구조 나누었던 것을 back 폴더를 따로 Repository 를 둬서 API 서버처럼 활용하고자 하였음
  - <a href="https://github.com/healtheloper/fe-kakaopage-back" target="_blank">fe-kakaopage-back</a>
  - heroku 를 사용해서 간이 api 서버를 만들었다.

### 🥲 아쉬웠던 || 어려웠던 점?

### 👍 잘했던 || 좋았던점

### 🧑‍💻 알아볼점

### PR 리뷰로 개선한 점

1. getJson 함수

<img width="534" alt="스크린샷 2022-02-24 오후 8 24 17" src="https://user-images.githubusercontent.com/58503584/155515299-1e37b9a5-b644-4631-85a3-fee34724e852.png">

```js
// Before
const getJson = (dataName) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${HEROKU_SERVER_URL}${dataName}`)
        .then((response) => response.json())
        .then((json) => resolve(json));
    } catch (error) {
      reject(error);
    }
  });
};
```

- async 로 함수를 선언하면 Promise 를 반환한다는 점을 사용하지 않았다.

```js
// After
const getJson = async (dataName) => {
  try {
    const response = await fetch(`${HEROKU_SERVER_URL}${dataName}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
```

2. `getJson` 으로 데이터를 불러오는 과정 - 병렬처리

크롱이 피드백을 주신 부분에 대한 내용이다.
<img width="651" alt="스크린샷 2022-02-24 오후 4 49 20" src="https://user-images.githubusercontent.com/58503584/155480982-9b44500e-2eab-40b4-84f7-9ce3c17c393f.png">

실제로 내 페이지를 처음 로드하면 아래와같이 Waterfall 이 순차적으로 이루어지는 것을 볼 수 있었다.

<img width="1122" alt="스크린샷 2022-02-24 오후 4 51 22" src="https://user-images.githubusercontent.com/58503584/155481303-b6aa5659-30d1-418e-9388-6519707d9d92.png">

- 위 데이터를 순차적으로 받아와야 하는지? -> 아니다.
- 그렇다면 어떻게 병렬처리를 할 수 있을지?
  - Promise.all
  - 도리가 공유해주신 사이트의 방법

```js
// Before
const { results: categories } = await getJson("categories");
const { results: genres } = await getJson("genres");
const { results: webtoons } = await getJson("webtoons");
```

<img width="936" alt="스크린샷 2022-02-24 오후 7 59 27" src="https://user-images.githubusercontent.com/58503584/155511838-0f52236a-6810-4ea0-8329-20029631dd2e.png">

기존에 사용하던 코드는 await await await 이기 때문에 Waterfall 이 순차적으로 이루어지고 최종적으로 응답된 시간이 `709ms` 인것을 볼 수 있었다.

```js
// After
const paths = ["categories", "genres", "webtoons"];
const [{ results: categories }, { results: genres }, { results: webtoons }] =
  await Promise.all(paths.map((path) => getJson(path)));
```

<img width="936" alt="스크린샷 2022-02-24 오후 7 56 05" src="https://user-images.githubusercontent.com/58503584/155511318-488f5f8c-2ec9-43c2-a8f2-942732da3abb.png">

- Waterfall 이 병렬적으로 이루어지고 있고, `453ms` 로 Finish 되었다.

3. utility - 선택한 Target node 의 selected 클래스 추가

<img width="527" alt="스크린샷 2022-02-24 오후 8 37 58" src="https://user-images.githubusercontent.com/58503584/155517146-8c056c67-0260-4e57-b8f8-bf28643f2729.png">

```js
// Before
const updateSelectedNode = (nodeList, target) => {
  [...nodeList.children].forEach((node) => {
    node.classList.remove("selected");
  });
  target.classList.add("selected");
};
```

- utility 함수니까 좀 더 범용적으로 쓰이면 좋겠다는 피드백이 있었다.
- 생각해보니 클래스명을 selected 뿐만 아니라 다른 클래스명을 추가/삭제하는 경우도 있을 것 같아 클래스명을 인수로 받아 좀 더 범용적으로 쓰이게 했다.
- 또한 nodeList 는 target 의 부모를 받는 경우가 대부분일 것으로 생각이 들어 nodeList 인자는 삭제하고 target 의 parentNode 를 찾아 쓰도록 변경했다.

```js
// After
const updateNodeClasses = (target, className) => {
  [...target.parentNode.children].forEach((node) => {
    node.classList.remove(className);
  });
  target.classList.add(className);
};
```

### ❗️문제발생 then 해결한 방법

1. heroku 를 사용해서 서버를 만드니 CORS 문제가 발생하였다.

- CORS 해결을 위한 Response 의 헤더설정을 Back 서버쪽에서 해주었다.
- 모든 Router 마다 헤더를 달아주는건 비효율적이라고 생각이 들어서 찾아보니 미들웨어를 활용하면 되겠다는 생각을 해서 CORS 헤더설정을 위해 미들웨어로 사용할 함수를 작성했다.
- 다양한 origin 에서 사용하지만, 모든 곳(\*)에서 사용하게 하고싶진 않아서 아래와 같은 방법을 사용했다.

```js
app.use((req, res, next) => {
  const origins = [
    "http://localhost:3030",
    "http://127.0.0.1:5500",
    "https://codesquard-fe-park.github.io",
  ];
  if (origins.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }
  next();
});
```
