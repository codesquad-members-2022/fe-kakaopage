const gnb = document.querySelector(".gnb ul");
const lnb = document.querySelector(".lnb ul");
const dayNav = document.querySelector(".day_nav ul");

gnb.addEventListener("click", (e) => {
    const eventTarget = e.target;
    toActivateNav(eventTarget, gnb);
})

lnb.addEventListener("click", (e) => {
    const eventTarget = e.target;
    toActivateNav(eventTarget, lnb);
})

dayNav.addEventListener("click", (e) => {
    const eventTarget = e.target;
    toActivateNav(eventTarget, dayNav);
})

function toActivateNav(target, nav) {
    const clickTarget = target.closest('li');
    const currentActive = nav.querySelector('.active');
    currentActive.classList.remove('active');
    clickTarget.classList.add('active');
}