import ItemSet from './ItemSet.js';
import StopFlag from './StopFlag.js';
export default class CarouselSlider {
  constructor({ elementWidth, createItemElFunc, prevBtnEl, nextBtnEl, timer }) {
    this.sliderEl = document.querySelector('.slider');
    this.elementWidth = elementWidth;
    this.createItemEl = createItemElFunc;
    this.timer = timer;
    this.state = null;
    this.itemSet = null;
    this.prevBtnEl = prevBtnEl;
    this.nextBtnEl = nextBtnEl;
    this.stopFlag = new StopFlag();
    this.prevBtnEl.addEventListener('click', this.onPrevBtn.bind(this));
    this.nextBtnEl.addEventListener('click', this.onNextBtn.bind(this));
    this.sliderEl.addEventListener(
      'transitionend',
      this.transitionEnd.bind(this)
    );
  }
  onPrevBtn() {
    if (this.stopFlag.isTrue()) return;
    this.stopFlag.setTrue();
    this.timer.clearTimer();
    this.timer.setTimer(2);
    const { itemSet } = this;
    if (itemSet.getLength() === 1) return;
    this.moveToPrevPage();
    itemSet.decreaseIdx();
    this.setStateFirst();
  }
  onNextBtn() {
    if (this.stopFlag.isTrue()) return;
    this.stopFlag.setTrue();
    this.timer.clearTimer();
    this.timer.setTimer(2);
    const { itemSet } = this;
    if (itemSet.getLength() === 1) return;
    this.moveToNextPage();
    itemSet.increaseIdx();
    this.setStateLast();
  }
  transitionEnd() {
    const { sliderEl, itemSet } = this;
    this.offTransition();
    if (this.isFirstPage()) {
      console.log('firt');
      const prevItem = itemSet.getPrevItem();
      const prevItemEl = this.createItemEl(prevItem);
      sliderEl.removeChild(sliderEl.lastElementChild);
      sliderEl.insertBefore(prevItemEl, sliderEl.firstElementChild);
    }
    if (this.isLastPage()) {
      console.log('last');
      const nextItem = itemSet.getNextItem();
      const nextItemEl = this.createItemEl(nextItem);
      sliderEl.removeChild(sliderEl.firstElementChild);
      sliderEl.appendChild(nextItemEl);
    }
    this.setPageMid();
    setTimeout(() => {
      this.stopFlag.setFalse();
    }, 200);
  }
  initItemSet(itemSet) {
    this.itemSet = new ItemSet(itemSet);
  }
  clearItemSet() {
    this.itemSet = null;
  }
  initSlideList() {
    const { items, length } = this.itemSet;
    this.offTransition();
    this.setPageMid();

    if (length === 1) {
      const firstItem = items[0];
      this.sliderEl.appendChild(this.createItemEl(firstItem));
      this.sliderEl.appendChild(this.createItemEl(firstItem));
      this.sliderEl.appendChild(this.createItemEl(firstItem));
      return;
    }

    const targetItems = [items[length - 1], items[0], items[1]];
    targetItems.forEach((targetItem) => {
      this.sliderEl.appendChild(this.createItemEl(targetItem));
    });
    this.stopFlag.setFalse(); // 다른 카테고리의 슬라이드를 넘기다가 카테고리 전환한 경우 stopFlag 초기화
    return;
  }
  setStateFirst() {
    this.state = 'first';
  }
  setStateLast() {
    this.state = 'last';
  }
  setStateMid() {
    this.state = 'mid';
  }
  moveToPrevPage() {
    this.onTransition();
    this.sliderEl.style.transform = `translate3D(0, 0, 0)`;
  }
  moveToNextPage() {
    this.onTransition();
    this.sliderEl.style.transform = `translate3D(-${
      this.elementWidth * 2
    }px, 0, 0)`;
  }
  setPageFirst() {
    this.sliderEl.style.transform = `translate3D(0, 0, 0)`;
    this.setStateFirst();
  }
  setPageMid() {
    this.sliderEl.style.transform = `translate3D(-${this.elementWidth}px, 0, 0)`;
    this.setStateMid();
  }
  isFirstPage() {
    return this.state === 'first';
  }
  isLastPage() {
    return this.state === 'last';
  }
  onTransition() {
    this.sliderEl.style.transition = 'transform 300ms';
  }
  offTransition() {
    this.sliderEl.style.transition = 'none';
  }
}
