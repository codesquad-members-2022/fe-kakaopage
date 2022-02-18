function handleNavFocusIn(e) {
  const linkTag = e.target.parentElement;
  const listTags = linkTag.parentElement.querySelectorAll("li");

  listTags.forEach((el) => {
    el.classList.remove("underline--yellow");
  });
  linkTag.classList.add("underline--yellow");
}

const navLink = document.querySelectorAll(".main-banner__nav__link");

navLink.forEach((el) => {
  el.addEventListener("focusin", handleNavFocusIn);
});
