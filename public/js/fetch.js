// export const fetched = fetch('http://localhost:3000/webtoon/datas')

// export function getData() {
//   fetch('http://localhost:3000/webtoon/datas')
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json)
//       // let datas = JSON.parse(json.slide)
//       // const doc = document.querySelector('.container')
//       // doc.textContent = json.slide[0].title
//     })
//     .catch((err) => {
//       console.log('Error:', err)
//     })
// }

// promise then, catch를 활용해 비동기를 동기처럼 쓰는 것 같다.
// async, await는 resolve 값을 변수로 활용해 promise보다 더 동기처럼 쓴다.

import { searchSelector } from './utility.js'
import { setSlideImgStart, setSlideImg, setSlideBtn } from './slide-move.js'
import { setWebtoonList } from './webtoon-list.js'

const SLIDE_IMG_FIRST = 3
const slides = searchSelector('.webtoon-slide__imgs')
const slideEl = searchSelector('.webtoon-slide__img')

function fetchSlide() {
  const url = 'http://localhost:3000/webtoon/datas'

  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      parseSlide(json)
    })
}

function parseSlide(json) {
  const slideData = json.slide
  setSlideImgStart(slides, slideEl, slideData[SLIDE_IMG_FIRST])
  slideData.forEach((e) => {
    setSlideImg(slides, slideEl, e)
  })
  slides.appendChild(slideEl.cloneNode(true))
  setSlideBtn()
}

function fetchWebtoonList() {
  const url = 'http://localhost:3000/webtoon/datas'

  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      parseWebtoonList(json)
    })
}

function parseWebtoonList(json) {
  const webtoonListData = json.webtoonList
  setWebtoonList(webtoonListData)
}

export async function parseData() {
  try {
    // await은 프로미스에 resolve만 반환할때를 가정해서 코드를 짠다.
    // 만약 reject를 반환하면 catch에서 에러를 발생시킨다.
    await fetchSlide()
    await fetchWebtoonList()
  } catch (err) {
    console.log(err)
  }
}
