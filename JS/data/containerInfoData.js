const DAILY_ITEMS = 10;
const TOP_ITEMS = 5;

const containerInfo = {
  dailyTop: {
    class: 'daily__top',
    title: '요일 연재 TOP',
    items: DAILY_ITEMS,
    layout: 'cardLayout'
  },
  romenceTop: {
    class: 'romance__top',
    title: '로맨스 TOP',
    items: TOP_ITEMS,
    layout: 'cardLayout'
  },
  dailyRanking: {
    class: 'daily__ranking',
    title: '일간랭킹 TOP',
    items: TOP_ITEMS,
    layout: 'ranking'
  },
  event: {
    class: 'event',
    title: '추천 이벤트',
    items: null,
    layout: 'event'
  }
}

export {containerInfo}