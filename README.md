# fe-kakaopage


#### demo
- [kakaopage](https://bangdler.github.io/fe-kakaopage/)

#### 1. Tab UI 동적기능 구현

#### check list
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

#### 2. 어려웠던 점

- 큰 그림 설계가 어려워 작은 기능부터 만듦.
    - 만들어놓은 html 에서 노출되는 요일별 UI 작동부터 구현하였습니다.
    - 컴포넌트를 제대로 만들어놓고 시작하지 않다보니 상위 탭 구현으로 갈수록 코드가 깔끔하지 못하다는 느낌을 받았습니다.
    - 현재 각 컴포넌트 js 파일마다 element 생성, event 생성, rendering 함수가 같이 존재합니다.

- 컴포넌트 생성
    - 정석적인 컴포넌트 구조에 대해 확실하게 알지 못해 임의대로 구현할 영역을 나누어 함수를 만들었습니다.  
    - 어느 탭에서든 모양이 비슷하면 재사용할 수 있도록, data 나 특정 사항만 매개변수로 받는 컴포넌트 함수를 만들고 싶었지만 잘 안된 것 같습니다.
    - 현재는 특정 탭에서만 사용이 가능한 컴포넌트 함수?(각 영역 rendering 함수) 로 구현

- Data 다루기
    - webtoonData 의 각 항목을 정하는 것도 어려웠고, 어느 수준까지 필터링 된 data 를 받았다고 가정할 지? 도 어려웠습니다.
    - 컴포넌트 마다 사용할 data 객체를 분리하는게 좋을 지 아니면 한 객체에서 가져와 필터링을 하는게 좋을 지 고민도 됐습니다.
        ex) 모든 만화 데이터에서 추천 만화를 분류할지 , 추천만화로 분류된 데이터에서 추천만화를 가져와 rendering 할지...