const formatUserCount = (userCount) => {
  return (userCount / 10000).toFixed(1) + "만명";
};

const getComponentsTemplate = (components) => {
  return components?.reduce((tags, component) => {
    tags += component.template();
    return tags;
  }, "");
};

const getDay = () => {
  const day = new Date().getDay();
  const SUNDAY = 0;
  const SUNDAY_FOR_SERVICE = 7;
  return day === SUNDAY ? SUNDAY_FOR_SERVICE : day;
};

const getKoreaDays = () => {
  return ["일", "월", "화", "수", "목", "금", "토", "완결"];
};
const getKoreaDay = () => {
  const day = new Date().getDay();
  const days = getKoreaDays();
  return days[day];
};

export {
  formatUserCount,
  getComponentsTemplate,
  getDay,
  getKoreaDay,
  getKoreaDays,
};
