# FE Mission week2. Kakaopage Clone

##### Feb 21 ~ 25, 2022

##### [🟡 Demo Link](https://jaypedia.github.io/fe-kakaopage/)

---

## Step 1. HTML & CSS

- BEM 방식 이용한 class 네이밍
- semantic tag 사용
- CSS 파일 분리를 통해 모듈화
- 가상 클래스 `:root`와 CSS variable 활용

## Step 2. DOM, Event, Templating

- 요일 탭 클릭 시 웹툰이 바뀌도록 구현
  - data.json 파일을 만들고, 데이터를 fetch로 불러옴
- header의 navbar 버튼 클릭 시 banner 이미지가 바뀌도록 구현
- 레이아웃 변경은 구현하지 못함

## Step 3. Web animation sliding

- tab 클릭 시 레이아웃 변경까지 구현 완료
- 슬라이더 구현

### Event Delegation : `closest()` 활용

#### Before & After

```js
const activateTab = ({ target }, parentNode) => {
  // if (target.parentNode.tagName === 'LI') target = target.parentNode; --- Before

  target = target.closest('.gnb__item'); // --- After

  [...parentNode.children].forEach(child => {
    child.classList.toggle(CL.SELECTED, child === target);
  });
};
```

#### 기존 로직의 문제점

- 기존에는 target.parentNode의 tagName이 'LI'일 때만 target을 `target.parentNode`로 바꿔 주었다. 그러다 보니 li의 자식 태그 안에 다른 element가 있을 때, 이 element를 클릭했을 때에는 제대로 작동되지 않았다.

```html
...
<li class="gnb__item alarm" id="webtoon">
  <a href="#">웹툰 • <i class="fas fa-clock"></i></a>
</li>
```

- 위와 같이 li 태그 안에 a 태그가 있고, 또 그 안에 i 태그 요소가 있는 상황에서 a 태그를 클릭했을 때에는 잘 동작하지만 i 태그를 클릭했을 때에는 `activateTab()`함수가 작동하지 않았다.

#### `closest()` 함수 사용으로 문제점 개선

```js
target.closest('.gnb__item');
```

- target의 상위 요소 중 클래스가 `.gnb__item`과 일치하는 가장 근접한 조상 요소를 찾는다. 즉 이벤트가 발생한 요소부터 시작해서 위로 올라가면서, 가장 가까운 `.gnb__item` 요소를 찾는 것이다.
- 이 방법으로 target을 li 태그로 설정할 수 있게 된다.

---

## 📓 What I Learned / What I have to learn

[JavaScript.info | Event Delegation](https://ko.javascript.info/event-delegation)
