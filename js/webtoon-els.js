export function setThumbnail(doc, root, src, alt) {
  const thumbnail = doc.querySelector(root)

  thumbnail.src = src
  thumbnail.alt = alt
}

function setTitle(doc, root, text) {
  const title = doc.querySelector(root)

  title.textContent = text
}

export function setIcon(doc, root, src, alt) {
  const icon = doc.querySelector(root)
  const imgSize = '13px'

  icon.insertAdjacentHTML(
    'afterbegin',
    /* html */ `<img src=${src} alt=${alt} width=${imgSize}></img>`
  )
}

function setUserCnt(doc, root, text) {
  const userCnt = doc.querySelector(root)

  userCnt.textContent = text
}

function setDay(doc, root, text) {
  const day = doc.querySelector(root)

  day.textContent = text
}
<<<<<<< HEAD
<<<<<<< HEAD:js/webtoon-els.js
=======
>>>>>>> 60fd4ce (refactor: 크롱 피드백 수정)

export function setTitleUserCntDay(doc, root, text) {
  setTitle(doc, root, text)
  setUserCnt(doc, root, text)
  setDay(doc, root, text)
}
<<<<<<< HEAD
=======
>>>>>>> 37d60f0 (refactor: js import, export 부분 수정, utility.js 추가):js/dataParse.js
=======
>>>>>>> 60fd4ce (refactor: 크롱 피드백 수정)
