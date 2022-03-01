import { searchSelector } from './utility.js'

let sNum = 1
let pos = 0

let manualNum = 0
let manualRrafId
let manualLrafId

export function setSlideImgStart(root, el, data) {
  const USER_UI_POS = 1
  const elCopy = el.cloneNode(true)
  const title = elCopy.querySelector('.slide-title')
  const user = elCopy.querySelectorAll('.slide-desc__item--desc')
  const img = elCopy.querySelector('.webtoon-slide__img--item')
  const banner = elCopy.querySelector('.webtoon-slide__banner')

  title.textContent = data.title
  user[USER_UI_POS].textContent = data.user
  img.src = data.imgSrc
  banner.textContent = data.banner
  if (data.badgeImgSrc) {
    const badgeImg = elCopy.querySelector('.slide-desc__item--img')
    badgeImg.src = data.badgeImgSrc
  }

  const createEl = document.createElement('div')
  createEl.classList.add('webtoon-slide__img')
  createEl.appendChild(elCopy)
  root.insertAdjacentHTML('afterbegin', createEl.innerHTML)
}

export function setSlideImg(root, el, data) {
  const USER_UI_POS = 1
  const elCopy = el.cloneNode(true)

  const title = elCopy.querySelector('.slide-title')
  const user = elCopy.querySelectorAll('.slide-desc__item--desc')
  const img = elCopy.querySelector('.webtoon-slide__img--item')
  const banner = elCopy.querySelector('.webtoon-slide__banner')

  title.textContent = data.title
  user[USER_UI_POS].textContent = data.user
  img.src = data.imgSrc
  banner.textContent = data.banner
  if (data.badgeImgSrc) {
    const badgeImg = elCopy.querySelector('.slide-desc__item--img')
    badgeImg.src = data.badgeImgSrc
  }
  root.appendChild(elCopy)
}

export function setSlideBtn() {
  const slide = document.querySelector('.webtoon-slide')
  const slideImgs = slide.querySelector('.webtoon-slide__imgs')
  const slideImg = slideImgs.querySelector('.webtoon-slide__img')

  let width

  slide.addEventListener('click', (e) => {
    const dir = e.target.getAttribute('data-dir')

    if (!dir) return

    if (dir === 'right') {
      width = -slideImg.offsetWidth
    } else if (dir === 'left') {
      width = slideImg.offsetWidth
    }
    setSlideNum(width)

    pos += width
    slideImgs.style.transform = `translate3d(${pos}px, 0, 0)`
  })
}

function setSlideNum(width) {
  const slideNum = document.querySelector('.webtoon-slide__number')
  const SLIDE_START_NUM = 1
  const SLIDE_END_NUM = 5
  const DISTINCT_POSI_NEGA = 0
  const SLIDE_CNT = 1

  if (width < DISTINCT_POSI_NEGA) {
    if (sNum < SLIDE_END_NUM) sNum += SLIDE_CNT
    else if (sNum === SLIDE_END_NUM) {
      sNum = SLIDE_START_NUM
      moveManualSlideRgiht()
    }
  } else if (width > DISTINCT_POSI_NEGA) {
    if (sNum > SLIDE_START_NUM) sNum -= SLIDE_CNT
    else if (sNum === SLIDE_START_NUM) {
      sNum = SLIDE_END_NUM
      moveManualSlideLeft()
    }
  }

  slideNum.textContent = `${sNum} / ${SLIDE_END_NUM}`
}

function moveManualSlideRgiht() {
  const ANIMATION_SEC = 60 * 0.5
  const START_POS = 0
  const slideImgs = searchSelector('.webtoon-slide__imgs')
  const FRAME_CNT = 1
  const FRAME_RESET = 0

  manualRrafId = requestAnimationFrame(moveManualSlideRgiht)
  manualNum += FRAME_CNT

  if (manualNum > ANIMATION_SEC) {
    slideImgs.style.transition = 'all 0.5s'
    manualNum = FRAME_RESET
    cancelAnimationFrame(manualRrafId)
  } else if (manualNum === ANIMATION_SEC) {
    slideImgs.style.transition = 'all 0s'
    slideImgs.style.transform = `translate3d(0px, 0px, 0px)`
    pos = START_POS
  }
}

function moveManualSlideLeft() {
  const ANIMATION_SEC = 60 * 0.5
  const START_POS = 0
  const FRAME_CNT = 1
  const END_POS = -2880

  const slideImgs = searchSelector('.webtoon-slide__imgs')

  manualLrafId = requestAnimationFrame(moveManualSlideLeft)
  manualNum += FRAME_CNT
  if (manualNum > ANIMATION_SEC) {
    slideImgs.style.transition = 'all 0.5s'
    manualNum = START_POS
    cancelAnimationFrame(manualLrafId)
  } else if (manualNum === ANIMATION_SEC) {
    slideImgs.style.transition = 'all 0s'
    slideImgs.style.transform = `translate3d(${END_POS}px, 0px, 0px)`
    pos = END_POS
  }
}

function moveAutoSlideStartPos() {
  const slideNum = document.querySelector('.webtoon-slide__number')
  const slideImgs = searchSelector('.webtoon-slide__imgs')

  const SLIDE_START_NUM = 1
  const SLIDE_END_NUM = 5
  const SLIDE_CNT = 1
  const IMG_WIDTH = 720
  const S_HALF_MS = 500
  const START_POS = 0

  const start = new Date().getTime()

  if (sNum < SLIDE_END_NUM) {
    sNum += SLIDE_CNT
    pos -= IMG_WIDTH
    slideImgs.style.transition = 'all 0.5s'
    slideImgs.style.transform = `translate3d(${pos}px, 0px, 0px)`
  } else if (sNum === SLIDE_END_NUM) {
    sNum = SLIDE_START_NUM
    pos -= IMG_WIDTH
    slideImgs.style.transform = `translate3d(${pos}px ,0px, 0px)`

    function rafCallback() {
      const resetRafId = requestAnimationFrame(rafCallback)
      if (new Date().getTime() > start + S_HALF_MS) {
        slideImgs.style.transition = 'all 0s'
        pos = START_POS
        slideImgs.style.transform = `translate3d(${pos}px ,0px, 0px)`
        cancelAnimationFrame(resetRafId)
      }
    }
    rafCallback()
  }

  slideNum.textContent = `${sNum} / ${SLIDE_END_NUM}`
}

export function moveAutoSlide() {
  const MS = 1000

  let start = new Date().getTime()

  function rafCallback() {
    requestAnimationFrame(rafCallback)

    if (new Date().getTime() > start + MS) {
      start = new Date().getTime()
      moveAutoSlideStartPos()
    }
  }
  rafCallback()
}
