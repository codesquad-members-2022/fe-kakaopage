# Flexbox

1. 컨테이너를 꾸미는 속성값과 아이템 각각을 꾸미는 속성값이 있다.
2. 축 2개
   - main axis
   - cross axis
   - 축은 수직이냐 수평이냐에 따라 달라짐

## `container`

- display
  - flex
- flex-direction
  - row (기본)
  - row-reverse
  - column
  - column-reverse
- flex-wrap
  - nowrap (기본)
  - wrap : 아이템이 한 줄에 꽉 차면 자동으로 다음 줄로
  - wrap-reverse
- flex-flow
  - `flex-direction`과 `flex-wrap`을 합친 것
- justify-content : `중심축`에서 아이템을 어떻게 배치할 것인지
  - flex-start (기본) : 왼쪽에서 오른쪽 or 위에서 아래로
  - flex-end
  - center
  - space-around : 박스 둘러싸게 space 넣어줌
  - space-evenly
  - space-between
- align-items : `반대축`에서 아이템을 어떻게 배치할 것인지
  - baseline : 텍스트 균등하게 baseline에 맞춰서
- align-content : `반대축`에서 아이템을 배치
  - `justify-content` 랑 동일

## `item`

- order: 아이템 순서 바꿈
- flex-grow : 컨테이너 늘어났을 때
  - 0 (기본값): 늘어나지 않음
  - 1 : 늘어남
  - 2 : 1보다 두 배로 늘어남
- flex-shrink : 컨테이너 줄어들었을 때
  - 0 (기본값)
  - 1
  - 2 : 두 배로 작게 줄어듦
- flex-basis: 아이템이 공간을 얼마나 차지하는지
  - auto
  - 60%
- align-self: 아이템 별로 아이템을 정렬
  - center

### 1. 컨테이너
