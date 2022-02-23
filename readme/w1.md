# FE Mission 1. Kakaopage Clone

##### Feb 14 ~ 18, 2022

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

---

## Refactoring

- [ ] container 재사용할 수 있도록 수정하기
- [ ] CSS 함수 사용해보기 : is, calc 등
- [ ] 단위 차이점 알기 rem, em, px

### `::after`를 활용한 Refactoring

#### Before

```html
<!-- HTML -->
<ul class="header__navbar">
  <li class="nav__subject selected" id="home">홈</li>
  <li class="nav__subject" id="webtoon">
    웹툰
    <div class="nav__circle"></div>
  </li>
  <li class="nav__subject" id="novel">
    웹소설
    <div class="nav__circle"></div>
  </li>
  ...
</ul>
```

```css
/* CSS */
.nav__circle {
  width: 7px;
  height: 7px;
  background-color: var(--color-yellow);
  border-radius: 100%;
  position: absolute;
  right: 5px;
  top: 5px;
}
```

```js
// JavaScript
function removeCircle(e) {
  if (!e.target.matches('.nav__subject')) return;
  const circle = [...e.target.children].find(
    v => v.className === CL.NAV_CIRCLE
  );
  if (!circle) return;
  e.target.removeChild(circle);
}
```

- 헤더 네비게이션 탭에 있는 작은 원(새로운 컨텐츠 알람)을 구현하기 위해 div 태그를 만들어서 스타일을 입혔다.
  - 그런데 슬랙에서 도니가 가상 요소를 이런 상황에서 쓴다고 올린 것을 보고 가상 요소를 활용해보기로 했다.
  - 굳이 div를 생성하지 않고 장식적인 요소를 추가할 수 있으니, div라는 DOM node를 불필요하게 생성하지 않아도 되어 Render Tree가 좀더 간결해진다.
- JavaScript 로직은 각 탭을 클릭했을 때, 원을 없앨 수 있게 하는 함수이다.
  - `nav__subject`의 상위 노드인 `header__navbar`에 이벤트 위임을 했기 때문에 `matches()`를 이용해서 현재 클릭된 것이 `nav__subject` 일때만 하위 로직이 작동될 수 있도록 했다.
  - 현재 이벤트 타깃의 children 중에서 클래스 이름이 `nav__circle`인 것을 찾아서 `removeChild`로 제거한다. 존재하지 않는 경우 바로 `return`한다.

#### After

```html
<ul class="header__navbar">
  <li class="nav__subject selected" id="home">홈</li>
  <li class="nav__subject alarm" id="webtoon">웹툰</li>
  <li class="nav__subject alarm" id="novel">웹소설</li>
  ...
</ul>
```

```css
.alarm::after {
  content: '';
  width: 7px;
  height: 7px;
  ...;
}
```

```js
function removeAlarm({ target }) {
  if (target.parentNode.classList.contains('nav__subject')) {
    target = target.parentNode;
  }
  target.classList.remove('alarm');
}
```

- 처음엔 `alarm`이라는 클래스를 따로 만들지 않고 `.nav__subject::after` 이런 식으로 했었다.
  - 그런데 클릭했을 때 이 가상 요소가 사라지게 해야 하는데, 그러려면 DOM에서 찾아서 remove를 해 줘야 한다.
  - 하지만 `::before`, `::after`같은 CSS pseudo element는 말 그대로 '가상'이기 때문에 DOM에 존재하지 않는다. 따라서 HTML의 일부가 아니어서 JS에서 조작할 수가 없다.
  - 그래서 어떻게 해야 할지 고민했는데, 이번에도 도니가 해결책을 알려주었다. (Thanks Dony!😀)
  - `nav__subject`에 클래스 이름을 하나 더 부여하고, 거기에 가상 요소를 만들어 스타일을 입힌다.
- JavaScript 로직이 훨씬 간단해진다.
  - `classList.remove()`를 활용해서 클릭되었을 때 해당 클래스를 제거해주기만 하면 된다.

---

## 📓 What I Learned / What I have to learn

### HTML

- [nana_log | 버튼에 타입을 쓰는 이유 (button type="button")](https://nykim.work/96)

### CSS

- CSS methodologies : BEM, OOCSS
- [MDN | :root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
- [MDN | CSS custom properties(variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [MDN | :is() (:matches(), any())](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)

### Browser, DOM

- [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path)
- [w3.org | Document Object Model](https://www.w3.org/TR/WD-DOM/introduction.html)
- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

### Web

- [Static vs Dynamic Website](https://wpamelia.com/static-vs-dynamic-website/)
