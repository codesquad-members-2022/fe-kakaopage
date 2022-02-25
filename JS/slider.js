import {$, $all} from './utility.js'

const makeCloneNode = (list) => {
  const firstNode = list.firstChild.cloneNode(true);
  const lastNode = list.lastChild.cloneNode(true);
  firstNode.classList.add('cloneFirstNode');
  lastNode.classList.add('cloneLastNode');

  list.appendChild(firstNode);
  list.insertBefore(lastNode, list.firstChild);
}

const eventMainBanner = (list) => {
  makeCloneNode(list);
  const items = $all('.main__banner .banner__item');
  const WIDTH = list.firstChild.offsetWidth;

  let counter = 1;
  list.style.transform = `translate(${-WIDTH * counter}px)`;
  slideMainBanner(list, items, WIDTH, counter);
}

const slideMainBanner = (list, items, width, counter) => {
  setInterval(() => {
    if (counter >= items.length) return;
    counter++;
    list.style.transform = `translate(${-width * counter}px)`;
    list.style.transition = 'transform 0.5s';

    $('.banner__count .now').innerText = items[counter].dataset.index;
  }, 3000);

  list.addEventListener('transitionend', () => {
    if (items[counter].classList.contains("cloneFirstNode"))  {
      list.style.transition = "none";
      counter = items.length - counter;
      list.style.transform = `translate(${-width * counter}px)`;
    }
  })
}

export {eventMainBanner}