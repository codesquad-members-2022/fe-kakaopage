import {dailyTopData} from './scrape/dailyTopData.js'

const getToday = (data) => {
  const today = new Date().getDay();
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const filterData = data.filter((el) => el.day.includes(day[today]) && !(el.review.includes('위')));

  return filterData;
}

const todayWebtoonsData = getToday(dailyTopData);

export {todayWebtoonsData}