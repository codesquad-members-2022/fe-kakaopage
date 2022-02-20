import {dailyTopData} from './data/dailyTop.js'
import {dailyRankingData} from './data/dailyRanking.js'
import {containerInfo} from './data/containerInfoData.js'
import {renderContainer, renderMoveApp} from './render.js'
import {$, $all} from './utility.js'

const clickGenresList = () => {
  const genresItem = $all('.genres__item');
  genresItem.forEach(item => {
    item.addEventListener('click', (event) => {
      setGenreFocus(event);
    })
  });
}

function setGenreFocus (event) {
  const focused = $('.genres--focused');
  if (focused) focused.classList.remove('genres--focused');
  event.target.classList.add('genres--focused');
}

function renderMain() {
  clickGenresList();

  for (let i in containerInfo) {
    renderContainer(containerInfo[i].class, containerInfo[i].title, containerInfo[i].items, containerInfo[i].layout);
  }
  renderMoveApp('move-app');
}

window.addEventListener('load', renderMain);

