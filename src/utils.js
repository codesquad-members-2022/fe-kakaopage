const updateSelectedNode = (nodeList, target) => {
  [...nodeList.children].forEach((node) => {
    node.classList.remove("selected");
  });
  target.classList.add("selected");
};

const getJson = (dataName) => {
  return new Promise((resolve) => {
    fetch(`../data/${dataName}.json`)
      .then((response) => response.json())
      .then((json) => resolve(json));
  });
};

export { updateSelectedNode, getJson };
