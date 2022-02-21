

### 탭 UI 동작

#### 요구사항    
- 탭을 누르면 하위 콘텐츠가 변경되어 노출된다
- 탭 선택 시, 화면 새로고침이 일어나지 않는다.
 
 
#### 구현 check list
- [x] 웹툰 - 요일 선택 시 노란색 표시 


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


#### 
- 요일 선택 기능
    - 클릭한 요일의 class 에 노란 표시를 위한 on class 추가
    - 추가 전 클릭한 class 와 동일한 class 를 모두 찾아 on class 를 삭제해준다.
        - querySelectAll, element.className 사용
        - className 은 선택 노드의 모든 클래스명을 반환한다. 