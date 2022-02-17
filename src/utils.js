const updateSelectedNode = (nodeList, target) => {
  [...nodeList.children].forEach((node) => {
    node.classList.remove("selected");
  });
  target.classList.add("selected");
};

export { updateSelectedNode };
