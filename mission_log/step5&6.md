
### Express 를 통한 API server 

#### 구현 check list

- [x] 클라이언트 정적인 자원요청(html,js,css,image)에 응답할 수 있는 서버 구성
- [x] 구현중인 기능에 대해서 모든 데이터 요청을 서버로부터 JSON형태로 받아서 처리하도록 한다.
    - [x] URL 라우팅을 통해서 request 를 분석한다
    - [x] JSON 데이터 응답 방법
        - json데이터를 파일로 저장후 export한다. 필요한 곳에서 require 로 가져온다.
        - 실제 DB를 통해서 얻어오지 않는다.
        - json파일이 저장된 파일을 직접 read 하지 않는다.
    - [ ] URL 구조 : REST API 구조를 따르려고 노력한다.
          

#### 구현과정

1. express 설치 및 Start
    - `npm install express --save` 설치
    - ES6 import 방식을 사용함. `import express from "express"`
    - express 함수의 반환값을 변수로 선언하면서 서버 관련 응답,요청 메소드를 사용할 수 있다.
        - `app = express()`
        
2. 포트 지정, get 요청하여 html 띄우기.
    - `app.listen` 으로 특정 port 와 express 서버를 연결한다. 
    - `app.get` : GET request 
        - 첫 번째 파라미터는 URL 정의 (‘/’) 
        - 두 번째 파라미터는 해당 url에서 수행할 작업 및 응답을 정의하는 콜백 함수
        - 요청에 해당하는 req (request)와 응답에 해당하는 res (response)
        - 요청에 대한 정보는 req에 저장되어있고, 응답할 때 res 파라미터를 사용하여 응답 정보를 송신
    _ 브라우저에서 localhost:3000 + 'path' (또는 127.0.0.1:3000 + 'path') 입력 시 로컬의 3000 포트로 get 요청
    - 이 때 `app.get` 의 콜백함수 중 response 로 요청에 대한 응답을 줄 수 있다.
    - 해당 path에 있는 html 파일을 보낸다. 
        - `res.sendFile(path.join(__dirname, '..', "/index.html"))`
    - 이 때 경로를 알기 위해 __dirname (file 명을 제외한 절대 경로) 를 일반적으로 사용하는데, es6 module 을 사용하는 경우 별도로 path 모듈을 사용해야 한다.
        - `import path from 'path'`
        - `const __dirname = path.resolve();`
    - [path module 참고 - 링크](https://p-iknow.netlify.app/node-js/path-moudle/)
    
3. Static 파일 설정
    - Static 파일들은 클라이언트에서 동작하는 자바스크립트나 css, html과 같은 리소스 파일들을 지칭한다.
    - 일반적으로 아래와 같이 static 파일을 가져올 폴더를 지정해준다. (public : 폴더이름)
        - `app.use(express.static('public'))`
        - 이제 html 에서 public 폴더를 기준으로 한 경로에서 css, js 등을 가져올 수 있다.
    - 위의 방법은 소스파일이 위치한 경로를 기준으로 하기 때문에 사용자가 원하는 경로에 static파일을 지정해주고 싶을 수도 있다.
    - 나의 경우 express.js 는 js 폴더 하위에 있어 css 나 imgaes 폴더에 접근하기 위해서는 static 폴더를 더 상위 폴더인 fe-kakaopage 로 해야했다.
        - `app.use(express.static(path.join(__dirname, '..', '..', 'fe-kakaopage')))`
        - 위의 path.join 경로를 console.log 하면 /Users/juyoungoh/WebstormProjects/bangtae/CodeSquad_Masters_FE/mission/fe-kakaopage 이다.
    - 이제 index.html 의 ref 경로를 수정해준다.
        - 변경 전 index.html 현재 위치 기준 상대경로 `<link rel="stylesheet" href="./css/reset.css">`
        - 변경 후 static 폴더 기준 경로 `<link rel="stylesheet" href="/css/reset.css">`
    - express.js 실행하니 이미지 및 tab 기능 동작함.
    - 처음에는 sliding 이 동작하지 않았는데 시간이 지나서 새로고침하니까 동작함.
    
4. URL 라우팅
    - 특정 URL 경로로 요청이 왔을 경우, JSON 형태의 데이터를 줄 수 있도록 구현한다.
    - 어떤 경로로 왔을 때 어떤 데이터를 줄 것 인지. => REST API... 지금은 크게 신경쓰지 말자.
    - 리뷰를 하면서 깨달은 점
        - 특정 URL 로 라우팅을 하는 경우 데이터를 보냄과 동시에 페이지 렌더링을 해줘야 한다고 생각했는데 아니었다.
        - API 를 보낸다는 건 그 경로로 json 을 주는 것 그 자체인 듯 하다.
        
5. fetch 사용하여 api 요청 
    - fetch 를 사용하여 라우팅을 한 경로에서 JSON 형식 데이터를 받는다.
    - 우선 홈, 요일연재, 웹툰 탭 클릭 시 발생하는 dailyNav 및 dailyContents 영역 렌더링을 Fetch 로 데이터를 받도록 수정
        - fetch 를 어느 단계에서 하는 게 맞을까? 
            - initWebtoonDaily 가 실행되는 시점
            - listenEvent 실행 후 해당 요일 클릭으로 인해 template 변경이 일어나는 시점
            
        - ```javascript
            // 전역변수로 선언하여 하위 함수에서 template 구성 시 webtoonData 를 사용할 수 있도록 한다.
            // 전역변수로 한 이유 : 각 하위 함수에 포함된 하위 함수에서 data가 사용되어서 매개변수로 전달할 시 코드 변경이 여러 곳에서 필요함. 초기 설계가 중요하다...
            let webtoonData;
            export function initWebtoonDaily() {
                fetch('http://localhost:3000/webtoon/data')
                    .then(response => response.json()) //parser ?
                    .then(data => {
                        webtoonData = data;
                        createDailyNav();
                        createTodayContent();
                        listenEvent();
                    })
            }
          ```     
    
   - initContents 부분에도 동일하게 Fetch 적용하였는데 렌더링 순서에 문제 발생.
        - 홈 탭의 경우 영역 구성이 콘텐츠(배너슬라이드) - 카테고리 - 웹툰데일리 인데, 콘텐츠가 Fetch 하는 동안 카테고리가 먼저 실행됨. 
        - ```javascript
          function renderHome() {
              initContents();
              createCategory(categoryMenus);
              initWebtoonDaily();
          }
          ```
        - 오늘 UP 부분과 배너 부분의 순서가 바뀜. 
        <br><img width="441" alt="image" src="https://user-images.githubusercontent.com/90082464/156375915-a85835a2-be9c-48e0-a22c-903e6857cf02.png">
        
   - Fetch then 사용하여 동기적으로 각 영역이 생성되도록 수정
        - ```javascript
          function renderHome() {
              initContents()
                  .then(() => initWebtoonDaily()) // fetch 를 리턴한다.
                  .then(() => initCategory())
          }
          ``` 
   - then 메서드의 return 값이 없거나 promise 가 아닌 값을 return 하면 실행과 동시에 return = resolve 이므로 다음 then 이 실행되어 이전 then 콜백함수 내의 비동기 작업을 기다려주지 않는다.
        - ```javascript       
          // 비동기 작업이나 return 이 프로미스가 아닌 경우  
          export function initCategory() {
              fetch('http://localhost:3000/webtoon/categoryMenus')
                  .then(res => res.json())
                  .then(data => createCategory(data))
          
              return 'a'
          }
          
          function renderGenre(genre) {
                        initContents() // 프로미스를 반환
                            .then(() => initCategory()) // 비동기 콜백이지만 프로미스를 반환하지 않음.
                            .then((res) => {
                                createRecommend(genre)  // 동기 콜백
                                console.log(res)    // 'a' 출력
                            })
                      }
          ```
        - 카테고리 영역과 추천 영역의 렌더 순서가 바뀐다.
        <br><img width="744" alt="image" src="https://user-images.githubusercontent.com/90082464/156690371-ced9404a-1b43-46c1-bfcb-51eca1b8bb18.png">
        
6. fetch 와 Promise 공부..
    - promise 는 콜백으로 resolve, reject 를 받는다.
    - 콜백에서 resolve() 가 실행되면 promise 는 이행상태가 되며, promise Value 를 전달한다.
    - 그 값은 .then 을 사용하여 받을 수 있으며, then 도 promise 를 반환하므로 then 을 체이닝해서 사용할 수 있다.
    - then 자체는 콜스택에 바로 올라가고 콜백함수를 콜백큐로 보내므로, then(실행함수) 로 하면 함수는 이전 then 의 콜백함수와 상관없이 동기적으로 바로 실행된다. => async & await 의 경우 await 시 함수 자체를 지연한다.
    - then 의 return 은 resolve 와 같다.
    - 그럼 Fetch 는 내부에 resolve 가 있는 건가? => 요청이 성공하면 resolve.
        - fetch()로 부터 반환되는 Promise 객체는 HTTP error 상태를 reject하지 않습니다. HTTP Statue Code가 404나 500을 반환하더라도요. 대신 ok 상태가 false인 resolve가 반환되며, 네트워크 장애나 요청이 완료되지 못한 상태에는 reject가 반환됩니다. 
    

#### refactoring

- 폴더 분류 변경
    - 서버에서 static 폴더로 지정할 public 을 만들고 내부에 css, images, js 옮김.
    - 서버 관련 js 인 express.js 와 index.html 만 별도 폴더 없이 존재
    - static 경로 변경하는데 path.resolve() 가 현재 실행 중인 js 파일의 경로를 반환하지 않아 이상했다.
    - html 내부 ref 경로는 public 폴더 기준 경로이므로 수정 안해도 됨.
