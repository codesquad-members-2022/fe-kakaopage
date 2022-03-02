# fe-kakaopage


### Express 를 통한 API server 

#### 구현 check list

- [x] 클라이언트 정적인 자원요청(html,js,css,image)에 응답할 수 있는 서버 구성
- [ ] 구현중인 기능에 대해서 모든 데이터 요청을 서버로부터 JSON형태로 받아서 처리하도록 한다.
    - [ ] URL 라우팅을 통해서 request 를 분석한다
    - [ ] JSON 데이터 응답 방법
        - json데이터를 파일로 저장후 export한다. 필요한 곳에서 require 로 가져온다.
        - 실제 DB를 통해서 얻어오지 않는다.
        - json파일이 저장된 파일을 직접 read 하지 않는다.
    - [ ] URL 구조 : REST API 구조를 따르려고 노력한다.

#### 어려웠던 점.

1. static 경로 설정
    - express.js 는 js 폴더 하위에 있어 css 나 imgaes 폴더에 접근하기 위해서는 static 폴더를 더 상위 폴더인 fe-kakaopage 로 해야했다.
        - `app.use(express.static(path.join(__dirname, '..', '..', 'fe-kakaopage')))` 
        - 변경 후 static 폴더 기준 경로로 각 파일 경로를 `<link rel="stylesheet" href="/css/reset.css">` 를 바꿔줘야 했다.
    - static 이 모든 파일을 담은 폴더가 되어도 상관이 없을지 궁금합니다.
    <br><img width="242" alt="image" src="https://user-images.githubusercontent.com/90082464/156285153-3cef3ea0-07ab-4de0-8f55-8f7864b8a1c5.png">

2. json 데이터를 처리하려면 기존의 rendering 함수들을 바꿔야 할 것 같은데, 어디서부터 손을 대야 할 지 모르겠습니다..
    - 기존 webtoon_main.js 에서 탭 클릭 이벤트 시에 특정 url 로 get 요청을 보내도록 수정해아 할 지??
    - 아니면 express.js 내에서 import 해온 렌더 함수들을 실행시켜야 할 지?
    ```javascript
    app.get('/', (req, res) => {
       
        const dayJSON = webtoonData
        res.json(dayJSON) // json 형태 데이터를 변수화 해야하나?
        
       // 이 부분에서 렌더 함수를 실행시켜야 하는 건지?
    });
    ```