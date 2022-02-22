import { renderCarousel } from '../articles/carousel.js';
import { renderSubCategory } from '../articles/subCategory.js';
import { renderMainChildDOM } from '../utils.js';

export const Webtoon = async (subCategoryUid) => {
  const subCategory = renderSubCategory(subCategoryIndexArr);
  const carousel = renderCarousel(mock_carouselElementArr);
  const eventBox = `Webtoon`;
  const evenCarouel = `Webtoon`;
  const mainContent = `Webtoon`;
  return renderMainChildDOM({
    subCategory,
    carousel,
    eventBox,
    evenCarouel,
    mainContent,
  });
};

// mock: 임시데이터 - categoryUid에 해당하는 데이터를 서버에서 불러올 예정
const subCategoryIndexArr = [
  '홈',
  '요일연재',
  '웹툰',
  '소년',
  '드라마',
  '로맨스',
  '로판',
  '액션무협',
  'BL',
];

const mock_carouselElementArr = [
  {
    title: '홈 서브 카테고리',
    views: 25.6,
    genre: '웹툰',
    subTitle: '홈 서브 카테고리: 서브 타이틀 입니다',
    imgUrl:
      'https://dn-img-page.kakao.com/download/resource?kid=c0XBz/hzp2jFzCR9/JCvx5dagQ345yKhVf2m5SK',
  },
  {
    title: '요일연재 서브 카테고리',
    views: 30.6,
    genre: '웹툰',
    subTitle: '요일연재 서브 카테고리: 서브 타이틀 입니다',
    imgUrl:
      'https://dn-img-page.kakao.com/download/resource?kid=bJ0Aku/hzp2moMU6e/cEihkdBNG70ikK3gfKUK81',
  },
  {
    title: '웹툰 서브 카테고리',
    views: 10.2,
    genre: '웹툰',
    subTitle: '웹툰 서브 카테고리: 서브 타이틀 입니다',
    imgUrl:
      'https://dn-img-page.kakao.com/download/resource?kid=b1GVlh/hzp2nOLuZJ/qq3oH7NLIRt6ApNh6TadUK',
  },
];
