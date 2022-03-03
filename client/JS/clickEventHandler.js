import { onNavClickHandler } from "./onNavClickHandler.js";
import { selector } from "./utility.js";
import { adsInfo } from "./dataEditor.js";
import { getAds } from "./parts.js";

const getTargetInfo = (image) => {
  const firstImageNumber = selector("img", image).getAttribute("alt");
  let target = adsInfo;
  while (target.number !== Number(firstImageNumber)) target = target.post;
  return target.post.post;
};

const getNewImages = (image) => {
  const targetInfo = getTargetInfo(image);
  const newImages = getAds(targetInfo);
  image.innerHTML = newImages;
};

const onAdsRightClick = () => {
  let length = 0;
  const image = selector(".ads__image");
  const { style } = image;
  const lengthInterval = 10;
  const moveImage = () => {
    style.left = `${-length}%`;
    if (length < 100) {
      length += lengthInterval;
      window.requestAnimationFrame(moveImage);
    }
  };
  getNewImages(image);
  moveImage();
};

const onAdsClickHandler = ({ className }) => {
  if (className.includes("right")) onAdsRightClick();
};

const clickEventHandler = ({ target }) => {
  const section = target.closest("section");
  const ul = target.closest("UL");
  const nav = target.closest("nav");
  if (ul && nav) onNavClickHandler(ul, nav.className);
  if (section) if (section.className === "ads") onAdsClickHandler(target);
};

export { clickEventHandler };
