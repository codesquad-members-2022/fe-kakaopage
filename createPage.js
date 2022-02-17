import { createFormat0, createFormat10, createFormat11, createFormat12, createFormat1A, createFormat1B, createFormat2, createFormat3, createFormat4, createFormat5, createFormat6, createFormat7, createFormat8, createFormat9 } from "./format.js";
import { dummy } from "./sources.js";
import { addClickEventToElement, addToContents, initPage, pickFromArr, randomView } from "./util.js";

export const createPageHome = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat1A());
    addToContents(createFormat2());
    addToContents(createFormat3());
    addToContents(createFormat4());
    addToContents(createFormat5('로맨스 TOP'));
    addToContents(createFormat5('로판 TOP'));
    addToContents(createFormat5('드라마 TOP'));
    addToContents(createFormat5('BL/GL TOP'));
    addToContents(createFormat5('소년 TOP'));
    addToContents(createFormat5('액션무협 TOP'));
    addToContents(createFormat6('일간 랭킹 TOP'));
    addToContents(createFormat7());
}

export const createPageDaily = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat8());
}

export const createPageWebtoon = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat12());
    addToContents(createFormat9('🔥HOT 최근 프로모션 진행작'));
}

export const createPageTeen = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat1B('독점 신작', '이벤트로 달리자', 'ㄸㅂㅇㄹ ㄹㅂㅇ'));
    addToContents(createFormat10('오늘의 추천'));
    addToContents(createFormat2());
    addToContents(createFormat6('일간 소년 TOP'));
    addToContents(createFormat10('[ORIGINAL] 믿고보는 독.점.연.재'));
    addToContents(createFormat9('[GIFT] 오늘의 선물🎁'));
    addToContents(createFormat9('[HOT] 지금 뜨는 인기작'));
    addToContents(createFormat9('[PICK] 요일 웹툰 추천작'));
    addToContents(createFormat10('#일본 명작 - 재미 보장! 시간 순삭!'));
    addToContents(createFormat10('#노블코믹스 - 소설 원작의 웹툰화!'));
    addToContents(createFormat9('#완결까지 정주행 - 기다무로 달리자!'));
    addToContents(createFormat9('#밀리언페이지 - 100만의 PICK!'));
    addToContents(createFormat11('소년 전체'));
}

export const createPageDrama = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat1B('월간베스트#20', '#이벤트로달리자', '완결까지#정주행'));
    addToContents(createFormat10('오늘의 추천'));
    addToContents(createFormat2());
    addToContents(createFormat6('일간 드라마 TOP'));
    addToContents(createFormat5('믿고 보는 독점/선연재!'));
    addToContents(createFormat9('지금 UP 뜬 추천작'));
    addToContents(createFormat9('오늘의 선물🎁 대여권 받자!'));
    addToContents(createFormat9('지금 뜨는 인기작'));
    addToContents(createFormat10('이달의 HOT한 신작!'));
    addToContents(createFormat10('이번 생은 부와 명에! #현판'));
    addToContents(createFormat10('신비로운 대서사시! #판드'));
    addToContents(createFormat10('생명이 오가는 긴박함! #메디컬'));
    addToContents(createFormat10('알고 보니 웹툰? #영회·드라마 원작!'));
    addToContents(createFormat9('최신 기다무 런칭작!'));
    addToContents(createFormat9('더 많이, 더 빠르게! 기다리면무료+'));
    addToContents(createFormat9('요일웹툰 추천작!'));
    addToContents(createFormat9('대세는 요리!'));
    addToContents(createFormat9('파란만장 스쿨라이프'));
    addToContents(createFormat9('실용 명작'));
    addToContents(createFormat9('가슴을 울리는 음악의 선율'));
    addToContents(createFormat9('내 귀여움에 빠져볼래냥?'));
    addToContents(createFormat9('빠져든다, 스릴러&미스터리'));
    addToContents(createFormat9('판타지 드라마'));
    addToContents(createFormat9('조금 특별한 일상 드라마'));
    addToContents(createFormat9('베스트셀러'));
    addToContents(createFormat11('드라마 전체'));
}

export const createPageRomance = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat1B('완결까지 정주행', '인기완결작', '기다무플러스'));
    addToContents(createFormat10('오늘의 추천'));
    addToContents(createFormat2());
    addToContents(createFormat6('일간 로맨스 TOP'));
    addToContents(createFormat9('믿고보는 독!점!'));
    addToContents(createFormat10('어디에도 없는 오리지널 추천작'));
    addToContents(createFormat9('지금뜨는 인기작'));
    addToContents(createFormat10('더 많이, 더 빠르게! 기다리면무료+'));
    addToContents(createFormat5('기다림이 반! 12시간마다 무료'));
    addToContents(createFormat9('최신 연재작'));
    addToContents(createFormat9('오늘의 추천 GL'));
    addToContents(createFormat9('요일웹툰 추천작'));
    addToContents(createFormat9('최신 기다무 런칭작!'));
    addToContents(createFormat9('베스트셀러'));
    addToContents(createFormat9('오피스 로맨스'));
    addToContents(createFormat9('시대극 로맨스'));
    addToContents(createFormat9('학원 로맨스'));
    addToContents(createFormat9('로맨스릴러'));
    addToContents(createFormat9('캠퍼스 로맨스'));
    addToContents(createFormat9('로맨스의 명가, 할리퀸 컬렉션'));
    addToContents(createFormat9('황미리&한유랑, 로맨틱코미디'));
    addToContents(createFormat11('로맨스 전체'));
}

export const createPageRofan = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat1B('월간 베스트', '스테디셀러정주행', '기다무 플러스'));
    addToContents(createFormat10('오늘의 추천'));
    addToContents(createFormat2());
    addToContents(createFormat6('일간 로맨스판타지 TOP'));
    addToContents(createFormat10('금요일, 믿고 보는 독.점.연.재'));
    addToContents(createFormat9('기다림은 반, 재미는 두배? 12시간 무료!'));
    addToContents(createFormat9('지금 뜨는 인기작'));
    addToContents(createFormat9('최신 연재작'));
    addToContents(createFormat9('요일 웹툰 추천작!'));
    addToContents(createFormat9('🖤이달의 추천신작🖤'));
    addToContents(createFormat9('#1화부터 완결까지 달리자!'));
    addToContents(createFormat10('#눈호강: 비주얼 끝판왕을 찾고 있다면?!'));
    addToContents(createFormat10('#육아: 심쿵, 랜선 조카 모음집'));
    addToContents(createFormat10('#걸크러시: 악녀, 가주, 기사까지 모두 모였다!'));
    addToContents(createFormat10('#신박한 로판 사전: 이런 소재 찾고 계신가요?'));
    addToContents(createFormat9('#정주행: 추천 완결작'));
    addToContents(createFormat9('베스트 셀러'));
    addToContents(createFormat11('로판 전체'));
}

export const createPageAction = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat1B('독점 신작🔥', '이벤트로 달리자', '기다무 플러스'));
    addToContents(createFormat10('오늘의 추천!'));
    addToContents(createFormat2());
    addToContents(createFormat5('일간 액션/무협 TOP'));
    addToContents(createFormat10('ORIGINAL 독점 연재'));
    addToContents(createFormat9('지금 뜨는 인기작'));
    addToContents(createFormat9('혜택함🎁 시간 삭제 버튼!'));
    addToContents(createFormat10('더 많이, 더 빠르게 기다리면 무료 플러스'));
    addToContents(createFormat9('쎈 놈들의 액션'));
    addToContents(createFormat10('요즘 빌런, 트렌디 무협'));
    addToContents(createFormat5('정통 무협 어벤져스!'));
    addToContents(createFormat9('HARD CORE & DRAMA'));
    addToContents(createFormat9('장세이 테마 액션관'));
    addToContents(createFormat9('리바이벌! 파격 삼국지'));
    addToContents(createFormat9('향수에 취하다! 묵검향'));
    addToContents(createFormat11('액션무협 전체'));
}

export const createPageBL = () => {
    initPage();
    addToContents(createFormat0());
    addToContents(createFormat1A());
    addToContents(createFormat9('오늘의 추천!'));
    addToContents(createFormat6('일간 BL TOP'));
    addToContents(createFormat2());
    addToContents(createFormat9('믿고보는 독점/선연재'));
    addToContents(createFormat9('취향저격 추천작'));
    addToContents(createFormat9('지금뜨는 인기작'));
    addToContents(createFormat9('스테디셀러: 완결까지 정주행'));
    addToContents(createFormat9('더 많이, 더 빠르게! 기다리면무료+'));
    addToContents(createFormat5('#성공적으로 연애하는 방법'));
    addToContents(createFormat9('최신 기다무 런칭작'));
    addToContents(createFormat9('현대, 오피스'));
    addToContents(createFormat9('연상연하, 청춘'));
    addToContents(createFormat5('기다림은 반, 재미는 두 배? 12시간 무료!'));
    addToContents(createFormat9('시대, 판타지'));
    addToContents(createFormat9('매혹의 성역'));
    addToContents(createFormat11('BL 전체'));
}