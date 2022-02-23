export default class ImageCarousel {
  constructor(images) {
    this.images = images;
    this.length = this.images.length;
    this.curIdx = 0;
    console.log(this);
  }
  getPrevImage() {
    const prevIdx = this.getPrevIdx();
    return this.images[prevIdx];
  }
  getNextImage() {
    const nextIdx = this.getNextIdx();
    return this.images[nextIdx];
  }
  getCurIdx() {
    return this.curIdx;
  }
  getPrevIdx() {
    if (this.curIdx === 0) return this.length - 1;
    else return this.curIdx - 1;
  }
  getNextIdx() {
    if (this.curIdx === this.length - 1) return 0;
    else return this.curIdx + 1;
  }
  decreaseIdx() {
    this.curIdx = this.getPrevIdx();
  }
  increaseIdx() {
    this.curIdx = this.getNextIdx();
  }
}
