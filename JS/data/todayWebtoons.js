import dailyTopData from './json/dailyTopData.json' assert { type: "json"} ;

const getToday = (data) => {
  const today = new Date().getDay();
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  return data[day[today]];
}

const todayWebtoonsData = getToday(dailyTopData);

export {todayWebtoonsData}