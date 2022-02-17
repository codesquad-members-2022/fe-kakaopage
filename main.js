import { createFormat0, createFormat10, createFormat11, createFormat1A, createFormat1B, createFormat2, createFormat3, createFormat4, createFormat5, createFormat6, createFormat7, createFormat8, createFormat9 } from "./format.js";
import { dummy } from "./sources.js";
import { addClickEventToElement, addToContents, pickFromArr, randomView } from "./util.js";

// addToContents(createFormat0());
// addToContents(createFormat1A());
// addToContents(createFormat1B('독점 신작', '이벤트로 달리자', 'ㄸㅂㅇㄹ ㄹㅂㅇ'));
// addToContents(createFormat2());
// addToContents(createFormat3());
// addToContents(createFormat4());
// addToContents(createFormat5('로판 TOP'));
// addToContents(createFormat6('일간 랭킹 TOP'));
// addToContents(createFormat7());
// addToContents(createFormat8());
// addToContents(createFormat9('[GIFT]'));
// addToContents(createFormat10('오늘의 추천'));
// addToContents(createFormat11('소년 전체'));

// addClickEventToElement('genre-home'.addToContents(createFormat0()))
const getElement = document.getElementById('genre-home');

getElement.addEventListener("click", add)

function add(){
    addToContents(createFormat1A());
}
