export default class Timer {
  constructor({ $prevBtn, $nextBtn, intervalTime }) {
    this.timerId = null;
    this.$prevBtn = $prevBtn;
    this.$nextBtn = $nextBtn;
    this.intervalTime = intervalTime;
  }
  setTimer() {
    this.timerId = setInterval(() => {
      this.$nextBtn.click();
    }, this.intervalTime * 1000);
  }
  clearTimer() {
    if (!this.exists()) return;
    clearInterval(this.timerId);
    this.timerId = null;
  }
  exists() {
    return !!this.timerId;
  }
}
