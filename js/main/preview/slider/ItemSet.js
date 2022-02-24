export default class ItemSet {
  constructor(items) {
    this.items = items; // 배열
    this.length = this.items.length;
    this.curIdx = 0;
  }
  getItems() {
    return this.items;
  }
  getPrevItem() {
    const prevIdx = this.getPrevIdx();
    return this.items[prevIdx];
  }
  getNextItem() {
    const nextIdx = this.getNextIdx();
    return this.items[nextIdx];
  }
  getCurIdx() {
    return this.curIdx;
  }
  getPrevIdx() {
    if (this.curIdx === 0) return this.length - 1;
    return this.curIdx - 1;
  }
  getNextIdx() {
    if (this.curIdx === this.length - 1) return 0;
    return this.curIdx + 1;
  }
  decreaseIdx() {
    this.curIdx = this.getPrevIdx();
  }
  increaseIdx() {
    this.curIdx = this.getNextIdx();
  }
  getLength() {
    return this.length;
  }
}
