# fe-kakaopage

## ToDo

week3-1

### express 서버 연결

[참고](https://surprisecomputer.tistory.com/33)

- 로컬에서 html 파일을 구동할 때의 static files(css, js, image) 상대 경로와 node.js 서버를 사용하여 구동할 때의 상대 경로가 전혀 다름
  - `static folder` 지정하여 해결
  - 서버는 해당 `static folder`에 접근해서 static file을 가져옴
  - html 파일에서도 해당 static file의 상대 경로를 작성해야 함
  - `public`이라는 폴더 자체를 `static folder`로 지정하여 내부를 사용
  - <img width="233" alt="스크린샷 2022-03-02 오후 4 04 33" src="https://user-images.githubusercontent.com/68533016/156311813-cced05c5-ea22-476a-95a5-a689dfc71039.png">

week2-2

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/68533016/155648256-82ed8712-ba3a-486b-bd42-a1f2a30f6d55.gif)

- 웹 애니메이션 슬라이딩 구현
  - [x] 수동 슬라이딩 기능
    - 좌/우 버튼을 눌렀을 때 슬라이딩 가능
  - [ ] 무한 슬라이딩 기능 (Carousel)
  - [ ] 자동 슬라이딩 기능
    - 일정한 시간 간격으로 이동
  - [ ] 자동 또는 수동 슬라이딩 시 우측 하단에 페이지 번호 표시

week2-1

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/68533016/155253767-995e99e5-aed1-4883-991c-c399a27615cb.gif)

- [x] 탭 기능 리팩터
  - [x] Array.prototype.forEach.call 없애기
  - [x] innerHTML로 변경
- 슬라이드 애니메이션 구현
- [ ] 데이터 저장, 가져오는 방식
  - [ ] 데이터 분리하기
- [ ] css 겹치는 코드 리팩터
- [ ] 크롱 피드백, 클래스명 리팩터

week1

- [x] 카카오페이지 HTML, CSS 구현
- [x] flex 완벽 정리
- [x] 브랜치 두 개에서 작업했을 때 PR 처리 how?
- [x] display 속성 정리

---

1. ul li 가로 정렬할 때 아래 두 개의 차이는??

- float: left
- display: inline-block;

2. body의 width는??
3. 클래스 이름
4. div 안의 텍스트 수직 중앙 정렬

   - flexbox 컨테이너 + 아이템

컨테이너를

```
display: flex;
justify-content: center;
align-items: center;
```

5. nav 사이 안 벌어짐

- `ul li` 와 `div`에서 `space-between`이 다르게 적용된다... 이유는 못 찾음

6. mainBanner 사이 간격

이미지 블록 처리?

```
.mainBanner img {
  display: block;
}
```

7. nav 바 사이 간격 미세하게 다름

8. 클래스명 -> BEM으로 수정

9. DOM

https://im-developer.tistory.com/51

- prototype 에 대한 학습 필요
