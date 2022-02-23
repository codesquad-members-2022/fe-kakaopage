import ItemSet from './ItemSet.js';

export default class CarouselSlider {
  constructor({ elementWidth, createItemElFunc }) {
    this.sliderEl = document.querySelector('.slider');
    this.elementWidth = elementWidth;
    this.state = null;
    this.createItemEl = createItemElFunc;
    this.itemSet = null;
  }
  initItemSet(itemSet) {
    this.itemSet = new ItemSet(itemSet);
  }
  clearItemSet() {
    this.itemSet = null;
  }
  initSlideList() {
    const { items, length } = this.itemSet;
    console.log(length);
    if (length === 1) {
      this.setPageFirst();
      const firstItem = items[0];
      this.sliderEl.appendChild(this.createItemEl(firstItem));
      return;
    }
    this.setPageMid();
    const targetItems = [items[length - 1], items[0], items[1]];
    targetItems.forEach((targetItem) => {
      this.sliderEl.appendChild(this.createItemEl(targetItem));
    });
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
    return this.staet === 'last';
  }
  onTransition() {
    this.sliderEl.style.transition = 'transform 300ms';
  }
  offTransition() {
    this.sliderEl.style.transition = 'none';
  }
}
