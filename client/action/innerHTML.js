import {makeWebtoonItems} from '/client/module/w-contents.js'
import {slideBanner} from '/client/module/slideBanner.js'
import {maketopItems} from '/client/module/topWebtoon.js'

document.querySelector(".banner__container").innerHTML += slideBanner();
document.querySelector(".webtoon__contents").innerHTML += makeWebtoonItems();
document.querySelector(".daily__contents").innerHTML += maketopItems();