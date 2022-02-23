const $container = document.querySelector(".container");
const $previousIcon = document.querySelector(".previous__icon");
const $nextIcon = document.querySelector(".next__icon");
const $slideList = document.querySelector(".slide__list");
const liCount = $slideList.childElementCount;

const findSelectedImgNumber = () => {
  const $selectedImg = document.querySelector(".selected");
  $selectedImg.className = $selectedImg.className.replace(" selected", "");
  const classNames = $selectedImg.className;

  const numbers = [];
  for (const className of classNames.split("")) {
    if (Number.isInteger(parseInt(className, 10))) {
      numbers.push(className);
    }
  }
  const selectedImgNumber = parseInt(numbers.join(""), 10);

  return selectedImgNumber;
};

$previousIcon.addEventListener("click", (event) => {
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
  const currentImgNumber =
    nextImgNumberRemaindar === 0 ? liCount : nextImgNumberRemaindar;
  const $selectedImg = document.querySelector(`.slide__img${currentImgNumber}`);
  $selectedImg.className += " selected";
  $slideList.style.transform = `translateX(-${(currentImgNumber - 1) * 100}%)`;
});
