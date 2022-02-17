# Flexbox

https://studiomeal.com/archives/197

1. 컨테이너를 꾸미는 속성값과 아이템 각각을 꾸미는 속성값이 있다.
2. 축 2개

   - `main axis` : 아이템이 배치된 방향의 축
   - `cross axis` : 메인축과 수직인 축
   - 축은 수직이냐 수평이냐에 따라 달라짐

3. Flex 아이템은 가로 방향으로 배치되고, 자신이 가진 내용물의 width 만큼만 차지하게 된다. (inline 요소처럼)
   - height은 컨테이너의 높이만큼 늘어남

## `container`

### `display`

- flex

### `flex-direction`

- 배치 방향 결정
  - 메인축의 방향이 가로 or 세로인지 결정하는 속성
- row (기본)
- row-reverse
- column
- column-reverse

### `flex-wrap`

- 줄넘김 처리 설정
  - 컨테이너가 아이템들을 더 이상 한 줄에 담을 수 없을 때 줄바꿈 결정하는 속성
- nowrap (기본)
  - 줄바꿈 x, 넘치면 아이템 탈출
- wrap
  - 줄바꿈 o, float나 inline-block으로 배치한 요소들과 비슷하게 동작
- wrap-reverse
  - 줄바꿈 o, 아이템 역순

### `flex-flow`

- `flex-direction`과 `flex-wrap`을 합친 것

### `justify` vs `align`

- justify
  - 메인축 방향으로 정렬
- align
  - 수직축 방향으로 정렬

### `justify-content` : `중심축`에서 아이템을 어떻게 배치할 것인지

- flex-start (기본)
  - 시작점으로 정렬
- flex-end
  - 끝점으로 정렬
- center
  - 가운데로 정렬
- space-between
  - 아이템 '사이(between)'에 균일한 간격 넣어줌
- space-around
  - 아이템 '둘레(around)'에 균일한 간격 넣어줌
- space-evenly
  - 아이템의 사이와 양 끝에 균일한 간격 넣어줌

### `align-items`

- 반대축`에서 아이템을 어떻게 배치할 것인지
- stretch
  - 아이템들이 수직축 방향으로 끝까지 늘어남
- flex-start
- flex-end
- center
- baseline
  - 아이템들을 텍스트 베이스라인 기준으로 정렬

### align-content

- 여러 행 정렬
- `flex-wrap:wrap;`이 설정된 상태에서, 아이템의 행이 2줄 이상 되었을 때 수직축 방향 설정하는 속성

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
