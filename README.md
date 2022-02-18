# fe-kakaopage

데모페이지: https://jiminkim-dev.github.io/fe-kakaopage/

## step2
### 카카오페이지의 데이터 가져오기
> 참고한 글
> - [NODE.JS 크롤링(스크래핑)](https://sehyeongil.github.io/posts/2019/10/23/Node.js-%ED%81%AC%EB%A1%A4%EB%A7%81.html)
> - [[TIL] 자바스크립트로 크롤링 하기](https://velog.io/@rjsdnql123/TIL-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%ED%81%AC%EB%A1%A4%EB%A7%81-%ED%95%98%EA%B8%B0) 
> - [fs.writeFile in a promise, asynchronous-synchronous stuff](https://stackoverflow.com/questions/31978347/fs-writefile-in-a-promise-asynchronous-synchronous-stuff)

```bash
npm install axios cheerio
```

axios cheerio 라이브러리를 이용해서 원본페이지의 데이터를 스크랩하는 방식을 선택했다.

- parsingHomeTop() : 홈-웹툰 카테고리의 '요일 연재 top' 등의 작은 카드 레이아웃을 기준으로 스크랩한다.
- parsingDailyRanking(): 홈-웹툰 카테고리의 '일간 랭킹 top'의 랭킹 레이아웃을 기준으로 스크랩한다.

json 형식으로 스크랩된 데이터를 fs_writeFile를 이용해서 새로운 js파일의 내용으로 추가한다.
- 저장한 파일의 확장자가 json이 아닌 js인 이유 -> 사용하기 편해서...

#### ❗️문제점

- 메인배너를 스크랩 했을때 제일 첫번째 아이템의 정보만 불러온다.

- `홈-요일연재-월화수목금토`탭 은 페이지 링크로 이동하는게 아니기 때문에 요일별로 스크랩할 수 없다.

- `홈-요일연재-월화수목금토`탭의 작은 카드 레이아웃은 24개의 아이템만 스크랩이 된다.
  - 해당 탭은 기본적으로 24개의 아이템이 세팅되어있고 스크롤을 내릴수록 아이템이 추가되는데 스크랩으론 추가된 아이템을 가져올 수 없다.

### 깃허브 페이지 오류 해결하기
로컬에서는 문제가 없었지만 깃허브 페이지로 확인하니까 자바스크립트로 생성한 레이아웃과 html img 태그에 넣은 더미이미지가 뜨지 않았다...

![에러메세지](https://user-images.githubusercontent.com/85747667/154628545-9f311dd6-eb69-4e86-b090-c3e4acfda8ce.png)

콘솔창을 확인해보니 mixed content라는 알림과 net::ERR_ABOTED 404 라는 에러창이 보였다.

#### mixed content
> 참고한 글
> - [No More Mixed Messages About HTTPS](https://blog.chromium.org/2019/10/no-more-mixed-messages-about-https.html)
> - [How to fix "insecure content was loaded over HTTPS, but requested an insecure resource"](https://stackoverflow.com/questions/35178135/how-to-fix-insecure-content-was-loaded-over-https-but-requested-an-insecure-re)

HTTPS 페이지에 HTTP를 통해 리소스를 로드하라는 요청을 받을 때 발생하는 오류이다.

html 내부에서 더미이미지를 사용하기 위해 이미지 경로에 `http://placeimg.com/사이즈크기`를 넣었는게 화근이였다.

👉 나중에 이미지를 넣을거라 더미이미지 경로를 삭제하는 걸로 해결했다.

#### net::ERR_ABOTED 404

```html
  <script type="module" src="/JS/main.js"></script>
``` 

```css
.divider {
  ...
  background-image: url(/assets/divider.png);
  ...
}
```
파일 경로가 잘못되었기 때문에 발생한 오류였다.

👉 파일 경로 변경으로 해결

```html
  <script type="module" src="JS/main.js"></script>
``` 


```css
.divider {
  ...
  background-image: url(../assets/divider.png);
  ...
}
```

![](https://user-images.githubusercontent.com/85747667/154629085-4b81e3ed-858f-4449-89af-1fb7af814863.png)

수정하니까 자바스크립트로 생성한 레이아웃이 깃허브 페이지에서도 잘 보였다!