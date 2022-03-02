const formatUserCount = (userCount) => {
  return (userCount / 10000).toFixed(1) + "만명";
};

const getComponentsTemplate = (components) => {
  return components?.reduce((tags, component) => {
    tags += component.template();
    return tags;
  }, "");
};

export { formatUserCount, getComponentsTemplate };
