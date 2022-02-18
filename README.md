# fe-kakaopage

#### 1. 구현
 
- header / main / footer 로 나누어 구현.

- header
    -[x] title : h1 tag 사용
    -[x] menus
        - [x] 검색 : input, button 사용
            - 타원 모양 input 만들기가 어려웠음.
            - border-radius 50%
        - [x] stage 로고
        - [x] users 
            - 캐시충전, 로그인
            - li 사이에 span 추가하여 '|' 구현
    -[x] headNav
        - ul, li 사용하여 tab menu 구현
        - li 내부에 a 태그로 선택 가능하도록 구현 => li가 필요한가?
        - 선택 표시 밑줄은 under class 추가
    -[x] 상단바 고정
        - headerFix class 추가 
        - position fixed 로 구현
        - header 높이 만큼 main 에 padding top 을 줘야함.
        - 이미지 겹치는 현상 => z-index 를 부여하여 해결.        
- main
    - nav, contents, category, daily 로 구성
    -[x] mainNav
        - ul li 사용, 내부 a 태그는 적용하지 않았다. => js 내부 렌더링하는 경우에는 a 태그가 필요한가?
        - 선택 표시 on class 추가
    
    -[x] contents
        - img, img 위 요소, sentence 로 구성
        - img 는 display : block 을 해줘야 빈틈 없이 들어감.
        - img 위 button, text 는 상위 태그 position relative 후 absolute 사용하여 구현.
        - button 은 button tag 에 background 로 버튼이미지를 넣어 구현.
        
    -[x] category
        - ul li 사용
        - 원본 페이지의 홈 탭 부분이라 잘못 만들었으나 그냥 냅둠.
    
    -[x] daily 
        - nav, contents 로 구성
        -[x] nav
            - ul, li 사용. li 내부에 button 사용.
            - 선택요일 on class 추가
        -[x] contents
            - 여러 content div 를 가지고 있어 flex wrap 사용, 한 줄에 5개가 표현되도록 적절한 width 부여
            -[x] content
                - inner, title, views 로 구성
                -[x] inner 
                    - 이미지와 bar 로 구성되며 overflow hidden 과 border-radius 로 모양 구현
                -[x] title
                    - width 초과하는 부분 ... 표시 구현 (white-space, overflow, text-overflow)     
                -[x] views
- footer
    - [x] footer menus
        - 각 menu 는 a 태그로 구현
        - 사이 가운데 점은 &#183 유니코드 사용, span tag 를 사이에 넣어줌.
                    
#### 2. 어려웠던 점
- 적절한 시멘틱 태그 사용
    - li 를 사용해야할 지, button 태그 등 특정 태그를 줄줄히 나열할지. 내부에 넣어주는 게 좋은지 잘 모르겠습니다.

- class 네이밍
    - 위에서 썼던 이름이 밑에서도 비슷하게 필요한 경우가 많았습니다. (아는 단어 pool 이 작아서..?)
    - 하위 구조의 class 명을 지을 때 상위 구조를 네이밍에 표현해주는 경우, (head__menus 등) 더 하위로 갈 때 __를 어디까지 해주는게 좋을 지 헷갈렸습니다.

- layout, font-size
    - css 감이 없어 적당한 크기의 감? 을 찾기가 어려웠습니다.
    - 모양 맞추기 위해 실행 후 검사하여 px 를 변경해보면서 적절한 px 를 찾아 구현하였는데, 시간도 오래걸리고 size가 고정되어 보수가 어려운 것 같습니다.
    - rem, em, % 를 활용하면 될 것 같은데 시도는 못했습니다.

- 공통 css 묶기
    - layout 이나 font 관련 css 를 묶어보려고 했는데 class 마다 교집합되는 속성이 조금씩 달라 공통 css 묶기가 생각보다 어려웠습니다. (억지로 묶은 느낌..)