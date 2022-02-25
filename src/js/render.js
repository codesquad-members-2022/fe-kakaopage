import { $, CL, TITLE, today, data, VAL } from './util.js';
import { SNB } from './components/SNB.js';
import { MainBanner } from './components/MainBanner.js';
import { DayBar } from './components/DayBar.js';
import { WebtoonList, createWebtoonItem } from './components/WebtoonList.js';
import { ThemeBox } from './components/ThemeBox.js';
import { ScrollBanner } from './components/ScrollBanner.js';

const $main = $('.main');

const render = {
  webtoonPage() {
    $main.innerHTML = '';
    $main.append(SNB());
    const $mainContents = document.createElement('div');
    $mainContents.classList.add('main-contents');
    $main.append($mainContents);
    this.contents('홈');
  },

  otherPage(tabName) {
    $main.innerHTML = `<div style="padding: 30px; text-align: center; font-size: 30px;">${tabName}</div>`;
  },

  wholeWebtoon(data) {
    const $mainContents = $('.main-contents');
    const webtoonBox = $('.webtoon-box');
    $mainContents.replaceChild(WebtoonList(data), webtoonBox);
  },

  dayWebtoon(data, day) {
    const webtoonList = $('.webtoon__list');
    webtoonList.innerHTML = createWebtoonItem(
      data.filter(v => v.day.includes(day))
    );
  },

  contents(category) {
    const content = {
      홈: () => renderContent.home(),
      요일연재: () => renderContent.day(),
      웹툰: () => renderContent.webtoon(),
      소년: () => renderContent.boy(),
      드라마: () => renderContent.drama(),
      로맨스: () => renderContent.romance(),
      로판: () => renderContent.roFan(),
      액션무협: () => renderContent.action(),
      BL: () => renderContent.BL(),
    };

    content[category]();
  },
};

const renderContent = {
  home() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },

  day() {
    renderComponent.mainBanner();
    renderComponent.dayBar();
  },

  webtoon() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    renderComponent.dayBar();
    $mainContents.append(displayWebtoon(data));
    $mainContents.append(displayWebtoon(data, 'promotion'));
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },
  boy() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },
  drama() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },
  romance() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },
  roFan() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },
  action() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },
  action() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },
  BL() {
    const $mainContents = $('.main-contents');
    renderComponent.mainBanner();
    $mainContents.append(ThemeBox());
    $mainContents.append(ScrollBanner());
  },
};

const renderComponent = {
  mainBanner() {
    const $mainContents = $('.main-contents');
    $mainContents.innerHTML = '';
    const randomNum = Math.floor(Math.random() * VAL.MAX_BANNER_COUNT);
    const bannerArr = [...data];
    const pickedBanner = [];

    while (pickedBanner.length <= randomNum) {
      pickedBanner.push(
        bannerArr.splice(Math.floor(Math.random() * bannerArr.length), 1)[0]
      );
    }

    $mainContents.append(MainBanner(pickedBanner));
  },

  dayBar() {
    const $mainContents = $('.main-contents');
    $mainContents.append(DayBar());
    displayTodaysDayBar();
  },
};

function displayWebtoon(...params) {
  const [data, header] = params;
  if (!header) return WebtoonList(data.filter(v => v.day.includes(today)));
  return WebtoonList(
    data.filter(v => v[header]),
    header,
    TITLE[header]
  );
}

function displayTodaysDayBar() {
  const $dayList = $('.day__list');
  [...$dayList.children].forEach(day => {
    if (day.id === today) {
      day.classList.add(CL.SELECTED);
      return;
    }
  });
}

export { render };
