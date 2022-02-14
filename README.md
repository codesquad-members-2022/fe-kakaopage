## `카카오페이지 클론-HTML,CSS개발`

> 카카오페이지 UI를 클론하는 미션, 👀 기획서에서 동적인 탭UI 기능은 개발하지 않고 정적인 HTML,CSS 화면 구성

> HTML는 용도에 맞는 tag를 찾아서 사용, 일정한 간격을 유지하며 모든 엘리먼트들은 가지런히 배치 => 배치를 할때 flex 속성을 사용

---

### 기능 요구사항

![기획서 링크](https://docs.google.com/presentation/d/1ez1rBqgAP9vQtr6_xiQW8Gn8WTncW1-s0sZaGnDm6FI/edit#slide=id.gad474f1470_0_8)

---

### 접근방식

1. https://page.kakao.com/main?categoryUid=10&subCategoryUid=10000 페이지에서 중간 네비게이션 탭에 따라 아래(main 영역) UI가 살짝만 바뀐다는 점을 인지하였다. (html 파일 하나만 사용)  

2. 제일 먼저 menu 중 요일연재 tab을 기준으로 html 마크업 진행

3. CSS는 BEM 방법론을 사용하여 한 번 적용해보기 위해 BEM 에 대하여 학습

4. 요일연재 tab 메뉴 선택 시 CSS 적용  

5. 다른 tab 메뉴에 따라 html main 영역 마크업 진행

6. JS로 동적 이벤트 구현

### 브라우저 렌더링 과정 ?  

### Flexbox 사용법

1. 플렉스 박스를 배치할 자식 요소들의 부모 태그에 플렉스 박스를 앞으로 쓸거다 알려줘야 한다.
```css
    display: flex;
```

2. 가로 정렬 ? 세로 정렬 ?

```css
    flex-direction : row;
```

- 가로 방향 정렬 : row / 세로 방향 정렬 : column

> 가로 정렬인 row로 셋팅 시 Main axis는 가로축, Cross axis는 세로축을 의미

> 세로 정렬인 column로 셋팅 시 Main axis 세로축, Cross axis는 가로축을 의미

3. 무조건 한 줄 안에 다 정렬 ?  

```css
    flex-wrap: nowrap;
```

flex-wrap은 감싸지 않고 자식의 사이즈를 줄여서라도 한 줄로 정렬하려는 속성! flex-wrap의 default 값은 nowrap이다.  

(Ex. 부모 width: 1000px, 자식요소 3개가 각각 width가 400px 일 때, flex-wrap: nowrap으로 속성 설정 시 각 자식 요소의 width는 250px로 변경된다.)  

4. 플렉스 박스를 사용하여 이제 정렬!  

FlexBox는 보이지 않는 두 개의 Axis로 정렬한다.  

Main axis 조정 -> justify-content 속성으로!  

Cross axis 조정 -> align-items(하나의 axis), align-content(전체의 큰 axis) 속성

---

### HTML 시맨틱 태그

시맨틱은 의미를 뜻하며 시맨틱 태그는 우리가 작성하는 태그에 의미있는 태그를 붙이자 라는 개념이다.  

아무 의미 없는 태그인 div, span 태그는 영역을 분리할때는 가급적 피하고 정말 의미를 지니는 태그들인 header, nav, section, article, footer 속성들로 레이아웃 구조를 잡자!  

`시맨틱 태그 사용 장점 ? `

1. 퍼블리셔, 다른 프론트엔드 개발자들이 html 문서를 보지않고도 코드만으로 해당 영역이 어디인지? 어떤 내용이 담겨져 있을지 시맨틱 태그로 예상할 수 있다.

2. 검색 엔진 최적화 Up (따로 마케팅을 이용하여 광고를 하지 않아도 의미 있는 태그들로 인하여 우리가 작성한 웹 사이트의 요소들을 해석할 수 있다.)

---
### BEM 방법론 ?  

로직을 작성하는데 있어서 여러 디자인패턴이 존재하듯 CSS에도 다양한 여러 패턴? 방법론들이 존재한다.  

그중에서도, 이번에 CSS 클레스 네이밍을 BEM 방법론을 한 번 이번에 도입하여 사용해보려 한다.  

BEM은 Block, Element, Modifier를 의미하며 저 3가지를 각각 __, --로 구분한다.  

1. Block ? 특정 영역을 감싸고 있어 독립적으로 분리할 수 있는 부분

2. Element ? 블럭을 구성하는 단위로 의존적이다. 블럭 내에서만 사용이 가능하기 때문에 따로 떼어서 독립적으로 사용 불가

3. Modifier ? Block/Element의 속성을 담당

그럼 BEM의 장점 ? 네이밍만으로 목적과 기능을 명확히 전달할 수 있는게 가장 큰 장점

BEM의 단점 ? 

1. 아무래도 block, element에 __, --를 붙여서 사용하다 보니 클래스이름이 너무 길어진다.

2. 특정 DOM의 클래스를 복사해서 가져오려고 할 때 불편하다. 하이픈과 언더바의 혼용으로 인하여 더블클릭으로 한 번에 class 선택이 안된다는점  

### 카카오페이지 상단 부분만 BEM으로 작성해보자  

![]()

위 헤더쪽 레이아웃만 우선 BEM 방법론을 적용해보았다.

```html
<header class="header">
    <div class="header__top">
        <h1 class="header__logo">kakaopage</h1>
        <div class="header__search">
            <form class="search__form"><input class="search__input" type="search"/></form>
            <img />
        </div>
        <div class="header__buttons">
            <button class="header__button">STAGE</button>
            <button class="header__button">캐시충전</button>
            <button class="header__button">로그인</button>
        </div>
    </div>
    <div class="header__bottom">
        <nav class="header__nav">
            <ul class="header__ul">
                <li class="header__menu"><a class="header__link" href="#">홈</a></li>
                <li class="header__menu"><a class="header__link" href="#"><img src="https://static-page.kakao.com/static/pc/menu_toon.svg?fd6837bff2e823e13c693320961cc5a8" alt="웹툰/만화"/></a></li>
                <li class="header__menu"><a class="header__link" href="#"><img src="https://static-page.kakao.com/static/pc/menu_novel.svg?417f894a74c6cd5334b4a84cfa470d55" alt="웹소설/장르"/></a></li>
                <li class="header__menu"><a class="header__link" href="#">영화</a></li>
                <li class="header__menu"><a class="header__link" href="#">방송</a></li>
                <li class="header__menu"><a class="header__link" href="#">책</a></li>
            </ul>
        </nav>
    </div>
</header>
```

먼저 마크업을 어느정도 해준 후 각 DOM에 BEM 방법론을 적용해본 소스다.  

1. 헤더를 감싸고 있는 부분을 Block이라 생각하여 header라는 이름으로 블록을 선언하였다.  

2. header 내부엔 크게 2개 영역으로 나눠진다고 생각하여 div태그로 각각 header__top, headeR__bottom Element로 표현  

3. header__top 요소 내에서는 또 3개의 영역으로 생각하였다. 
    - 맨 왼쪽엔 header__logo 
    - 중앙엔 검색 인풋을 포함하는 header__search => 여기서 form, input 태그 클래스명을 어떻게 지을지 고민을 했다.  
    > search__form ? header__search--form ? 두 클래스 네이밍중에 뭐가 더 적합할까 생각을 해봤는데, 둘 다 괜찮고 뭘 사용해도 좋다고 생각하지만, search__form 네이밍 만으로도 해당 요소가 검색폼이라고 인지할 수 있고 불필요하게 네이밍을 길게 하는건 안좋다고 생각하여서다. 또한 가급적 modifier을 붙이는 속성은 더 직관적이고 명확한 태그에만 적용하는게 좋다고 생각했다.
    - 오른쪽 영역엔 3개의 버튼들을 감싸는 header__buttons

4. header__bottom 요소 내에서는 메뉴들을 관리하는 네비게이션 태그를 사용하여 header__nav > header__ul > header__menu > header__link 로 네이밍을 지어주었다.


BEM 관련 참고 사이트 : https://en.bem.info/