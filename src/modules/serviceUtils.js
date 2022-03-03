const formatUserCount = (userCount) => {
  return (userCount / 10000).toFixed(1) + "만명";
};

const getComponentsTemplate = (components) => {
  return components?.reduce((tags, component) => {
    tags += component.template();
    return tags;
  }, "");
};

const getKoreaDays = () => {
  return ["일", "월", "화", "수", "목", "금", "토", "완결"];
};
const getKoreaDay = () => {
  const day = new Date().getDay();
  const days = getKoreaDays();
  return days[day];
};

export { formatUserCount, getComponentsTemplate, getKoreaDay, getKoreaDays };
