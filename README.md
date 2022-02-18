# 💣 삽질기
1. axios, cheerio 를 사용하여 크롤링하려 했으나 일부만 받아와진다.
2. json 파일이 fetch가 안되서ㅠ_ㅠ js로 일단 수정..
3. template 태그를 써보고 싶어서 공부했으나 여러 곳에 적용하기 한계가 있어보여 다시 innerHTML로..
4. html이랑 css는 주말에 리팩토링하기axios, cheerio 를 사용하여 크롤링하려 했으나 일부만 받아와진다.


# 구현결과
1. 페이지 로드 시, 오늘 요일의 탭이 활성화
2. 탭 클릭 시, 클릭한 탭에 맞는 content가 렌더

[데모 페이지](https://jindonyy.github.io/fe-kakaopage/webtoon.html)  
![dayTopTab](https://user-images.githubusercontent.com/17706346/154622871-9c76c544-6c4e-4e6a-8121-07cfc4381746.gif)

# 고민
1. 나중에 싱글페이지가 될 걸 생각하고 역할(요일 연재 TOP)이 아니라 하단과 다른 페이지에서 계속 반복되는가로로 5개인 형태(gradeRow)로 컴포넌트를 나눴다. 너무 작은 단위일까??
2. json 파일도 어디에 쓰이냐에 따라 파일을 여러개로 나누려 했는데 괜찮을까??
3. js 관련 디렉토리를 어떻게 하면 좋을지 고민.. 보통 어떻게 나누는지 간략하게라도 설명해주실 수 있을까??
4. 이전에 활성화된 탭의 클래스를 없애려다보니 전역 변수로 dayTopActiveTab을 썼는데 어찌해결하면 좋을지 고민..


# 개선할 점
1. json 파일 fetch하기