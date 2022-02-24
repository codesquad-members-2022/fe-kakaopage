import webtoonList from './webtoonList.js'
import slide from './slide.js'
import slideDatas from './slideDatas.js'

document.addEventListener('DOMContentLoaded', () => {
  const dayTab = document.querySelector('.serial__list')
  const slides = document.querySelector('.webtoon-slide__imgs')
  const slideEl = slides.querySelector('.webtoon-slide__img')

  dayTab.addEventListener('click', webtoonList.toggleActiveTab)
  dayTab.addEventListener('click', webtoonList.toggleActiveWebtoonTab)

  slide.setSlideImgStart(slides, slideEl, slideDatas.data[3])
  slideDatas.data.forEach((e) => {
    slide.setSlideImg(slides, slideEl, e)
  })
  slides.appendChild(slideEl.cloneNode(true))
  slide.setSlideBtn()
  // slide.moveAutoSlide()

  webtoonList.setWebtoonList()
})
