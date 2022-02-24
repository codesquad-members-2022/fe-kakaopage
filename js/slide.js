let sNum = 1
let pos = 0
let manualNum = 0
let autoNum = 0
let manualRafId
let manualLafId
let autoRafId
let autoStartRafId
let autoStartNum = 0

function setSlideImgStart(root, el, data) {
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

function setSlideImg(root, el, data) {
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

function setSlideBtn() {
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
  const ZERO = 0
  const ONE = 1

  if (width < ZERO) {
    if (sNum < SLIDE_END_NUM) sNum += ONE
    else if (sNum === SLIDE_END_NUM) {
      sNum = SLIDE_START_NUM
      moveManualSlideRgiht()
    }
  } else if (width > ZERO) {
    if (sNum > SLIDE_START_NUM) sNum -= ONE
    else if (sNum === SLIDE_START_NUM) {
      sNum = SLIDE_END_NUM
      moveManualSlideLeft()
    }
  }

  slideNum.textContent = `${sNum} / ${SLIDE_END_NUM}`
}

function moveManualSlideRgiht() {
  const ANIMATION_SEC = 60 * 0.5
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
  }
}

function moveManualSlideLeft() {
  const ANIMATION_SEC = 60 * 0.5
  const slideImgs = document.querySelector('.webtoon-slide__imgs')

  manualLafId = requestAnimationFrame(moveManualSlideLeft)
  manualNum += 1
  console.log(manualNum)
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
export default { setSlideImgStart, setSlideImg, setSlideBtn }
