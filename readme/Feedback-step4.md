# Step4 Feedback

##### 2022.2.26

##### [Feedback page](https://github.com/codesquad-members-2022/fe-kakaopage/pull/146)

---

### 1. package.json

- script에 nodemon이 언급되어 있으니 dependency 혹은 dev dependency에 추가
- 쓰지 않는 모듈은 제거

### 2. Naming

- handler라고 이름지은 객체는 단순히 handler 역할만 하는 게 아닌 add도 해 주는 역할
- 이 object에 무엇이 들어있는지 이름만 봐도 이해하기 좋도록 더 rich한 이름으로 수정
- 대문자로 만든 함수 소문자로 고치기

### 3. spread operator 사용 대신 받아야 하는 인자를 명시

```js
// (1)
function slideBanner(bannerList, direction, bannerCount) {}

// (2)
function slideBanner(...params) {
  const [bannerList, direction, bannerCount] = params;
}
```

- 기존 (2)에서 (1)로 수정
- 함수를 사용하는 입장에서는 파라미터가 무엇인지 잘 알아야 잘 보낼 수 있다.
- 만약 파라미터가 명시되어있지 않으면, 함수를 사용하는 입장에서는 함수의 내부 로직까지 확인해야 하는 불상사가 일어난다.

### 4. server.js의 로그 수정

```js
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
```

- 코드상에서 `express()`의 리턴 값을 app이라고 부르는 것이 일반적이지만, Log를 남길 때는 "서버가 3000포트에 켜졌다" 라고 하므로 기존 app에서 server로 수정해준다.

### 5. 불필요한 추상화 수정

```js
function slideBanner(...params) {
  const [bannerList, direction, bannerCount] = params;

  if (currentIdx > bannerCount) currentIdx = 0;

// Before: controller로 묶은 부분 - 불필요한 추상화
  const controller = {
    prev() {
      ...
    },
    next() {
    ...
    },
  };

  controller[direction]();
}
```

```js
function slideBanner(bannerList, direction, bannerCount) {
  if (currentIdx > bannerCount) currentIdx = 0;

// After: 중첩함수와 삼항 연산자 활용
  function prev() {
   ...
  function next() {
   ...
  }

  direction === 'prev' ? prev() : next();
}
```

- switch 혹은 if문 대신 객체로 감쌌을 때 큰 장점이 없다면 고칠 것.
