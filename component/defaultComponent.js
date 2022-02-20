const defaultDisplay = `<div class="containEvery">
<section class="recommand">
  <nav class="recommand__nav">
    <ul class="recommand__nav--ul">
      <li>홈</li>
      <li>요일연재</li>
      <li>웹툰</li>
      <li>소년</li>
      <li>드라마</li>
      <li>로맨스</li>
      <li>액션무협</li>
      <li>BL/GL</li>
    </ul>
  </nav>
  <main class="recommand__image">
    <div class="recommand__image--container">
      <ul class="recommand__image--wrapper">
        <!-- 이부분 너무 하드코딩인데... -->
        <li class="recommand__image--img">
          <img src="./pageImage/katana.jpg" class="rec--cartoonImg" />
        </li>
        <li class="recommand__image--img">
          <img src="./pageImage/lisa.jpg" class="rec--cartoonImg" />
        </li>
        <li class="recommand__image--img">
          <img src="./pageImage/skul.jpg" class="rec--cartoonImg" />
        </li>
        <li class="recommand__image--img">
          <img src="./pageImage/mother.png" class="rec--cartoonImg" />
        </li>
      </ul>

      <div class="recommand__image--controller">
        <span class="next"></span>
        <span class="prev"></span>
        <!--이부분 next 와 prev 순서가 js 제어중 바꾸었다...-->
      </div>

      <div class="recommand__image--pageCount">1 / 3</div>
    </div>

    <div class="recommand__description">설명란</div>
  </main>
</section>

<section class="main">
  <nav class="main__nav__dow">
    <ul class="main__nav__dow--ul">
      <li>월</li>
      <li>화</li>
      <li>수</li>
      <li>목</li>
      <li>금</li>
      <li>토</li>
      <li>일</li>
      <li>완결</li>
    </ul>
  </nav>
  <nav class="main__nav--toggle">
    <ul class="main--toggle--left">
      <li>전체</li>
      <li>웹툰</li>
      <li>웹툰</li>
    </ul>
    <div class="main--toggle--right">전체 (129)</div>
  </nav>
  <ul class="main__cartoonZone">
    <li class="main__cartoonZone__cell">
      <div class="main__cartoonZone--imageWrapper">
        <img
          src="./pageImage/madothuki.png"
          class="main__cartoonZone--image"
        />
        <div class="main__cartoonZone--imgTag">
          <span class="main__cartoonZone--imgTagLeft">TOP</span>
          <span class="main__cartoonZone--imgTagRight">인기</span>
        </div>
      </div>
      <div class="main__cartoonZone--info">
        <span class="main__cartoonZone--title">제목</span>
        <span class="main__cartoonZone--hiddenInfo">숨겨진 설명</span>
        <span class="main__cartoonZone--description">
          <span>조회</span>
          <span>설명</span>
        </span>
      </div>
    </li>
  </ul>
</section>
</div>`;

export { defaultDisplay };
