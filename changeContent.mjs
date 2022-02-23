export { changeContent };

const changeContent = (items, info) => {
  items.forEach((item, index) => {
    item.firstElementChild.firstElementChild.src = info[index].img;
    item.firstElementChild.nextElementSibling.firstChild.nodeValue =
      info[index].title;
    item.firstElementChild.nextElementSibling.nextElementSibling.lastChild.nodeValue =
      info[index].user;
  });
};
