# fe-kakaopage

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

