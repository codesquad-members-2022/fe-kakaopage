# [쥬] Step 4



## 📃 체크리스트

- [x] JSON fetch
- [x] 디렉토리 구분, 코드 리팩토링
- [ ] dom 조작 80%
- [ ] 슬라이더 구현
- [ ] express 구현

- 나머지는 주말에 합니다.. 합니다! 😅

## 😸 고민거리

```js
static toonCategory_home = (target) => {
    toggleList(target, "check");
};
static toonCategory_daySeries = (target) => {
    toggleList(target, "check");
};
static toonCategory_webtoon = (target) => {
    toggleList(target, "check");
};
```
1. `render.js` 하단부 함수들인데  `<div data-action="toonCategory_home">` 이런식으로 dataset속성을 이용해 함수이름과 매칭해서 실행시키고 있습니다.  
이벤트 등록은 `index.js`에서 body에 한 번만 등록해 사용합니다.
여기서 카테고리를 클릭해 렌더링하는 방법은 같지만, 함수를 어떤식으로 보기좋게 할지 고민했습니다. `render.js`에 두 가지 방법이 있지만 어떤 방법이 나은지, 더 좋은 다른 방법은 있는지 알려주시면 감사하겠습니다.

2. `render.js` 상단에 import가 너무 많아 코드화면이 밉습니다..   
    다른 파일에서 불러온거지만 하나의 component 폴더에 묶여있긴 한데 더 짧게 적을 수 있는 방법이 있을까요??
   
3. 간단한 공간에 파라미터만 몇개 넣으면 값을 쉽게 바꿀 수 있는 하나의.. 게임패드같이 조작할 수 있는 공간을 만들고 싶은데, 쉽지가 않네요.  
   JSON 객체가 그렇다면 그럴 수 있겠지만, 깔끔한 방법이 없나 고민중입니다...
   
4. 방법은 많고 내가 선택해야 할 건 하난데, 이왕 할거면 제일 좋은 방법을 하고 싶은 마음에 코드 작성이 너무 더뎌지는 경향이 있습니다.ㅠㅠ 생각만 많은 것 같은데 이런 경험 있으신가요?
