

### 탭 UI 동작

#### 요구사항    
- 탭을 누르면 하위 콘텐츠가 변경되어 노출된다
- 탭 선택 시, 화면 새로고침이 일어나지 않는다.
 
 
#### 구현 check list
- 웹툰 - 요일
    - [x] 요일 선택 시 노란색 표시 
    - [x] 요일 선택 시 요일에 해당하는 웹툰 목록 보여주기
    - [x] 첫 화면에 오늘 요일에 해당되는 웹툰 목록 보여주


#### 설계

1. header tab 선택 시
    - 첫 화면에 header / main - 홈 (더미) / footer 
    
    - header 의 각 tab 에 따른 main 템플릿을 구성 - 더미페이지
    
    - tab 선택 시 main 변경.
    
2. main - 웹툰 tab
    - 홈 / 요일연재 등 nav tab 선택 시 변경.
    - 내부 디자인 변경..?

3. 웹툰 - 요일연재 tab
    - 요일 선택 시 만화 목록 변경
    - 요일 선택 시 선택표시(원형)
    
- 작은 기능부터 만들기 3 -> 2 -> 1


#### 구현과정
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