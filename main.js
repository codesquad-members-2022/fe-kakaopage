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

  function setIcon(root, src, alt, newFlag = false) {
    const $icons = $webtoon_copy.querySelector(root)

    if (newFlag) addNewIcon($icons, src, alt)
  }

  function setUserCnt(root, text) {
    const $userCnt = $webtoon_copy.querySelector(root)

    $userCnt.textContent = text
  }

  // function setDay(root) {
  //   const $
  // }

  const $webtoons = document.querySelector('.serial__webtoons')
  const $webtoon_copy = $webtoons.cloneNode(true)
  $webtoons.appendChild($webtoon_copy)

  // $webtoons.firstElementChild.classList.add('display__none')
  // replace를 써서 add, remove를 하나 줄이자

  setThumbnail(
    '.serial__thumbnail--img',
    './images/resource_4.png',
    '병약한? 남편의 계약 아내'
  )
  setTitle('.serial-webtoon__title', '병약한? 남편의 계약 아내')
  setIcon(
    '.serial-webtoon__user--icon',
    './images/icon_new.svg',
    '새작품',
    true
  )
  setUserCnt('.serial-webtoon__user--cnt', '26.6만명')

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

  dayTabList.forEach((e) => {
    e.addEventListener('click', toggleActiveTab)
  })
}
