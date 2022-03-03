import { toggleActiveTab, toggleActiveWebtoonTab } from './webtoon-list.js'
import { moveAutoSlide } from './slide-move.js'
import { searchSelector } from './utility.js'
import { parseData } from './fetch.js'

document.addEventListener('DOMContentLoaded', () => {
  const dayTab = searchSelector('.serial__list')

  dayTab.addEventListener('click', toggleActiveTab)
  dayTab.addEventListener('click', toggleActiveWebtoonTab)

  moveAutoSlide()
  parseData()

  // setWebtoonList()
})
