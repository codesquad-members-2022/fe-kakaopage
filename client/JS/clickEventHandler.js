import { onNavClickHandler } from "./onNavClickHandler.js";
import { selector } from "./utility.js";
import { adsInfo } from "./dataEditor.js";
import { getAds } from "./parts.js";

const getTargetInfo = (isRight) => {
  const targetDirection = isRight ? "post" : "pre";
  const firstImage = selector("img", selector(".ads__image")).getAttribute(
    "alt"
  );
  let target = adsInfo;
  while (target.number !== Number(firstImage)) target = target[targetDirection];
  return isRight ? target.post.post : target;
};

const getNewImages = (isRight) => {
  const targetInfo = getTargetInfo(isRight);
  const newImages = getAds(targetInfo);
  selector(".ads__image").innerHTML = newImages;
};

const onAdsBtnClick = (isRight) => {
  let length = 0;
  const image = selector(".ads__image");
  const { style } = image;
  const lengthInterval = 10;
  const moveImage = () => {
    style.left = isRight ? `${-length}%` : `${-200 + length}%`;
    if (length < 100) {
      length += lengthInterval;
      window.requestAnimationFrame(moveImage);
    }
  };
  getNewImages(isRight);
  moveImage();
};

const onAdsClickHandler = ({ className }) => {
  const isRight = className.includes("right");
  onAdsBtnClick(isRight);
};

const clickEventHandler = ({ target }) => {
  const section = target.closest("section");
  const ul = target.closest("UL");
  const nav = target.closest("nav");
  if (ul && nav) onNavClickHandler(ul, nav.className);
  if (section) if (section.className === "ads") onAdsClickHandler(target);
};

export { clickEventHandler };
