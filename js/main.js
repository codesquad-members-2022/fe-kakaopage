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
<<<<<<< HEAD
  const SLIDE_IMG_FIRST = 3

  const dayTab = searchSelctor('.serial__list')
  const slides = searchSelctor('.webtoon-slide__imgs')
  const slideEl = searchSelctor('.webtoon-slide__img')
=======
  const dayTab = document.querySelector('.serial__list')
  const slides = document.querySelector('.webtoon-slide__imgs')
  const slideEl = slides.querySelector('.webtoon-slide__img')
>>>>>>> 3fb7482 (refactor:  수동 슬라이드 코드 수정)

  dayTab.addEventListener('click', toggleActiveTab)
  dayTab.addEventListener('click', toggleActiveWebtoonTab)

<<<<<<< HEAD
  setSlideImgStart(slides, slideEl, data[SLIDE_IMG_FIRST])
  data.forEach((e) => {
    setSlideImg(slides, slideEl, e)
  })
  slides.appendChild(slideEl.cloneNode(true))
  setSlideBtn()
  moveAutoSlide()
=======
  slide.setSlideImgStart(slides, slideEl, slideDatas.data[3])
  slideDatas.data.forEach((e) => {
    slide.setSlideImg(slides, slideEl, e)
  })
  slides.appendChild(slideEl.cloneNode(true))
  slide.setSlideBtn()
  // slide.moveAutoSlide()
>>>>>>> 3fb7482 (refactor:  수동 슬라이드 코드 수정)

  setWebtoonList()
})
