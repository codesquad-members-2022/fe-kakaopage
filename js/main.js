import data from './datas.js'

document.addEventListener('DOMContentLoaded', () => {
  function setThumbnail(doc, root, src, alt) {
    const thumbnail = doc.querySelector(root)

    thumbnail.src = src
    thumbnail.alt = alt
  }

  function setTitle(doc, root, text) {
    const title = doc.querySelector(root)

    title.textContent = text
  }

  function setIcon(doc, root, src, alt) {
    const icon = doc.querySelector(root)

    icon.insertAdjacentHTML(
      'afterbegin',
      /* html */ `<img src=${src} alt=${alt} width="13px"></img>`
    )
  }

  function setUserCnt(doc, root, text) {
    const userCnt = doc.querySelector(root)

    userCnt.textContent = text
  }

  function setDay(doc, root, text) {
    const day = doc.querySelector(root)

    day.textContent = text
  }

  const container = document.querySelector('.container')
  const serial = container.querySelector('.serial')
  const webtoon = container.querySelector('.serial__webtoons')

  function setWebtoonList() {
    const days = ['tue', 'wen', 'thu', 'fri', 'sat', 'sun', 'end']
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
      setTitle(wentoonCopy, data[i].title__class, data[i].title__text)
      // 아이콘이 추가되는 요일
      if (i === 0 || i === 3 || i === 6)
        setIcon(
          wentoonCopy,
          data[i].icon__class,
          data[i].icon__src,
          data[i].icon__alt
        )
      setUserCnt(wentoonCopy, data[i].user__class, data[i].user__text)
      setDay(wentoonCopy, data[i].day__class, data[i].day__text)
    }
  }

  setWebtoonList()

  const dayTab = container.querySelector('.serial__list')

  dayTab.addEventListener('click', toggleActiveTab)
  dayTab.addEventListener('click', toggleActiveWebtoonTab)

  // 1. 현재 focus 메뉴
  let currentActiveTab = dayTab.querySelector('.serial__item--focus')

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

  const webtoonTabList = container.querySelectorAll('.serial__webtoons')

  function toggleActiveWebtoonTab(e) {
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
})
