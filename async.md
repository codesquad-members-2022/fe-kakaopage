# callback, promise

## callback

- 단점

1. 가독성이 나쁘다.
   : 이러한 방식의 가장 대표적인 단점은 콜백지옥이 발생할 수 있다.
   ```js
   requestLogin('/login', (response) => {
     getUserData('/users', response, (userData) => {
       getTodoList('/todos', userData, (todoList) => {
         console.log(todoList);
       });
     });
   });
   ```
   - 로그인 요청을 하고, 응답값을 기반으로 유저의 정보를 요청하고, 받아온 유저 정보를 기반으로 todoList 받아온 후에, console에 찍는 로직이 있다.
     : 이렇게 다음, 다음, 다음의 로직을 계속 콜백으로 넘겨주면서 점점 깊어지는 현상을 콜백지옥이라 부른다. 아주 단순하게 예시를 들었지만 실제로 코드가 복잡해지면 가독성이 떨어진다.
2. 에러 핸들링
   : 위와 같이 에러 핸들링을 위해 try catch를 사용할 때 콜백 함수에서 발생한 에러가 catch되지 않는다는 문제가 있다.
   : try catch는 자신이 속한 컨텍스트에서 발생하는 에러만 감지할 수 있기 때문이다. 콜백 함수는 현재 컨텍스트가 아닌 다른 곳에서 실행되기 때문에 콜백 함수가 실행되는 시점은 이미 try catch 구문이 끝난 후가 된다.
   : 이 문제를 해결하려면 모든 비동기 처리 함수, 위의 예시에서 requestLogin, getUserData, getTodoList 함수가 각자의 try catch를 가져야한다.
3. 비동기 처리 결과를 외부에 반환/할당 할 수 없다.

   ```js
   const response = requestLogin('/login');
   console.log(response); // undefined
   const globalObject = {};
   function requestLogin(url) {
     globalObject.response = requestLogin;
   }
   console.log(globalObject.response); // undefined
   ```

   - 콜백 지옥은 좋아서 생기는게 아니라 구조상 어쩔 수 없이 생긴다. 비동기 처리 결과를 전역 객체에 저장을 하든, 결과값을 return하든 이미 그 시점에서 외부 소스 코드는 실행을 마친 후이다.
     : 콜백 지옥을 만들면서 안으로 들어가지 않는 이상, 비동기 처리 결과를 비동기 함수 외부로 전달하는 방법은 없다. 이 문제는 이후에 설명할 Promise에서도 해결되지 못 했고, 더 이후에 ES7에 등장한 async/await를 통해 해결되었다.

## promise

![1](https://user-images.githubusercontent.com/93566353/156519357-02b53860-39b0-4160-bdb8-ac9a0a04d50a.png)

: 콜백 패턴의 여러 문제를 해결하기 위해서 ES6에 Promise가 등장했다.

1. 콜백 지옥 해결

   ```js
   new Promise((resolve) => {
     resolve(requestLogin('/login'));
   })
     .then((response) => getUserData('/users', response))
     .then((userData) => getTodoList('/todos', userData))
     .then((todoList) => {
       console.log(todoList);
     });
   ```

   - 위의 예시를 Promise 패턴으로 변경하면 위와 같다. then 메소드는 전달받은 콜백 함수를 처리한 후 새로운 Promise 객체를 반환하고, 그 Promise 객체가 다시 then 메소드를 사용 하는 방식으로 후속처리를 이어간다. 이렇게 depth를 유지하기 콜백 패턴보다 가독성이 좋다.

2. 에러 핸들링
   : Promise에서 에러를 핸들링하는 방법은 크게 두 가지가 있는데, 첫 번째는 then 메소드의 두 번째 인자에 에러 핸들링 함수를 전달하는 것이고, 두 번째는 catch 메소드를 사용하는 것이다.

   ```js
   new Promise((resolve) => {
     resolve(requestLogin('/login'));
   }).then(
     (response) => getUserData('/users', response),
     (e) => {
       console.log(e);
     }
   );
   ```

- 첫 번째 방법은 Promise 객체 상태가 rejected 되면 해당 에러 헨들러를 호출하는 방식이다. 각각의 상황에 맞는 핸들러를 구분해서 등록할 수 있다는 장점이 있지만, then 메소드의 첫 번째 인자 콜백에서 발생하는 에러는 catch할 수 없다는 문제점이 있다.
  : 이 경우 requestLogin 함수에서 에러가 발생한다면 then의 두번째 인자 콜백 함수가 호출되어 에러처리를 할 수 있고, 프로그램이 죽지 않을 것이다.
  : 하지만 getUserData를 실행하다가 발생하는 에러는 catch할 수 없기에 에러가 '갇혀버린다.' 따라서 자바스크립트 엔진은 전역에러를 발생시켜 프로그램이 죽어버린다.

```js
new Promise((resolve) => {
  resolve(requestLogin('/login'));
})
  .then((response) => getUserData('/users', response))
  .then((userData) => getTodoList('/todos', userData))
  .catch((e) => {
    console.log(e);
  })
  .then(() => {});
```

: 따라서 catch 메소드를 사용하는게 더 일반적이고, 권장되는 방식이다. Promise와 then에서 에러가 발생하면 Promise의 상태가 rejected가 되고 제어 흐름이 가장 가까운 에러 헨들러(catch 메소드의 콜백함수) 로 넘어간다.

- catch 메소드에서 에러를 정상적으로 처리하면 다시 then으로 흐름을 이어갈 수 있다. 물론 이 경우에도 다시 에러가 발생할 수 있기 때문에, 가장 마지막에는 항상 catch 메소드를 사용함으로써 프로그램이 죽는 일을 방지할 수 있다
- 하지만 catch와 then을 번갈아가며 사용하기보다 마지막에만 catch 메소드를 사용하는게 일반적인데, 이 경우 모든 에러 처리를 하나의 메소드에서 처리하는 형태가 되기 때문에 코드가 중복되거나 복잡해질 수 있다.

## Blocking I/O , Non-Blocking I/0

![1](https://user-images.githubusercontent.com/93566353/156520567-56aa6271-a81e-4a1a-ad43-d0a343db9c1b.png)

Blocking
: 호출된 함수가 자신이 할 일을 모두 마칠 때까지 제어권을 계속 가지고서 호출한 함수에게 바로 돌려주지 않는 것

Non-Blocking
: 호출된 함수가 자신이 할 일을 채 마치지 않았더라도 바로 제어권을 건네주어(return) 호출한 함수가 다른 일을 진행할 수 있도록 해주는 것

본격 Case Study : 대표님, 개발자 좀 더 뽑아주세요..

```
Blocking & Synchronous
나 : 대표님, 개발자 좀 더 뽑아주세요..

대표님 : 오케이, 잠깐만 거기 계세요!

나 : …?!!

대표님 : (채용 공고 등록.. 지원자 연락.. 면접 진행.. 연봉 협상..)

나 : (과정 지켜봄.. 궁금함.. 어차피 내 일 하러는 못 가고 계속 서 있음)
```

```
Blocking & Asynchronous
나 : 대표님, 개발자 좀 더 뽑아주세요..

대표님 : 오케이, 잠깐만 거기 계세요!

나 : …?!!

대표님 : (채용 공고 등록.. 지원자 연락.. 면접 진행.. 연봉 협상..)

나 : (안 궁금함.. 지나가는 말로 여쭈었는데 붙잡혀버림.. 딴 생각.. 못 가고 계속 서 있음)
```

```
Non-blocking & Synchronous
나 : 대표님, 개발자 좀 더 뽑아주세요..

대표님 : 알겠습니다. 가서 볼 일 보세요.

나 : 넵!

대표님 : (채용 공고 등록.. 지원자 연락.. 면접 진행.. 연봉 협상..)

나 : 채용하셨나요?

대표님 : 아직요.

나 : 채용하셨나요?

대표님 : 아직요.

나 : 채용하셨나요?

대표님 : 아직요~!!!!!!
```

```
Non-blocking & Asynchronous
나 : 대표님, 개발자 좀 더 뽑아주세요..

대표님 : 알겠습니다. 가서 볼 일 보세요.

나 : 넵!

대표님 : (채용 공고 등록.. 지원자 연락.. 면접 진행.. 연봉 협상..)

나 : (열일중..)

대표님 : 한 분 모시기로 했습니다~!

나 : 😍
```
