import { createFormat0, createFormat1A, createFormat1B, createFormat2, createFormat3, createFormat4, createFormat5 } from "./format.js";
import { dummy } from "./sources.js";
import { addToContents, pickFromArr, randomView } from "./util.js";

addToContents(createFormat0());
addToContents(createFormat1A());
addToContents(createFormat1B('독점 신작', '이벤트로 달리자', 'ㄸㅂㅇㄹ ㄹㅂㅇ'));
addToContents(createFormat2());
addToContents(createFormat3());
addToContents(createFormat4());
addToContents(createFormat5('로판 TOP'));
