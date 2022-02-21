# PAGE UI CLONE

# Tutorial
https://www.w3schools.com/css/css_templates.asp
카카오페이지  따라하다가 가랑이가 찢어질거 같아서  w3schools.com/css tutorial 보면서 기초부터 해보기로 했다.

__How TO__
- [Accordion](https://www.w3schools.com/howto/howto_js_accordion.asp)
- [Tabs ](https://www.w3schools.com/howto/howto_js_tabs.asp)
- [Full Page Tabs](https://www.w3schools.com/howto/howto_js_full_page_tabs.asp)

# 해야할 것
- mdn 사이트에 들어가서 querySelector랑 addEventlistener 관련해서 한번 읽고 정리해두기.
- kakaopage 최대한 간단한 형태로 메뉴 클릭하면 안의 이미지 바뀌는 형태...까지 해보기.
- (옵션)JSON 사용해서 데이터 바꾸는거 시도해보기.

## HTML Tag
-----------------
- adress
- article
- aside
- footer
- header
- h1 ~ h6
- main
- nav
- section

### header
> The <header> element represents a container for introductory content or a set of navigational links.
    A <header> element typically contains:
    - one or more heading elements
    - logo or icon
    - authorship information

```html
<!--A header for an <article>-->
<article>
  <header>
    <h1>A heading here</h1>
    <p>Posted by John Doe</p>
    <p>Some additional information here</p>
  </header>
  <p>Lorem Ipsum dolor set amet....</p>
</article>
```

### main
> The <main> HTML element represents the dominant content of the <body> of a document.

### footer
> The <footer> HTML element represents a footer for its nearest sectioning content or sectioning root element.

## Dom Elements
-----------------------
Document.createElement()
```javascript
let element = document.createElement(tagName[, options]);
```
__tagName__
A string that specifies the type of element to be created. The nodeName of the created element is initialized with the value of tagName. Don't use qualified names (like "html:a") with this method. When called on an HTML document, createElement() converts tagName to lower case before creating the element. In Firefox, Opera, and Chrome, createElement(null) works like createElement("null").

__options Optional__
An optional ElementCreationOptions object, containing a single property named is, whose value is the tag name of a custom element previously defined via customElements.define(). See Web component example for more details.