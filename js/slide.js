let sNum = 1

function setSlideImg(root, el, data) {
  const elCopy = el.cloneNode(true)

  const title = elCopy.querySelector('.slide-title')
  const user = elCopy.querySelectorAll('.slide-desc__item--desc')
  const img = elCopy.querySelector('.webtoon-slide__img--item')
  const banner = elCopy.querySelector('.webtoon-slide__banner')

  title.textContent = data.title
  user[1].textContent = data.user
  img.src = data.imgSrc
  banner.textContent = data.banner

  root.appendChild(elCopy)
}

function setSlideBtn() {
  const slide = document.querySelector('.webtoon-slide')
  const slideImgs = slide.querySelector('.webtoon-slide__imgs')
  const slideImg = slideImgs.querySelector('.webtoon-slide__img')

  let width
  let pos = 0

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
    else if (sNum === SLIDE_END_NUM) sNum = SLIDE_START_NUM
  } else if (width > ZERO) {
    if (sNum > SLIDE_START_NUM) sNum -= ONE
    else if (sNum === SLIDE_START_NUM) sNum = SLIDE_END_NUM
  }

  slideNum.textContent = `${sNum} / ${SLIDE_END_NUM}`
}

export default { setSlideImg, setSlideBtn }
