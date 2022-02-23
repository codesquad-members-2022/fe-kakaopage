import webtoonList from './webtoonList.js'
import slide from './slide.js'
import slideDatas from './slideDatas.js'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container')
  const dayTab = container.querySelector('.serial__list')

  const slides = container.querySelector('.webtoon-slide__imgs')
  const slideEl = slides.querySelector('.webtoon-slide__img')

  dayTab.addEventListener('click', webtoonList.toggleActiveTab)
  dayTab.addEventListener('click', webtoonList.toggleActiveWebtoonTab)

  slide.setSlideImg(slides, slideEl, slideDatas.data[0])
  slide.setSlideImg(slides, slideEl, slideDatas.data[1])
  slide.setSlideImg(slides, slideEl, slideDatas.data[2])
  slide.setSlideImg(slides, slideEl, slideDatas.data[3])
  slide.setSlideBtn()

  webtoonList.setWebtoonList()
})
