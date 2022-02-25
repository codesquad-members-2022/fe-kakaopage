# Node.js

##### Feb 24, 2022

---

## What is Node.js?

- Node.js는 v8 엔진으로 동작된다.
- JavaScript 코드를 브라우저 이외의 공간에서 실행 가능하게 해 준다. CLI를 통해 실행시킬 수 있다.

### npm

### package.json

### node_modules

### modular programming

- 모듈 방식으로 프로그램을 나누고 이를 통해 복잡한 애플리케이션의 역할을 나눠서 문제를 해결하는 방식
- Node.js에서는 require, exports 사용하여 구현 가능

## What is Express?

### Hello World

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

- 서버를 시작하고 연결을 위해 포트 3000번에서 수신을 대기한다.
- 루트 URL(/)에 대한 요청의 경우 "Hello World!"로 응답한다.
- 그 외 다른 경로에서는 404 Not Found로 응답한다.

### middleware

---

### Reference
