export function setThumbnail(doc, root, src, alt) {
  const thumbnail = doc.querySelector(root)

  thumbnail.src = src
  thumbnail.alt = alt
}

export function setTitle(doc, root, text) {
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

export function setUserCnt(doc, root, text) {
  const userCnt = doc.querySelector(root)

  userCnt.textContent = text
}

export function setDay(doc, root, text) {
  const day = doc.querySelector(root)

  day.textContent = text
}
