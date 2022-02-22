function setSlideImg(root, el) {
  const elCopy = el.cloneNode(true)

  root.appendChild(elCopy)
}

export default { setSlideImg }
