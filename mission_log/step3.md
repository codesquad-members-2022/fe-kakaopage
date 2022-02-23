
### 탭 UI 동작

#### 요구사항    
- 탭을 누르면 하위 콘텐츠가 변경되어 노출된다
- 탭 선택 시, 화면 새로고침이 일어나지 않는다.
 
#### 구현 check list
- 웹툰 - 요일 영역
    - [x] 요일 선택 시 노란색 표시 
    - [x] 요일 선택 시 요일에 해당하는 웹툰 목록 보여주기
            - webtoonData day 와 click 된 요일 비교하여 해당하는 목록 redering
    - [x] 첫 화면에 오늘 요일에 해당되는 웹툰 목록 보여주기
- 웹툰 - 메인 navigation 
    - [x] 홈/요일연재/웹툰 등 선택 시 굵은 검은색 표시
    - [x] 첫 화면 홈 표시
    - 각 탭마다 re-rendering
       - [x] 홈 탭 : contents - category - daily 구성
       - [x] 웹툰, 요일연재 탭 : contents - daily 구성
       - [x] 소년,드라마 등 : contents - recommend 구성
            - webtoonData genre 추가하여 click부분 innerText 와 비교.
            - 동일한 장르 4개까지 template에 추가하여 rendering
       
#### 설계

- 작은 기능부터 만들기 3 -> 2 -> 1
    - 3완료, 2 진행중..
    
    1. header tab 선택 시
        - 첫 화면에 header / main - 홈 (더미) / footer 
        - header 의 각 tab 에 따른 main 템플릿을 구성 - 더미페이지
        - tab 선택 시 main 변경.
        
    2. main - 웹툰 tab
        - 홈 / 요일연재 등 nav tab 선택 시 변경.
        - 내부 디자인 변경
    
    3. 웹툰 - 요일연재 tab
        - 요일 선택 시 만화 목록 변경
        - 요일 선택 시 선택표시(원형)

- js 구성 : main - daily, contents, recommend
       
    - webtoon_main 에서 `initWebtoon()` 실행
    - 웹툰 탭의 mainNav 를 생성
    - 웹툰 탭의 홈 화면을 rendering `renderStartPage`
    - mainNav click 이벤트 생성.
    - 하위 탭 클릭 시 main Nav 를 제외한 하위 메뉴 rendering (각 콤포넌트 생성)
    - 각 콤포넌트 생성 함수는 daily, contents, recommend 별도 파일로 분리.
    - daily 파일은 콤포넌트 생성 및 하위 클릭 이벤트(날짜 클릭) 생성도 같이 함.

#### 구현과정

1. 웹툰 - daily 영역 동작 (홈, 요일연재 탭에 사용)
- 요일 선택 기능
    - 클릭한 요일의 class 에 노란 표시를 위한 on class 추가
    - 추가 전 클릭한 class 와 동일한 class 를 모두 찾아 on class 를 삭제해준다.
        - querySelectAll, element.className 사용
        - className 은 선택 노드의 모든 클래스명을 반환한다. 

- 요일 선택 시 웹툰 목록 보여주기
    - 웹툰들의 정보를 가진 webtoonData 생성
    - click 된 노드의 innerText 를 이용해 해당 요일을 구하고, webtoonData에서 요일에 해당하는 Content 들을 찾아 template을 완성한다.
        - innerHTML 
    - 5위 이하인 경우에만 등수를 표기, 6위 이상부터는 별점으로 표기. => template 을 경우의 수에 따라 작성하다보니 코드가 길어짐.

- 첫 화면 : 해당 요일 웹툰 목록 보여주기
    - Date 생성자 사용
    - 위에 사용했던 2가지 기능을 위한 함수를 재사용하기 위해 코드 수정. 
        - 원래 eventListener 로 event 를 매개변수로 받던 함수였는데, event 를 handle 하는 함수(handleClick) 를 하나 만들고 그 안에서 여러 함수가 event.target 을 받도록 변경.
        - 그 결과 이벤트랑 상관없이 해당 노드만 안다면 함수를 사용할 수 있음.
        
        ```javascript
        function handleClick(e) {
            const $daily__button = e.target;
            // button box 클릭 시에만 실행하도록 범위 지정.
            if($daily__button.className === 'daily__button') {
                removeOn($daily__button)
                addOn($daily__button)
                createDailyContent($daily__button)
            }
        }
        ```

2. 웹툰 - 홈 / 요일연재 등 main nav tab 동작

- 상위 탭 mainNav 구현
    - createMainNav 와 createNavMenu 로 구현
    - main Div 에 가장 윗부분에 붙어야하므로 `$main.prepend($mainNav)`
    
- 탭 이벤트 구현
    - click 시 탭에 `menu-on` class 추가로 굵은 표시
    - target 에 맞는 render 함수를 실행해주는 `renderMenu(target)` 실행
    - 실행 전 mainNav 가 아닌 부분을 모두 삭제 후 re-rendering 해준다.
    - clearMenu : children method 사용 시 배열이 아닌 HTML collection 이므로 하기와 같이 배열로 바꿔준 후 forEach 사용.
        ```javascript
        function clearMenu() {
            const $main = select('.main')
            const childNodes = $main.children;
            [...childNodes].forEach((node) => {
                if(node.className !== "mainNav") {
                    node.remove();
                }
            })
        }
        ```
- render
    - main 에 포함될 각 영역을 함수로 생성
        - createContents, createCategory, initDaily 등 rendering 순서대로 실행.
        - event가 걸려있는 daily 부분은 init 으로 명명.
    - 각 tab 마다 render 되는 순서대로 함수 실행
        - 중복되는 부분이 발생하는 문제가 있다.
        ```javascript
        function renderHome() {
            createContents();
            createCategory();
            initWebtoonDaily();
        }
        
        function renderDaily() {
            createContents();
            initWebtoonDaily();
        }
        ``` 

- 소년 드라마 등 각 장르 탭
    - webtoonData 에 장르 항목 생성.
    - 새로운 div 를 만들고 webtoonData 순회하여 클릭된 장르(innerText) 와 같은 장르를 가진 항목을 template 에 4개까지 추가.
    