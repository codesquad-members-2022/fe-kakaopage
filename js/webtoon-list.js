<<<<<<< HEAD
<<<<<<< HEAD:js/webtoon-list.js
import { setThumbnail, setIcon, setTitleUserCntDay } from './webtoon-els.js'
import { data } from './webtoon-datas.js'
=======
import {
  setThumbnail,
  setTitle,
  setIcon,
  setUserCnt,
  setDay,
<<<<<<< HEAD
} from './dataParse.js'
import { data } from './datas.js'
>>>>>>> 37d60f0 (refactor: js import, export 부분 수정, utility.js 추가):js/webtoonList.js
=======
} from './webtoon-els.js'
=======
import { setThumbnail, setIcon, setTitleUserCntDay } from './webtoon-els.js'
>>>>>>> 60fd4ce (refactor: 크롱 피드백 수정)
import { data } from './webtoon-datas.js'
>>>>>>> 32023a9 (refactor: 불필요한 코드, 파일 구조 정리)

let currentActiveTab = document.querySelector('.serial__item--focus')

export function setWebtoonList() {
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
    setThumbnail(
      wentoonCopy,
      data[i].thumbnail__class,
      data[i].thumbnail__src,
      data[i].thumbnail__alt
    )
<<<<<<< HEAD
<<<<<<< HEAD:js/webtoon-list.js
=======
    setTitle(wentoonCopy, data[i].title__class, data[i].title__text)
>>>>>>> 37d60f0 (refactor: js import, export 부분 수정, utility.js 추가):js/webtoonList.js
=======
>>>>>>> 60fd4ce (refactor: 크롱 피드백 수정)
    if (i === iconDays[0] || i === iconDays[1] || i === iconDays[2])
      setIcon(
        wentoonCopy,
        data[i].icon__class,
        data[i].icon__src,
        data[i].icon__alt
      )
<<<<<<< HEAD
<<<<<<< HEAD:js/webtoon-list.js
    setTitleUserCntDay(wentoonCopy, data[i].user__class, data[i].user__text)
=======
    setUserCnt(wentoonCopy, data[i].user__class, data[i].user__text)
    setDay(wentoonCopy, data[i].day__class, data[i].day__text)
>>>>>>> 37d60f0 (refactor: js import, export 부분 수정, utility.js 추가):js/webtoonList.js
=======
    setTitleUserCntDay(wentoonCopy, data[i].user__class, data[i].user__text)
>>>>>>> 60fd4ce (refactor: 크롱 피드백 수정)
  }
}

export function toggleActiveWebtoonTab(e) {
  if (e.target.tagName === this.tagName) return
  const container = document.querySelector('#container')
  const webtoonTabList = container.querySelectorAll('.serial__webtoons')

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

export function toggleActiveTab(e) {
  // 2. 현재 클릭한 메뉴
  const tabItem = e.target
  if (e.target.tagName === this.tagName) return

  if (currentActiveTab !== tabItem) {
    // 3. 현재 클릭한 메뉴에 focus 지정
    tabItem.classList.add('serial__item--focus')
    // 4. 전에 클릭한 메뉴 focus 삭제
    currentActiveTab.classList.remove('serial__item--focus')
    // 5. 현재 focus에 클릭한 메뉴로 초기화
    currentActiveTab = tabItem
  }
}
