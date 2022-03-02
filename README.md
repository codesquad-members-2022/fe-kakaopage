# fe-kakaopage

# 이론정리계획

- [ ] 클로저에서 반환하는 타입 및 클로저 개념 공부
- [x] 돔 렌더링 과정-간략히
- [ ] Dynamic import in nodeJS
- [ ] json으로 변환 및 json을 변환 하는 함수들
- [ ] fetch API 및 HTTP Header 설정
- [ ] XMLHTTPRequest 는 잘 사용하지 않으나 그 사용법을 알아두자.
- [x] 웹 클라와 서버 통신 이해 및 csr, ssr
- [x] 탬플릿 렌더링의 장점
- [ ] http 용어 공부
- [x] url 구조 공부

# 요구사항

- url라우팅을 통해 req 분석
- json 응답 방법: json데이터를 파일로 저장후 export한다. 필요한 곳에서 require 로 가져온다,
  실제 DB를 통해서 얻어오지 않는다, Json파일이 저장된 파일을 직접 read 하지 않는
- url 구조: REST API 구조를 따르려고 노력
- axios같은 통신 라이브러리 금지
- async함수의 await 보다는 then 매서드 활용

# TODO

- [ ] clearInterval로 버튼 누를 떄 이벤트 삭제 후 재등록
- [ ] promise, then, async/await 동작 과정 이해
- [ ] node js의 동작과정

# 고민거리 (그룹리뷰용 정리)

### 1. closure 이해 및 closure의 반환 값들

### 2. api요청 이해 및 고민

ssr, scr차이와 배포이후에 프론트와 백앤드가 어떻게 통신하는지 이해하고 적용해봄
페이지를 라우팅하는 url과 데이터를 요청하는 api를 어떻게 구분할까 고민. 예를 들어, 프로젝트에서는 server.js에서 static폴더에 있는 정적인 리소스들을 아래와 같은 방식으로 관리하고 있음. 그런데 클라이언트에서 라우팅을 관리하기 때문에 어떤 path로 가든 index.html렌더링도록 설정.

```js
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'static/index.html'))
);
```

위와 같이 하면 url에 임의 대로 (http://localhost:4000/asdfasasjkf) 아무 의미 없는 url을 입력해도 정상적으로 작동함. 혹은 app.get("/user", cb)과 같이 서버에서 데이터를 가져오려고 만든 uri인데 클라이언트에서 라우팅이 작동함. (아래 예시)

```js
// 1번: app.get("/user", cb)가 먼저 작동해 index.html을 렌더링 하지 않음
app.get('/user', (req, res) => {
  res.send('user');
});

// 클라이언트에서 라우팅을 관리하기 때문에 어떤 path로 가든 index.html렌더링하기
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'static/index.html'))
);

// 2번: app.get("/*", cb)가 먼저 작동해 유저데이터를 받아오지 못함
// 클라이언트에서 라우팅을 관리하기 때문에 어떤 path로 가든 index.html렌더링하기
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'static/index.html'))
);

app.get('/user', (req, res) => {
  res.send('user');
});

//3번: /api로 시작하는 데이터만 요청하는 uri구분
app.get('/api', apiRouter);
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'static/index.html'))
);
```

`그렇다면 서버와 통신할 api주소는 어떻게 관리할까?`

1. uri주소가 /api로 시작할 때 데이터만 전달하는 라우터 만들기

2. 클라이언트를 렌더링하는 서버와 데이터를 처리하는 서버를 분리

- 정적 파일을 렌더링하는 웹 서버와 동적 데이터(파일)을 관리하는 was로 구분해서 생각
- 아래 해결방안에 자세히 설명

✅ 해결방안

클라이언트와 서버를 분리배포한다고 생각하고 작업

> `클라이언트`: 페이지 이동관련 라우팅관리
> `서버`: 클라이언트에서 들어온 요청에 대한 요청을 /api/로 관리

`이전`

```bash
fe-kakaopage
├── static
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── init.js
│   └── index.html
├── db
│   └── store.js
└── server.js
```

`이후`

```bash
fe-kakaopage
├── front
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── init.js
│   └── index.html
└── server
    ├── db
    │   └── store.js
    └── server.js
```

### 진행중... cors() 미들웨어 없이 header 설정으로 cors origin 문제해결해보기

`이전`

```js
const allowlist = ['http://127.0.0.1:8080', 'http://localhost:8080'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowlist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};
app.use(cors(corsOptions));
app.get('/api', cb);
```

`이후`
