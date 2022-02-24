import {
  toggleActiveTab,
  toggleActiveWebtoonTab,
  setWebtoonList,
} from './webtoonList.js'
import {
  setSlideImgStart,
  setSlideImg,
  setSlideBtn,
  moveAutoSlide,
} from './slide.js'
import { data } from './slideDatas.js'

document.addEventListener('DOMContentLoaded', () => {
  const dayTab = document.querySelector('.serial__list')
  const slides = document.querySelector('.webtoon-slide__imgs')
  const slideEl = slides.querySelector('.webtoon-slide__img')

  dayTab.addEventListener('click', toggleActiveTab)
  dayTab.addEventListener('click', toggleActiveWebtoonTab)

  setSlideImgStart(slides, slideEl, data[3])
  data.forEach((e) => {
    setSlideImg(slides, slideEl, e)
  })
  slides.appendChild(slideEl.cloneNode(true))
  setSlideBtn()
  moveAutoSlide()

  setWebtoonList()
})
