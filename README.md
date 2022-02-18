# fe-kakaopage

## ToDo

- [x] 카카오페이지 HTML, CSS 구현
- [x] 탭 기능 구현
- [x] flex 완벽 정리
- [ ] css 겹치는 코드 리팩터
- [ ] 크롱 피드백, 클래스명 리팩터
- [ ] 데이터 저장, 가져오는 방식
- [ ] 브랜치 두 개에서 작업했을 때 PR 처리 how?
- [ ] display 속성 완벽 정리

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
