export const createDummyImgTag = (path) => {
  const dummyImg = document.createElement("img");
  dummyImg.setAttribute("src", `../../image/dummy-${path}.png`);
  dummyImg.setAttribute("width", "720px");
  return dummyImg;
};
