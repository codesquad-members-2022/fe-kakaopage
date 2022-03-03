const formatUserCount = (userCount) => {
  return (userCount / 10000).toFixed(1) + "만명";
};

const getComponentsTemplate = (components) => {
  return components?.reduce((tags, component) => {
    tags += component.template();
    return tags;
  }, "");
};

const getKoreaDay = () => {
  const day = new Date().getDay();
  const days = ["일", "월", "화", "수", "목", "금", "토", "완결"];
  return days[day];
};

export { formatUserCount, getComponentsTemplate, getKoreaDay };
