import {$} from './utility.js';

export default class Slider {
  constructor(container, list) {
    this.container = $(`${container}`)
    this.list = $(`${container} ${list}`);
    this.items = null;
    this.width = null;

    this.counter = 1;
    this.interval = 3000;
    this.duration = 700;

    this.autoSlideTimer = false;
    this.throttleTimer = false;
  }

  init() {
    this.makeCloneNode();
    this.items = this.list.children;
    this.width = this.list.firstElementChild.offsetWidth;
    this.list.style.transform = `translate(${-this.width * this.counter}px)`;

    this.clickSlideBtns();
    this.transitionEnd();
    this.startAutoSlide();
    this.pauseSlide();
  }

  makeCloneNode() {
    const firstNode = this.list.firstElementChild.cloneNode(true);
    const lastNode = this.list.lastElementChild.cloneNode(true);
    firstNode.classList.add('cloneFirstNode');
    lastNode.classList.add('cloneLastNode');

    this.list.appendChild(firstNode);
    this.list.insertBefore(lastNode, this.list.firstChild);
  }

  startAutoSlide() {
    this.autoSlideTimer = setTimeout(() => {
      this.moveNextSlide();
      this.startAutoSlide();
    }, this.interval);
  }

  stopAutoSlide() {
    clearTimeout(this.autoSlideTimer);
  }

  throttle(callback, delay) {
    if (!this.throttleTimer) {
      this.throttleTimer = setTimeout(() => {
        this.throttleTimer = false;
        callback();
      }, delay);
    }
  }

  clickSlideBtns() {
    const nextBtn = this.container.querySelector('.banner__next');
    const prevBtn = this.container.querySelector('.banner__prev');
    const DELAY = this.duration;

    nextBtn.addEventListener('click', () => {
      this.throttle(() => this.moveNextSlide(), DELAY);
    });

    prevBtn.addEventListener('click', () => {
      this.throttle(() => this.movePrevSlide(), DELAY);
    });
  }

  movePrevSlide() {
    if (this.counter < 1) return;
    this.counter--;
    this.list.style.transform = `translate(${-this.width * this.counter}px)`;
    this.list.style.transition = `transform ${this.duration}ms`;

    $('.banner__count .now').innerText = this.items[this.counter].dataset.index;
  }

  moveNextSlide() {
    if (this.counter > this.items.length - 1) return;
    this.counter++;
    this.list.style.transform = `translate(${-this.width * this.counter}px)`;
    this.list.style.transition = `transform ${this.duration}ms`;

    $('.banner__count .now').innerText = this.items[this.counter].dataset.index;
  }

  transitionEnd() {
    this.list.addEventListener('transitionend', () => {
      if (this.items[this.counter].classList.contains('cloneFirstNode')) {
        this.counter = this.items.length - this.counter;
        this.list.style.transition = 'none';
        this.list.style.transform = `translate(${-this.width * this.counter}px)`;
      }

      if (this.items[this.counter].classList.contains('cloneLastNode')) {
        const TO_LASTNODE = 2;
        this.counter = this.items.length - TO_LASTNODE;
        this.list.style.transition = 'none';
        this.list.style.transform = `translate(${-this.width * this.counter}px)`;
      }
    });
  }

  pauseSlide() {
    this.container.addEventListener('mouseenter', () => this.stopAutoSlide());
    this.container.addEventListener('mouseleave', () => this.startAutoSlide());
  }
}