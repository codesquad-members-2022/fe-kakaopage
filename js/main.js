import webtoonList from './webtoonList.js'
import slide from './slide.js'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container')
  const dayTab = document.querySelector('.serial__list')

  const slides = container.querySelector('.webtoon-slide__imgs')
  const slideEl = slides.querySelector('.webtoon-slide__img')

  dayTab.addEventListener('click', webtoonList.toggleActiveTab)
  dayTab.addEventListener('click', webtoonList.toggleActiveWebtoonTab)

  slide.setSlideImg(slides, slideEl)
  slide.setSlideBtn()
  webtoonList.setWebtoonList()
})
