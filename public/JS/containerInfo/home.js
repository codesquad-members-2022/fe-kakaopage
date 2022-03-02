const DAILY_ITEMS = 10;
const TOP_ITEMS = 5;

const homeContainerInfo = {
  dailyTop: {
    class: 'daily__top',
    title: '요일 연재 TOP',
    items: DAILY_ITEMS,
    layout: 'SMALL_CARD'
  },
  romenceTop: {
    class: 'romance__top',
    title: '로맨스 TOP',
    items: TOP_ITEMS,
    layout: 'SMALL_CARD'
  },
  dailyRanking: {
    class: 'daily__ranking',
    title: '일간랭킹 TOP',
    items: TOP_ITEMS,
    layout: 'RANKING'
  },
  event: {
    class: 'event',
    title: '추천 이벤트',
    data: null,
    items: null,
    layout: 'EVENT'
  }
}

export {homeContainerInfo}