# fe-kakaopage
[데모페이지](https://otterp012.github.io/fe-kakaopage/main)
## 기능
- 홈, 요일, 웹툰 페이지가 구현했습니다.
- 홈을 제외하고 요일, 웹툰 페이지는 각 페이지의 요일 탭을 눌렀을때 요일에 맞는 웹툰을 불러오는 기능을 구현하였습니다.
- 배너를 동적으로 제어하는 기능은 아직 추가하지 못했습니다.

<<<<<<< HEAD
- 작품 데이터를 불러오는 부분은 다른 분이 토이프로젝트용으로 만들어 두신 [코리아웹툰API](https://github.com/HyeokjaeLee/korea-webtoon-api)의 사용에 대해 허락을 구하고, 해당 API에서 불러왔습니다.

### 목표
- 가능한 한 중복되는 부분을 줄이고 함수화하는 것을 목표로 삼았습니다.
- 컴포넌트를 가능한 한 재사용하고자 하였습니다.
- 가독성있게 코드를 짜려고 했습니다.
- 함수의 이름이 기능을 표현할 수 있도록 고민했습니다.
=======
- 현재 페이지를 로드하면 보이는 메인페이지에서 html,css 오류가 있습니다. 😅
- 중간단에 있는 분류 버튼을 누름을 통해 리로드 없는 페이지 이동이 가능합니다.
- 현재에는 홈-요일 버튼만 완성했습니다.
- 컴포넌트를 각기 나누고 JS에 저장해 JS에서 `innerHTML`을 조작하는 방식으로 진행했습니다.
- JS파일이 너무 길어지고, 애초에 컴포넌트 단위로 구성이 제대로 되지 않아 추후 오류가 발생하는 문제점이 있었습니다.
- 리로드 없는 페이지 구성을 사용자 입장에서 생각해보면 편리할 것 같다는 생각이 들었습니다.

## 컴포넌트를 최대한 재사용하기
- 기존에, html 마크업을 할때 컴포넌트 단위로 하나하나 따로따로 구성을 해놨다.
- 이를 이용해, 컴포넌트를 재사용해가며 작업을 해가려고 구상했다.
- 그렇지만, 컴포넌트마다 기본적인 tag는 같지만 class는 다른경우,
- 기본적으로 비슷하지만 조금만 다른 내용을 가진 경우에는 복잡했다.

```
function renderArticleSections(num) {
    const sections = renderSection(num);
    return `<div class="section__book-wrapper">${sections}
    </div>`
}

function renderSection(num) {
    let sections = '';
    for(let i = 0; i < num; i++) {
        sections += `               <section class="section__book">
        <div class="section__book-image-wrapper">
            <img src="./images/학사재생.png" alt="">
            <div class="section__book-image-infor">
                <span>1위</span>
                <i class="fas fa-solid fa-clock"></i>
            </div>
        </div>
        <div class="section__book-text-wrapper">
            <span class="section__book-text">어쩌고 저쩌고</span>
            <span class="section__book-text"><i class="fas fa-user-alt"></i> 28.5만명</span>
        </div>
    </section>`
    }
    return sections;
}
```
- 작업 부분정보에 작품정보부분은 모든 페이지가 이 컴포터는를 그대로 이용하기에 사용하기 알맞았다.
- for문으로 똑같은 부분을 추가할 수 있어 js 코드의 양이 줄어들었다.
- 이를 이용해 fetch로 웹툰 API에 나와있는 작품정보를 그대로 받아와 다시 출력하는 것이 목표다.

```
function renderHome_ArticelNav() {
    return `        <nav class="article__nav">
    <ul class="article__nav-lists">
        <li><a href="#">월</a></li>
        <li><a href="#">화</a></li>
        <li><a href="#">수</a></li>
        <li><a href="#">목</a></li>
        <li><a href="#">금</a></li>
        <li><a href="#">토</a></li>
        <li><a href="#">일</a></li>
        <li><a href="#">완결</a></li>
    </ul>
</nav>`
}
```
- 이런 부분은 재사용할 수 없었다.
- 페이지의 HOME 부분에서만 사용하고 다른 부분에선 사용하는 부분이 없다.

### 문제점
- 컴포넌트 단위로 재구성하다 보니 HTML마크업이나 CSS가 조금씩 틀어지는 경우가 발생해서 시간이 오래걸렸다.
- 처음부터 이런 관계성을 생각하고 HTML 마크업을 진행했으면 좋았을 것 같다.

### 계획
- [ ] HTML마크업을 모두 수정하기엔 시간이 없어 JS파일로 작업하는 중간중간 수정한다.
- [ ] 컴포넌트를 최대한 나눠보고 웹툰-웹툰 페이지까지 완성한다.
>>>>>>> 118ddf10b6a1812fc3b35c2cb9735f7c77a729bb

### 궁금한점
#### fetch 관련
- 저는 fetch를 통해 버튼을 누를때마다 해당하는 데이터를 받아오는 내용으로 코드를 작성했습니다.
- 그렇지만 데이터를 한방에 받아아오는 방법도 있다고 알고있는데, 한방에 받아오는 게 좋을까요?
- 지금은 페이지를 전환할때 약간 로딩이 발생하게 됩니다. 😂

### 아쉬운 점 
#### 복잡한 함수들...
```
function navClickEventHandler(className, navLists, func, sectionNums) {
    const parentEL = document.querySelector(`.${className}`);
    parentEL.addEventListener(('click'), ({target}) => {
        if(!target.classList.contains('active')) {
            [...parentEL.children].forEach((child) => {
                child.classList.remove('active');
            })
            target.classList.add('active');
        }
        updateSections(navLists, target, func, sectionNums);
    })
}

function updateSections(lists, target, func, sectionNums) {
    lists.forEach((list, index) => {
        if(target.textContent === list) func(index, sectionNums);
    })
}

export { navClickEventHandler };
```

- 모든 nav들이 클릭이벤트를 공유하고 있기에 클릭이벤트를 한가지 함수로 만들어보고자 했는데 `updateSections`함수와 같이 너무나 종속적인 함수가 하나 만들어져서 고민이 되었습니다.
- if-else로 월, 화, 수, 목 ... 을 컨트롤 하기보단 함수하나로 그를 대신 표현하고자 했는데 오히려 가독성이 떨어진다는 생각이 들었습니다.
- 또 `updateSections`해주는 함수도 한가지로 합쳐버리고 싶었는데, 해당 부분에 사용하는 매개변수가 너무 많은 것 같아서 잘못 구성했다는 생각이 들었습니다.

#### 동일한 기능이지만 다른 함수들
```
function renderRowArticle(index, sectionNums) {
    fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/${webtoonData.parms[index]}`)
    .then(res => res.json())
    .then(json => {
        let html ='';
        for(let i=0; i<sectionNums; i++) {
            html += renderRowList(json[i].title, json[i].img, json[i].url)
        }
    document.querySelector('.article__webtoon-row').innerHTML = '';
    document.querySelector('.article__webtoon-row').innerHTML += renderRowListWrapper(html);
    })
}
```

```
function displayWeekLists(index, sectionNums) {
    fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/${weekdaysData.parms[index]}`)
    .then(res => res.json())
    .then(json => {
        let html ='';
        for(let i=0; i<sectionNums; i++) {
            html += renderSections(json[i].title, json[i].img, json[i].url, i+1);
        }
    document.querySelector('.nav__clasify-toggle').innerHTML = `전체 (${json.length})   <i class="fas fa-solid fa-arrow-down"></i>`;
    document.querySelector('.article__weekdays').innerHTML = '';
    document.querySelector('.article__weekdays').innerHTML += renderSectionWrapper(html);
    });
}
```

- 각 페이지에서 `fetch`로 불러와 동작하는 부분은 똑같은 내용을 공유하는데, 각기 다른 함수로 만들었습니다.
- 가능한 방법으로 합치고자 합니다.

#### 인덴팅, 컨밴션
- 여기하다, 저기하다 하다보니 인덴팅이 틀어지거나 컨밴션이 잘못된 부분이 너무 많이 보였습니다.
- 수정한다고 수정은 하고 있는데.. 애초에 처음부터 신경써서 코드를 짜는 습관들 들여야겠습니다.

#### 코드의 가독성에 관해
- 코드를 다른 사람이 보았을때 이걸 잘 파악할 수 있을지 모르겠습니다.
- 가독성이 좋은 코드를 짜려면 어떠한 방식이 있는지 공부하려고 합니다. 😂
