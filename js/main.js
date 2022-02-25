import {
  toggleActiveTab,
  toggleActiveWebtoonTab,
  setWebtoonList,
} from './webtoon-list.js'
import {
  setSlideImgStart,
  setSlideImg,
  setSlideBtn,
  moveAutoSlide,
} from './slide.js'
import { data } from './slide-datas.js'
import { searchSelctor } from './utility.js'

document.addEventListener('DOMContentLoaded', () => {
  const SLIDE_IMG_FIRST = 3

  const dayTab = searchSelctor('.serial__list')
  const slides = searchSelctor('.webtoon-slide__imgs')
  const slideEl = searchSelctor('.webtoon-slide__img')

  dayTab.addEventListener('click', toggleActiveTab)
  dayTab.addEventListener('click', toggleActiveWebtoonTab)

  setSlideImgStart(slides, slideEl, data[SLIDE_IMG_FIRST])
  data.forEach((e) => {
    setSlideImg(slides, slideEl, e)
  })
  slides.appendChild(slideEl.cloneNode(true))
  setSlideBtn()
  moveAutoSlide()

  setWebtoonList()
})
