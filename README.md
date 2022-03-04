# fe-kakaopage

## 3주차 - 2번째 PR

### 🧐 어떤 생각으로?

- [x] Contents Box 렌더 마무리
- [x] Carousel 버그 수정
  - PR 을 보낼 때 다시 확인해봤는데, MainBox 의 카테고리 이동시의 Carousel Interval 을 Clear 하는 것은 해결했는데, Header 의 Category 이동시의 Clear 하는 것을 생각을 놓쳐서 이 부분을 다시 수정할 예정입니다..
- [ ] 슬라이더 버튼 추가
- [x] v2(카카오페이지 api response를 긁어온) api 로 데이터 구조 바꿔보기

### ✅ PR 리뷰에서 개선한 점

- Dony 와 Inu 의 라이브 리뷰를 보고서 폴더구조를 대등한 역할을 하는 것들로 묶어야겠다는 생각이 들어 제 나름의 생각으로 폴더구조를 짜보았는데 제가 파일을 찾을땐 확실히 더 편해졌다는 느낌을 받았습니다, 그런데 이게 다른사람의 눈에 어떨지가 궁금해졌습니다.

- 되도록 매직넘버를 사용하지 않도록 변수명에 특정 숫자를 넣어서 사용하는 식으로 사용해보았습니다.

- 긴 콜백함수는 줄여보도록 노력했습니다.

### 궁금한점?

- <a href="https://github.com/codesquad-members-2022/fe-kakaopage/pull/160#discussion_r817391378">prototype 패턴으로 메서드를 만드는 것과 생성자패턴의 함수로 만드는 것</a>을 말씀해주셨는데
  `객체를 여러개 생성하는게 아니면 함수로 구현해도 되긴 하다` 라는 것이 `그렇게 해야한다` 는 아닌 것으로 이해를 했는데요, 저는 코드의 통일성을 위해 prototype 패턴으로 메서드를 만들어 사용하는게 더 좋다고 생각이 들었습니다. 이 생각을 계속 가져가도 될까요?

- 구조분해할당을 하기위한 요소가 10개 이상이 넘어가도, 사용하는게 맞을지 라는 생각이 들었습니다.

```js
const { title, image, rank, rating, age_grade, badge, read_count, waitfree } =
  webtoon;
```
