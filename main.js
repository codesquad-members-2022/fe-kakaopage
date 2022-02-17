window.onload = function () {
  function setThumbnail(root, src, alt) {
    const $thumbnail = $webtoon_copy.querySelector(root)

    $thumbnail.src = src
    $thumbnail.alt = alt
  }

  function setTitle(root, text) {
    const $title = $webtoon_copy.querySelector(root)

    $title.textContent = text
  }

  function addNewIcon(icon, src, alt) {
    icon.insertAdjacentHTML(
      'afterbegin',
      `<img src=${src} alt=${alt} width="13px"></img>`
    )
  }

  function setIcon(root, src, alt) {
    const $icons = $webtoon_copy.querySelector(root)

    addNewIcon($icons, src, alt)
  }

  function setUserCnt(root, text) {
    const $userCnt = $webtoon_copy.querySelector(root)

    $userCnt.textContent = text
  }

  function setDay(root, text) {
    const $day = $webtoon_copy.querySelector(root)

    $day.textContent = text
  }

  const $serial = document.querySelector('.serial')
  const $webtoon = document.querySelector('.serial__webtoons')
  // 월요일 웹툰 목록 HTML구조를 복사한것을 화요일 웹툰 목록으로 사용
  const $webtoon_copy = $webtoon.cloneNode(true)
  $webtoon_copy.classList.replace('display__flex', 'display__none')
  $webtoon_copy.setAttribute('data-day', 'tue')
  $serial.appendChild($webtoon_copy)

  setThumbnail(
    '.serial__thumbnail--img',
    './images/resource_4.png',
    '병약한? 남편의 계약 아내'
  )
  setTitle('.serial-webtoon__title', '병약한? 남편의 계약 아내')
  setIcon('.serial-webtoon__user--icon', './images/icon_new.svg', '새작품')
  setUserCnt('.serial-webtoon__user--cnt', '26.6만명')
  setDay('.serial__more--desc', '화요 연재 더보기')
  const dayTab = document.querySelector('.serial__list')
  const dayTabList = dayTab.querySelectorAll('.serial__item')

  // 1. 현재 focus 메뉴
  let currentActiveTab = dayTab.querySelector('.serial__item--focus')

  function toggleActiveTab() {
    // 2. 현재 클릭한 메뉴
    const tabItem = this
    if (currentActiveTab !== tabItem) {
      // 3. 현재 클릭한 메뉴에 focus 지정
      tabItem.classList.add('serial__item--focus')
      // 4. 전에 클릭한 메뉴 focus 삭제
      currentActiveTab.classList.remove('serial__item--focus')
      // 5. 현재 focus에 클릭한 메뉴로 초기화
      currentActiveTab = tabItem
    }
  }

  const $webtoons = document.querySelectorAll('.serial__webtoons')

  function toggleActiveWebtoonTab() {
    const tabItem = this
    // 1. 웹툰 목록을 전부 display none 시킴
    $webtoons.forEach((e) => {
      e.classList.add('display__none')
    })

    $webtoons.forEach((e) => {
      // 2. 클릭한 요소에 data-day를 가져옴
      // 3. 가져온 값에 맞는 웹툰 목록을 display-flex
      if (tabItem.getAttribute('data-day') === e.getAttribute('data-day'))
        e.classList.replace('display__none', 'display__flex')
    })
  }

  dayTabList.forEach((e) => {
    e.addEventListener('click', toggleActiveTab)
    e.addEventListener('click', toggleActiveWebtoonTab)
  })
}
