import {$, $all} from './utility.js'

const makeCloneNode = () => {
  const list = $('.main__banner .banner__list');
  const items = $all('.main__banner .banner__item');
  const firstNode = items[0].cloneNode(true);
  const lastNode = items[items.length - 1].cloneNode(true);
  firstNode.classList.add('cloneFirstNode');
  lastNode.classList.add('cloneLastNode');

  list.appendChild(firstNode);
  list.insertBefore(lastNode, items[0]);

  return list
}

const eventMainBanner = () => {
  const list = makeCloneNode();
  const items = $all('.main__banner .banner__item');
  const width = $('.main__banner .banner__item').offsetWidth;

  let counter = 1;
  list.style.transform = `translate(${-width * counter}px)`;
  slideMainBanner(list, items, width, counter);
}

const slideMainBanner = (list, items, width, counter) => {
  setInterval(() => {
    if (counter >= items.length - 1) return;
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