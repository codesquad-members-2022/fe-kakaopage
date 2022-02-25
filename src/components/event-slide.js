function createEventSlide() {
  const div = `
  <div class="event-slide">
    <div class="event-img">
        <img src="https://dn-img-page.kakao.com/download/resource?kid=jySqs/hzmU1hjQwo/MUcpK0XEI9k4AfWbJBfkZk" alt="">
    </div>
    <div class="event-section-controller">
        <button class="event-section-prevBtn"><</button>
        <span>1 / 8</span>
        <button class="event-section-nextBtn">></button>
    </div>
  </div>
  `;
  return div;
}

export { createEventSlide };
