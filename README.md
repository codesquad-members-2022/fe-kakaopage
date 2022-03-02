# fe-kakaopage

## Carousel

### 과정

다른 탭을 누르고 돌아오면 속도가 빨라지는 문제가 있었다. setTimeout이 여러개 생성되서 생긴 문제였고, 배너를 만들 때 setTimeout을 초기화하는 방식으로 수정했다.

### 수정할 것

![image](https://user-images.githubusercontent.com/62249058/156290208-7a6cb5dd-5a77-405c-998c-2dd0e6e825dc.png)  
배너가 있던 탭에서 배너가 없는 탭을 눌렀을 때, 아직 setTimeout이 살아있어서 console에 에러가 뜬다.

## URL 라우팅

### 과정

`/webtoons/drama/home` 홈 탭의 드라마 블록에 들어갈 데이터를 요청하는 url이다. 웹툰 데이터를 얻어올 거고, 장르는 드라마이며, 홈 탭에 들어갈 것이다라는 의미로 작성했다. 리소스를 중심으로 표현하고자 `webtoons/home/drama`가 아니라 `webtoons/drama/home`으로 작성했다.
