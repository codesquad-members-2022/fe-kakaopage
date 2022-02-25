function handleBannerNavFocus(e) {
  const listTag = e.target.parentElement;
  const listTags = listTag.parentElement.querySelectorAll("li");

  listTags.forEach((el) => {
    el.classList.remove("underline--yellow");
  });
  listTag.classList.add("underline--yellow");
}

function handleMainNavFocus(e) {
  const listTag = e.target.parentElement;
  const listTags = listTag.parentElement.querySelectorAll("span");

  listTags.forEach((el) => {
    el.classList.remove("font--black");
  });
  listTag.querySelector("span").classList.add("font--black");
}

const bannerNavLink = document.querySelectorAll(".main-banner__nav__link");
const mainNavLink = document.querySelectorAll(".main__nav__link");

bannerNavLink.forEach((el) => {
  el.addEventListener("focusin", handleBannerNavFocus);
});

mainNavLink.forEach((el) => {
  el.addEventListener("focusin", handleMainNavFocus);
});
