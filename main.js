import { dummy } from "./sources.js";
import { pickFromArr, randomView } from "./util.js";

function a (){
    console.log("a")
}

var contents = document.getElementById('contents')

function plusImg () {
    var imgUrl = pickFromArr(dummy.slideBannerEventImg)

    contents.innerHTML += `<img src=${imgUrl}>`
}
