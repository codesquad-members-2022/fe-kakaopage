
### Express 를 통한 API server 

#### 구현 check list

- [] 클라이언트 정적인 자원요청(html,js,css,image)에 응답할 수 있는 서버 구성
- []


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
    
4.    
    