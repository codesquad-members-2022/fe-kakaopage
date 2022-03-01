# fe-kakaopage

# pr 피드백 수정사항

- [ ] lazy import 활용과 장점, network탭 확인
- [ ] 반환 값에 따른 함수이름 db/novelDB.js -> getNovelData
- [ ] static/js/articles/Carousel/handleMove.js: 아래 initMove는 화살표함수가 아니고.

```js
renderButtons()  {
},
initMov() {
}
```

- 중첩된 코드의 표현을 콜백함수를 분리하기
- 모든 DOM NODE를 JS로 다 동적으로 추가할 필요는 없고, 껍데기와 기본틀은 HTML을 미리 구성해두는 것도 좋아요. 그리고 변경이 되는 부분만 DOM조작을 하는 것으로.

# 이론정리계획

- [x] 돔 렌더링 과정-간략히
- [ ] Dynamic import
- [ ] json으로 변환 및 json을 변환 하는 함수들
- [ ] fetch API 및 HTTP Header 설정
- [ ] XMLHTTPRequest 는 잘 사용하지 않으나 그 사용법을 알아두자.
- [x] 웹 클라와 서버 통신 이해 및 csr, ssr
- [ ] 탬플릿 렌더링의 장점
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

# 고민거리

### 1. api요청 이해 및 고민

ssr, scr차이와 배포이후에 프론트와 백앤드가 어떻게 통신하는지 이해하고 적용해봄
페이지를 라우팅하는 url과 데이터를 요청하는 api를 어떻게 구분할까 고민. 예를 들어, 프로젝트에서는 server.js에서 static폴더에 있는 정적인 리소스들을 아래와 같은 방식으로 관리하고 있음. 그런데 클라이언트에서 라우팅을 관리하기 때문에 어떤 path로 가든 index.html렌더링도록 설정.

```js
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'static/index.html'))
);
```

위와 같이 하면 url에 임의 대로 (http://localhost:4000/asdfasasjkf) 아무 의미 없는 url을 입력해도 정상적으로 작동함. 혹은 app.get("/user", cb)과 같이 서버에서 데이터를 가져오려고 만든 uri인데 클라이언트에서 라우팅이 작동함.

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
```

`그렇다면 서버와 통신할 api주소는 어떻게 관리할까?`

1.  api를 처리하는 미들웨어를 사용해 uri주소가 /api로 시작하면 해당 작업 후 app.get("/\*")으로 정적파일과 함께 데이터를 보내기

- 해당 방법으로 하면 데이터만 요청하는 api도 정적파일을 다시 렌더링해서 비효율적일 것 같음(어떤 요청을 하든 매번 index.html을 하게 되서)

2. 클라이언트를 렌더링하는 서버와 데이터를 처리하는 서버를 분리

- 정적 파일을 렌더링하는 웹 서버와 동적 데이터(파일)을 관리하는 was로 구분해서 생각
- 아래 해결방안에 자세히 설명

✅ 해결방안

클라이언트와 서버를 분리배포한다고 생각하고 작업

> `클라이언트`: 페이지 이동관련 라우팅관리
> `서버`: 클라이언트에서 들어온 요청에 대한 요청을 /api/로 관리

`이전`

`이후`

### 2. 탬플릿엔진 활용 여부
