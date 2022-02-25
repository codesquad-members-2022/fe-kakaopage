# fe-kakaopage

# 이론정리계획

[ ] 돔 렌더링 과정
[x] HTML collection 및 돔 탐색 메소드들 별 특징
[x] 돔 삽입
[x] DOM 노드 간의 관계 접근 프로퍼티
[x] 디자인 패턴이란?
[ ] Dynamic import
[x] js로 css 접근

# 리팩토링 계획

### main-child마다 폴더를 만들기

- 서브카테고리마다 레이아웃이 조금씩 다르지만 공통되는 요소가 있다.
- 레이아웃 구성이 블록식으로 되어 있어서 해당 블록별로 폴더별로 나눠 레이아웃을 작성하기

## mock데이터를 서버에서 가져오기

- categoryUid와 subCateogoryUid를 기준으로 db에서 데이터를 가져오기
- 가져온 데이터를 레이아웃 템플릿에 채워넣은 뒤 렌더링

## mockdb만들기

- 데이터를 요청하고, 해당 데이터를 찾고, 찾은 데이터를 템플릿에 넣는 과정은 동기적으로 작동해야하기 때문에 중간중간 async/await 혹은 promise 잘 사용해보기

# 고민

### carousel 리팩토링

동적기능과 정적인 레이아웃을 구분해서 함수를 나눠봤습니다.

- 동적기능을 담당하는 함수에서 closure를 활용해 변수와 함수를 private하게 관리해봤습니다.

### express: req, res

현재 url에서 파라미터를 프론트에서 따로보내주고 있는데 서버에서 req안에 url관련된 정보가 있을 것 같아서 찾아보고 있습니다.

> req.params, req.query ...

### 동적 import

아래와 같이 동적 import 장점이 뭘까 고민했는데 아직 잘 모르겠습니다.

```js
// /db/stores.js
async function store() {
  switch (mainUid) {
    case 0:
      const homeData = await import('./homeDB.js');
      break;
    case 1:
      const WebtoonData = await import('./webtoonDB.js');
      break;
  }
}
```
