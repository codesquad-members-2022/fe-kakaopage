# HTML
## 시맨틱 마크업
- header, main, footer, h1과 같이 페이지 전체에 하나씩만 들어가야하는 태그에는 id를 사용했습니다.
- 제목별로 나누어져있는 부분은 section 태그를 사용했습니다.
- 제목, 설명, 이미지로 하나의 요소로 할 수 있는 부분은 article 태그를 사용했습니다.

## 웹접근성
- 이미지의 alt속성은 스크린 리더기에서 읽을 수 있으므로 img태그에는 alt로 설명 추가했습니다.
- 텍스트가 없는 버튼이나 링크에는 `hidden-text`라는 클래스를 사용했습니다.하여 화면에는 보이지 않지만 리더기에서는 읽힐 수 있도록 했습니다.
- 의미없는 이미지 태그 사용을 줄이기 위해 아이콘들은 css의 가상선택자와 background를 주로 사용하였습니다.

## CSS
- BEM, OOCSS를 잘 사용하지 못하지만, Air bnb 스타일 가이드에서 두가지를 섞여 사용하는 것을 권장하여 맞추어 작업해보았습니다.
- CSS 프로퍼티 선언 순서에 맞게 작성하려 해봤습니다.
- reset.css : 태그초기화, font-family 등 초기 설정이 필요한 부분 작성
- variable.css : css내에 변수만 모아 작성
- common.css : 전체 페이지에서 공통으로 사용되는 부분 작성
- layout.css : 공통의로 사용되지 않고, 페이지마다 하나씩 가지고 있는 부분 작성, 페이지별로 css를 나누려다 비중이 많지 않아 하나로 작성했습니다.

## Reference
[https://github.com/airbnb/css#oocss-and-bem](https://github.com/airbnb/css#oocss-and-bem)  
[https://shylog.com/how-do-you-order-your-CSS-properties/](https://shylog.com/how-do-you-order-your-CSS-properties/)