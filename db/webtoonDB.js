const { ELEMENT_ID } = require('./subCategoryID');

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

function webtoonData(subUid) {
  const tempUid = subUid > 1 ? 0 : subUid;
  return {
    [`${SUB_CATEGORY}`]: subCategoryIndexArr,
    [`${CAROUSEL}`]: carouselElement[tempUid],
    [`${EVENT_BOX}`]: `Webtoon`,
    [`${EVENT_CAROUSEL}`]: `Webtoon`,
    [`${MAIN_CONTENT}`]: `Webtoon`,
  };
}

module.exports = webtoonData;

const subCategoryIndexArr = [
  { key: 0, value: '홈' },
  { key: 1, value: '요일연재' },
  { key: 2, value: '웹소설' },
  { key: 3, value: '판타지' },
  { key: 4, value: '현판' },
  { key: 5, value: '로맨스' },
  { key: 6, value: '로판' },
  { key: 7, value: '무협' },
  { key: 8, value: '판드' },
  { key: 9, value: 'BL' },
];

// key: subCategoryUid
const carouselElement = {
  0: [
    {
      title: '웹툰-홈-프론트',
      views: 25.6,
      genre: '웹툰',
      subTitle: '웹툰-홈-프론트: 서브 타이틀 입니다',
      imgUrl:
        'https://dn-img-page.kakao.com/download/resource?kid=c0XBz/hzp2jFzCR9/JCvx5dagQ345yKhVf2m5SK',
    },
    {
      title: '웹툰-홈-백앤드',
      views: 30.6,
      genre: '웹툰',
      subTitle: '웹툰-홈-백앤드: 서브 타이틀 입니다',
      imgUrl:
        'https://dn-img-page.kakao.com/download/resource?kid=bJ0Aku/hzp2moMU6e/cEihkdBNG70ikK3gfKUK81',
    },
    {
      title: '웹툰-홈-디자인',
      views: 10.2,
      genre: '웹툰',
      subTitle: '웹툰-홈-디자인: 서브 타이틀 입니다',
      imgUrl:
        'https://dn-img-page.kakao.com/download/resource?kid=b1GVlh/hzp2nOLuZJ/qq3oH7NLIRt6ApNh6TadUK',
    },
  ],
  1: [
    {
      title: '웹툰-요일연재-프론트',
      views: 25.6,
      genre: '웹툰',
      subTitle: '웹툰-요일연재-프론트: 서브 타이틀 입니다',
      imgUrl:
        'https://dn-img-page.kakao.com/download/resource?kid=QpMhL/hzp2iNusyJ/G1E8OHQzA7zCy0huCDQZgK',
    },
    {
      title: '웹툰-요일연재-백앤드',
      views: 30.6,
      genre: '웹툰',
      subTitle: '웹툰-요일연재-백앤드: 서브 타이틀 입니다',
      imgUrl:
        'https://dn-img-page.kakao.com/download/resource?kid=ZwJLy/hzp2mI9q0I/fyvtctMm1oabdBd1XTkAZ1',
    },
    {
      title: '웹툰-요일연재-디자인',
      views: 10.2,
      genre: '웹툰',
      subTitle: '웹툰-요일연재-디자인: 서브 타이틀 입니다',
      imgUrl:
        'https://dn-img-page.kakao.com/download/resource?kid=bBKRjp/hzp2mPR87I/ZKcDxkikUCzgNJUth3F3i0',
    },
  ],
};
