import dataParse from './dataParse.js'
import data from './datas.js'

let currentActiveTab = document.querySelector('.serial__item--focus')

function setWebtoonList() {
  const container = document.querySelector('#container')
  const serial = container.querySelector('.serial')
  const webtoon = container.querySelector('.serial__webtoons')

  const days = ['tue', 'wen', 'thu', 'fri', 'sat', 'sun', 'end']
  // 아이콘이 추가되는 요일의 숫자
  const iconDays = [0, 3, 6]

  for (let i = 0; i < days.length; i++) {
    // 월요일 웹툰 목록 HTML구조를 복사한것을 나머지 탭 웹툰 목록으로 사용
    const wentoonCopy = webtoon.cloneNode(true)
    wentoonCopy.classList.replace('display__flex', 'display__none')
    wentoonCopy.setAttribute('data-day', days[i])
    serial.appendChild(wentoonCopy)
    dataParse.setThumbnail(
      wentoonCopy,
      data[i].thumbnail__class,
      data[i].thumbnail__src,
      data[i].thumbnail__alt
    )
    dataParse.setTitle(wentoonCopy, data[i].title__class, data[i].title__text)
    if (i === iconDays[0] || i === iconDays[1] || i === iconDays[2])
      dataParse.setIcon(
        wentoonCopy,
        data[i].icon__class,
        data[i].icon__src,
        data[i].icon__alt
      )
    dataParse.setUserCnt(wentoonCopy, data[i].user__class, data[i].user__text)
    dataParse.setDay(wentoonCopy, data[i].day__class, data[i].day__text)
  }
}

function toggleActiveWebtoonTab(e) {
  const container = document.querySelector('#container')
  const webtoonTabList = container.querySelectorAll('.serial__webtoons')

  if (e.target.tagName !== this.tagName) {
    const tabItem = e.target
    // 1. 웹툰 목록을 전부 display: none 처리
    webtoonTabList.forEach((el) => {
      el.classList.add('display__none')
    })
    webtoonTabList.forEach((el) => {
      // 2. 클릭한 요소에 data-day를 가져옴
      // 3. 가져온 값에 맞는 웹툰 목록을 display: flex 처리
      if (tabItem.getAttribute('data-day') === el.getAttribute('data-day'))
        el.classList.replace('display__none', 'display__flex')
    })
  }
}

function toggleActiveTab(e) {
  // 2. 현재 클릭한 메뉴
  const tabItem = e.target
  if (e.target.tagName !== this.tagName) {
    if (currentActiveTab !== tabItem) {
      // 3. 현재 클릭한 메뉴에 focus 지정
      tabItem.classList.add('serial__item--focus')
      // 4. 전에 클릭한 메뉴 focus 삭제
      currentActiveTab.classList.remove('serial__item--focus')
      // 5. 현재 focus에 클릭한 메뉴로 초기화
      currentActiveTab = tabItem
    }
  }
}

export default {
  setWebtoonList,
  toggleActiveWebtoonTab,
  toggleActiveTab,
}
