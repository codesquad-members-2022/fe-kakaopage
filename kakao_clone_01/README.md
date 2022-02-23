# PAGE UI CLONE

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## 요구사항 <a nam e = "about"></a>

- HTML
- HTML은 용도에 맞는 tag를 찾아서 사용한다.
- HTML5 Layout 태그를 활용한다.
- CSS
- 모든 엘리먼트들은 가지런히 배치하고 일정한 간격을 유지하도록 한다.
- 배치를 할때 FLEX 속성을 사용한다.

## HTML <a name = "html"></a>
------------------------
유의해야 할 태그 : header, section, nav, footer, aside
닫히지 않는 태그?

## CSS <a name = "css"></a>
------------------------
### style 적용방법

- inline(HTML 태그 안에 적용)
```html
<span  style=”color:red;”> HELLO World ! </span>  
```
- internal (style태그로 지정)
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset=”utf-8” /> 
	<title>World !</title>
   <style>
  	 span { 
 	color :red;   
 	 }
	</style>
</head>

<body>
  <span> HELLO world ! </span>  
</body>
</html>
```
- external (외부 css파일로 만들기)
```html
<link rel="stylesheet" href="style.css"> 
```
### 엘리먼트가 배치되는 방식
---------------------------------------
**중요하게 이해해야 할 속성**
- display(block, inline, inline-block)
    - block 쌓인다.
    - inline 우측, 아래쪽 빈자리로 흐른다. 높이와 넓이를 지정해도 반영되지 않는다.
```html
<div>
    <span>나는 어떻게 배치되나요?</span>
    <span>좌우로 배치되는군요</span>
    <a>링크는요?</a>
    <strong>ㄹ이크도 강조도 모두 좌우로 흐른다.</strong>
</div>
```
- position(static, absolute, relative, fixed)
    - position속성은 기본 static이다. 그냥 순서대로 배치됨.
    - absolute는 기준점에 따라서 특별한 위치에 위치합니다. 기준점을 상위 엘리먼트로 단계적으로 찾아가는데  static이 아닌 position이 기준점입니다.
    -  relative는 원래 자신이 위치해야 할 곳을 기준으로 이동합니다. top/left/right/bottom으로 설정합니다.
    - fixed는 viewport(전체화면)좌측, 맨위를 기준으로 동작합니다.
- float(left, right)

### FLEXBOX
-----------------
CSS Flexbox Layout Module
- Block, for sections in a webpage
- Inline, for text
- Table, for two-dimensional table data
- Positioned, for explicit position of an element

