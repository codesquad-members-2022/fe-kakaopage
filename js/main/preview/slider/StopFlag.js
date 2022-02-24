export default class stopFlag {
  constructor() {
    this.value = false;
  }
  setTrue() {
    this.value = true;
  }
  setFalse() {
    this.value = false;
  }
  isTrue() {
    return this.value;
  }
}
