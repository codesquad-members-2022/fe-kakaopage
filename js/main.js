import webtoonList from './webtoonList.js'

document.addEventListener('DOMContentLoaded', () => {
  webtoonList.dayTab.addEventListener('click', webtoonList.toggleActiveTab)
  webtoonList.dayTab.addEventListener(
    'click',
    webtoonList.toggleActiveWebtoonTab
  )

  webtoonList.setWebtoonList()
})
