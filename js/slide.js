<<<<<<< HEAD
<<<<<<< HEAD
import { searchSelctor } from './utility.js'

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
=======
=======
import { searchSelctor } from './utility.js'

>>>>>>> 37d60f0 (refactor: js import, export 부분 수정, utility.js 추가)
let sNum = 1
let pos = 0

let manualNum = 0
let manualRafId
let manualLafId

let autoNum = 0
let autoRafId
let autoStartRafId
let autoStartNum = 0

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

<<<<<<< HEAD
function setSlideImg(root, el, data) {
>>>>>>> 3fb7482 (refactor:  수동 슬라이드 코드 수정)
=======
export function setSlideImg(root, el, data) {
>>>>>>> 37d60f0 (refactor: js import, export 부분 수정, utility.js 추가)
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

<<<<<<< HEAD
  if (width < DISTINCT_POSI_NEGA) {
    if (sNum < SLIDE_END_NUM) sNum += SLIDE_CNT
=======
  if (width < ZERO) {
    if (sNum < SLIDE_END_NUM) sNum += ONE
>>>>>>> 3fb7482 (refactor:  수동 슬라이드 코드 수정)
    else if (sNum === SLIDE_END_NUM) {
      sNum = SLIDE_START_NUM
      moveManualSlideRgiht()
    }
<<<<<<< HEAD
  } else if (width > DISTINCT_POSI_NEGA) {
    if (sNum > SLIDE_START_NUM) sNum -= SLIDE_CNT
=======
  } else if (width > ZERO) {
    if (sNum > SLIDE_START_NUM) sNum -= ONE
>>>>>>> 3fb7482 (refactor:  수동 슬라이드 코드 수정)
    else if (sNum === SLIDE_START_NUM) {
      sNum = SLIDE_END_NUM
      moveManualSlideLeft()
    }
  }

  slideNum.textContent = `${sNum} / ${SLIDE_END_NUM}`
}

function moveManualSlideRgiht() {
  const ANIMATION_SEC = 60 * 0.5
<<<<<<< HEAD
  const START_POS = 0
  const slideImgs = searchSelctor('.webtoon-slide__imgs')
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
=======
  const slide = document.querySelector('.webtoon-slide')
  const slideImgs = slide.querySelector('.webtoon-slide__imgs')

  manualRafId = requestAnimationFrame(moveManualSlideRgiht)
  manualNum += 1

  if (manualNum > ANIMATION_SEC) {
    slideImgs.style.transition = 'all 0.5s'
    manualNum = 0
    cancelAnimationFrame(manualRafId)
  } else if (manualNum === ANIMATION_SEC) {
    slideImgs.style.transition = 'all 0s'
    slideImgs.style.transform = `translate3d(0px, 0px, 0px)`
    pos = 0
>>>>>>> 3fb7482 (refactor:  수동 슬라이드 코드 수정)
  }
}

function moveManualSlideLeft() {
  const ANIMATION_SEC = 60 * 0.5
<<<<<<< HEAD
  const START_POS = 0
  const FRAME_CNT = 1
  const END_POS = -2880

  const slideImgs = searchSelctor('.webtoon-slide__imgs')

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
  const slideImgs = searchSelctor('.webtoon-slide__imgs')

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
=======
  const slideImgs = document.querySelector('.webtoon-slide__imgs')

  manualLafId = requestAnimationFrame(moveManualSlideLeft)
  manualNum += 1
  if (manualNum > ANIMATION_SEC) {
    slideImgs.style.transition = 'all 0.5s'
    manualNum = 0
    cancelAnimationFrame(manualLafId)
  } else if (manualNum === ANIMATION_SEC) {
    slideImgs.style.transition = 'all 0s'
    slideImgs.style.transform = `translate3d(-2880px, 0px, 0px)`
    pos = -2880
  }
}

export function moveAutoSlide() {
  const ANIMATION_SEC = 60 * 0.5
  const slideImgs = searchSelctor('.webtoon-slide__imgs')

  console.log(slideImgs)
}

// function moveAutoSlide() {
//   const ANIMATION_SEC = 180
//   const slideImgs = document.querySelector('.webtoon-slide__imgs')

//   autoRafId = requestAnimationFrame(moveAutoSlide)
//   autoNum += 1
//   if (autoNum === ANIMATION_SEC) {
//     if (pos > -720 * 5) {
//       slideImgs.style.transition = 'all 0.5s'
//       pos -= 720
//     }
//     slideImgs.style.transform = `translate3d(${pos}px, 0px, 0px)`
//     autoNum = 0

//     setSlideNum(-720)
//   }

// function moveAutoSlideStart() {
//   const ANIMATION_SEC = 60
//   const slideImgs = document.querySelector('.webtoon-slide__imgs')

//   autoStartRafId = requestAnimationFrame(moveAutoSlideStart)
//   autoStartNum += 1
//   console.log(autoStartNum)

//   if (autoStartNum === ANIMATION_SEC) {
//     slideImgs.style.transition = 'all 0s'
//     pos = 0
//   }
// }
// }

// export default { setSlideImgStart, setSlideImg, setSlideBtn, moveAutoSlide }
<<<<<<< HEAD
export default { setSlideImgStart, setSlideImg, setSlideBtn }
>>>>>>> 3fb7482 (refactor:  수동 슬라이드 코드 수정)
=======
// export default { setSlideImgStart, setSlideImg, setSlideBtn }
>>>>>>> 37d60f0 (refactor: js import, export 부분 수정, utility.js 추가)
