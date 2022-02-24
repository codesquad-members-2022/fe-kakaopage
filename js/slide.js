(function addEvent() {
  const $ = (selected) => document.querySelector(selected);
  const container = document.querySelector('.image_container');
  const totalSlide = container.childElementCount;
  $('.next').addEventListener(
    'click',
    translateContainer.bind(this, -1, container, totalSlide)
  );
  $('.back').addEventListener(
    'click',
    translateContainer.bind(this, 1, container, totalSlide)
  );
  startSlide(-1, container, totalSlide);
})();

function startSlide(direction, container, totalSlide) {
  setInterval(() => {
    translateContainer(direction, container, totalSlide);
  }, 3000);
}

function translateContainer(direction, container, totalSlide) {
  const selectedBtn = direction === 1 ? 'back' : 'next';
  container.style.transitionDuration = '700ms';
  container.style.transform = `translateX(${direction * (500 / totalSlide)}%)`;
  container.ontransitionend = () => changeLocationEl(container, selectedBtn);
}

function changeLocationEl(container, selectedBtn) {
  container.removeAttribute('style');
  selectedBtn === 'back'
    ? container.insertBefore(
        container.lastElementChild,
        container.firstElementChild
      )
    : container.appendChild(container.firstElementChild);
}
