function setSlideImg(root, el) {
  const elCopy = el.cloneNode(true)

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

    if (dir) {
      if (dir === 'right') width = -slideImg.offsetWidth
      else if (dir === 'left') width = slideImg.offsetWidth

      pos += width
    }
    slideImgs.style.transform = `translate3d(${pos}px, 0, 0)`
  })
}

export default { setSlideImg, setSlideBtn }
