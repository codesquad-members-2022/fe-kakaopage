# fe-kakaopage


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
            // 전역변수로 한 이유 : 각 하위 함수에 포함된 함수에서 data가 사용되어서 매개변수로 전달할 시 코드 변경이 여러 곳에서 필요함. 초기 설계가 중요하다...
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
    
#### 어려웠던 점

1. 새로운 기능을 추가할 때, 기존 코드를 건드리는 작업...
    - 초기에 작은 기능 구현을 시작으로 덧붙이면서 코드를 짰더니 기능별로 구분도 안되어 있고 연결된 부분이 너무 많아졌습니다.
    - 특히 HTML 탭 별로 main 내부에 rendering 할 영역을 구성하는 모듈 / 각 영역을 생성하는 모듈 / 각 영역에 이벤트를 거는 모듈 등으로 분리했으면 좋았을 것 같다는 생각을 했습니다.
    - 지금은 영역을 생성하면서 이벤트도 걸고 바로 렌더링까지 하다보니 조금만 복잡해져도 보수가 어려울 것 같습니다.
    - 구현된 기능이 많지 않고 데이터도 많지 않아서 이렇게 할 수 있었던 것 같습니다.
    - 다음엔 초기 설계를 좀 더 잘해보고 싶습니다.
    
2. Promise, Fetch, Then 등.. 비동기 개념.
    - Promise 의 동작 원리와 Fetch 와의 차이점,,
        - Fetch 는 resolve 가 어떻게 발생하는지? 궁금했는데 어떤 응답이든 응답이 오면 resolve 가 된다고 이해했습니다.
        
    - Then 도 Promise 를 return 하는데 then 의 콜백 함수가 또 Promise 를 return 하면 어떻게 되는건지 이해하기가 어려웠습니다.
        - 이해한 바로는, then 은 콜백함수의 return 을 resolve 로 간주합니다. 
        - then 자체는 promise 를 return 하기 때문에, 다음 .then 을 사용할 수 있는 것이고, 다음 .then은 이전 콜백의 return 과 동시에 실행됩니다.
        - 이전 콜백이 promise 를 반환할 때만 다음 .then 이 promise 의 value 반환값으로 동작합니다. 
            - 즉 이전 콜백이 비동기 작업일 경우 promise 를 반환해야만 다음 .then 이 먼저 실행되지 않고 비동기 작업 이후에 동작한다. => async await 과의 차이는 여기서 발생하는 것 같습니다.
            