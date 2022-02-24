# fe-kakaopage

### 2주차 - 금요일PR

### 🧐 어떤 생각으로?

- `front` - `back` 폴더 구조 나누었던 것을 back 폴더를 따로 Repository 를 둬서 API 서버처럼 활용하고자 하였음
  - <a href="https://github.com/healtheloper/fe-kakaopage-back" target="_blank">fe-kakaopage-back</a>
  - heroku 를 사용해서 간이 api 서버를 만들었다.

### 🥲 아쉬웠던 || 어려웠던 점?

### 👍 잘했던 || 좋았던점

### 🧑‍💻 알아볼점

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
