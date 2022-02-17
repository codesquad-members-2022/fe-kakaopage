
const navLink = document.querySelectorAll(".main-banner__nav__link");

function handleNavFocusIn(e) {
    const linkTag = e.target.parentElement;
    linkTag.classList.add("underline--yellow")
}

function handleNavFocusOut(e) {
    const linkTag = e.target.parentElement;
    linkTag.classList.remove("underline--yellow")
}

navLink.forEach(el => {
    el.addEventListener("focusin", handleNavFocusIn);
})

navLink.forEach(el => {
    el.addEventListener("focusout", handleNavFocusOut);
})



