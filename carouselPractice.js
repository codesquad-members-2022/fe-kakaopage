const $container = document.querySelector(".container");
const $previousIcon = document.querySelector(".previous__icon");
const $nextIcon = document.querySelector(".next__icon");
const $slideList = document.querySelector(".slide__list");
const liCount = $slideList.childElementCount;

const findSelectedImgNumber = () => {
  const $selectedImg = document.querySelector(".selected");
  $selectedImg.className = $selectedImg.className.replace(" selected", "");
  const classNames = $selectedImg.className;
  const selectedImgNumbers = classNames
    .split("")
    .filter((className) => Number.isInteger(parseInt(className, 10)));

  const selectedImgNumber = parseInt(selectedImgNumbers.join(""), 10);

  return selectedImgNumber;
};

$previousIcon.addEventListener("click", (event) => {
  $slideList.style.transition = "all 0.5s ease-out";
  const selectedImgNumber = findSelectedImgNumber();
  const nextImgNumberRemaindar =
    selectedImgNumber - 1 === 0 ? liCount : (selectedImgNumber - 1) % liCount;
  const currentImgNumber = nextImgNumberRemaindar;
  const $selectedImg = document.querySelector(`.slide__img${currentImgNumber}`);
  $selectedImg.className += " selected";
  $slideList.style.transform = `translateX(-${(currentImgNumber - 1) * 100}%)`;
});
$nextIcon.addEventListener("click", (event) => {
  const selectedImgNumber = findSelectedImgNumber();
  const nextImgNumberRemaindar = (selectedImgNumber + 1) % liCount;
  let currentImgNumber = nextImgNumberRemaindar;
  const $selectedImg = document.querySelector(`.slide__img${currentImgNumber}`);
  $selectedImg.className += " selected";

  if (currentImgNumber === 0) {
    $selectedImg.style.display = "inline";
    $slideList.style.transform = "none";
    $slideList.style.transition = "none";
    currentImgNumber = 1;
  } else {
    $slideList.style.transform = `translateX(-${
      (currentImgNumber - 1) * 100
    }%)`;
    $slideList.style.transition = "all 0.5s ease-out";
  }
});
