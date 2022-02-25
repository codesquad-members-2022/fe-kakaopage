import {select, selectAll} from "../utils.js";
const INTERVAL = 3000;
export const carouselSlider= (target, idx) =>{
    let timeoutId;
    const box = select(target, '.BannerBox');
    const carousel = select(target, '.carousel');
    const nextBtn = select(target, '.nextBtn');
    const prevBtn = select(target, '.prevBtn');
    const page = select(target, '.page');
    const firstClone = carousel.firstElementChild.cloneNode(true);
    const lastClone = carousel.lastElementChild.cloneNode(true);
    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone '
    carousel.append(firstClone);
    carousel.prepend(lastClone)
    let slides = [...selectAll(target, '.slide')];
    const slideWidth = slides[idx].clientWidth;
    carousel.style.transform = `translateX(${-slideWidth * idx}px)`;
    let start = false
    const move = (direction) => {
        direction==='next'?idx++:idx--;
        start = true;
        carousel.style.transform = `translateX(${-slideWidth * idx}px)`;
        carousel.style.transition = 'transform 0.7s';
        page.innerText = `${idx-1} / ${slides.length-2}`
        requestAnimationFrame(startSlide)
    }
    const startSlide = ()=> {
        timeoutId = setTimeout(() => {
            move('next');
        }, INTERVAL);
    }
    requestAnimationFrame(startSlide);
    carousel.addEventListener('transitionend', () => {
        if (slides[idx].id === firstClone.id || slides[idx].id ===lastClone.id) {
            carousel.style.transition = 'none';
            slides[idx].id===firstClone.id? idx = 1: idx= slides.length-1;
            carousel.style.transform = `translateX(${-slideWidth * idx}px)`;
        }
        start = false;
    })
    nextBtn.addEventListener('click', () => {
        if (start) return;
        clearTimeout(timeoutId);
        move('next');
    })
    prevBtn.addEventListener('click', () => {
        if (start) return;
        clearTimeout(timeoutId);
        move('prev');
    })
}