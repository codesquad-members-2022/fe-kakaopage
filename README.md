# fe-kakaopage
[데모페이지](https://otterp012.github.io/fe-kakaopage/main)
## 기능
- 홈, 요일, 웹툰 페이지가 구현했습니다.
- 홈을 제외하고 요일, 웹툰 페이지는 각 페이지의 요일 탭을 눌렀을때 요일에 맞는 웹툰을 불러오는 기능을 구현하였습니다.
- 배너를 동적으로 제어하는 기능은 아직 추가하지 못했습니다.

- 작품 데이터를 불러오는 부분은 다른 분이 토이프로젝트용으로 만들어 두신 [코리아웹툰API](https://github.com/HyeokjaeLee/korea-webtoon-api)의 사용에 대해 허락을 구하고, 해당 API에서 불러왔습니다.

### 목표
- 가능한 한 중복되는 부분을 줄이고 함수화하는 것을 목표로 삼았습니다.
- 컴포넌트를 가능한 한 재사용하고자 하였습니다.
- 가독성있게 코드를 짜려고 했습니다.
- 함수의 이름이 기능을 표현할 수 있도록 고민했습니다.

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
