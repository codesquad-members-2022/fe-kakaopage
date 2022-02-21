import { createFormat0, createFormat10, createFormat11, createFormat12, createFormat1A, createFormat1B, createFormat2, createFormat3, createFormat4, createFormat5, createFormat6, createFormat7, createFormat8, createFormat9, createFormatInit } from "./format.js";
import { addSelectedTo, addToContents, combineFormats, initPage } from "./util.js";

export const createPageInit = () => {
    document.body.innerHTML = createFormatInit()
    addSelectedTo('.genre-nav-li')
    addSelectedTo('.head-nav-li')
    createPageHome();
}

export const createPageHome = () => {
    const formats = [
        createFormat0(), createFormat1A(), createFormat2(), createFormat3(),
        createFormat4(), createFormat5('로맨스 TOP'), createFormat5('로판 TOP'), createFormat5('드라마 TOP'),
        createFormat5('BL/GL TOP'), createFormat5('소년 TOP'), createFormat5('액션무협 TOP'),
        createFormat6('일간 랭킹 TOP'), createFormat7()
    ];
    const contents = combineFormats(formats)

    initPage();
    addToContents(contents);
    addSelectedTo('.day')
}

export const createPageDaily = () => {
    const formats = [
        createFormat0(), createFormat8()
    ];
    const contents = combineFormats(formats)

    initPage();
    addToContents(contents);
    addSelectedTo('.day');
}

export const createPageWebtoon = () => {
    const formats = [
        createFormat0(), createFormat12(), createFormat9('🔥HOT 최근 프로모션 진행작')
    ];
    const contents = combineFormats(formats)

    initPage();
    addToContents(contents);
}

export const createPageTeen = () => {
    const formats = [
        createFormat0(), createFormat1B('독점 신작', '이벤트로 달리자', 'ㄸㅂㅇㄹ ㄹㅂㅇ'), 
        createFormat10('오늘의 추천'), createFormat2(), createFormat6('일간 소년 TOP'),
        createFormat10('[ORIGINAL] 믿고보는 독.점.연.재'), createFormat9('[GIFT] 오늘의 선물🎁'),
        createFormat9('[HOT] 지금 뜨는 인기작'), createFormat9('[PICK] 요일 웹툰 추천작'),
        createFormat10('#일본 명작 - 재미 보장! 시간 순삭!'), createFormat10('#노블코믹스 - 소설 원작의 웹툰화!'),
        createFormat9('#완결까지 정주행 - 기다무로 달리자!'), createFormat9('#밀리언페이지 - 100만의 PICK!'),
        createFormat11('소년 전체')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const createPageDrama = () => {
    const formats = [
        createFormat0(), createFormat1B('월간베스트#20', '#이벤트로달리자', '완결까지#정주행'),
        createFormat10('오늘의 추천'), createFormat2(), createFormat6('일간 드라마 TOP'),
        createFormat5('믿고 보는 독점/선연재!'), createFormat9('지금 UP 뜬 추천작'),
        createFormat9('오늘의 선물🎁 대여권 받자!'), createFormat9('지금 뜨는 인기작'),
        createFormat10('이달의 HOT한 신작!'), createFormat10('이번 생은 부와 명에! #현판'),
        createFormat10('신비로운 대서사시! #판드'), createFormat10('생명이 오가는 긴박함! #메디컬'),
        createFormat10('알고 보니 웹툰? #영회·드라마 원작!'), createFormat9('최신 기다무 런칭작!'),
        createFormat9('더 많이, 더 빠르게! 기다리면무료+'), createFormat9('요일웹툰 추천작!'),
        createFormat9('대세는 요리!'), createFormat9('파란만장 스쿨라이프'), createFormat9('실용 명작'),
        createFormat9('가슴을 울리는 음악의 선율'), createFormat9('내 귀여움에 빠져볼래냥?'), 
        createFormat9('빠져든다, 스릴러&미스터리'), createFormat9('판타지 드라마'), 
        createFormat9('조금 특별한 일상 드라마'), createFormat9('베스트셀러'), createFormat11('드라마 전체')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const createPageRomance = () => {
    const formats = [
        createFormat0(), createFormat1B('완결까지 정주행', '인기완결작', '기다무플러스'),
        createFormat10('오늘의 추천'), createFormat2(), createFormat6('일간 로맨스 TOP'),
        createFormat9('믿고보는 독!점!'), createFormat10('어디에도 없는 오리지널 추천작'),
        createFormat9('지금뜨는 인기작'), createFormat10('더 많이, 더 빠르게! 기다리면무료+'),
        createFormat5('기다림이 반! 12시간마다 무료'), createFormat9('최신 연재작'), 
        createFormat9('오늘의 추천 GL'), createFormat9('요일웹툰 추천작'), createFormat9('최신 기다무 런칭작!'),
        createFormat9('베스트셀러'), createFormat9('오피스 로맨스'), createFormat9('시대극 로맨스'),
        createFormat9('학원 로맨스'), createFormat9('로맨스릴러'), createFormat9('캠퍼스 로맨스'),
        createFormat9('로맨스의 명가, 할리퀸 컬렉션'), createFormat9('황미리&한유랑, 로맨틱 코미디'),
        createFormat11('로맨스 전체')

    ];
    const contents = combineFormats(formats)
    
    initPage();
    addToContents(contents);
}

export const createPageRofan = () => {
    const formats = [
        createFormat0(), createFormat1B('월간 베스트', '스테디셀러정주행', '기다무 플러스'),
        createFormat10('오늘의 추천'), createFormat2(), createFormat6('일간 로맨스판타지 TOP'),
        createFormat10('금요일, 믿고 보는 독.점.연.재'), createFormat9('기다림은 반, 재미는 두배? 12시간 무료!'),
        createFormat9('지금 뜨는 인기작'), createFormat9('최신 연재작'), createFormat9('요일 웹툰 추천작!'),
        createFormat9('🖤이달의 추천신작🖤'), createFormat9('#1화부터 완결까지 달리자!'),
        createFormat10('#눈호강: 비주얼 끝판왕을 찾고 있다면?!'), createFormat10('#육아: 심쿵, 랜선 조카 모음집'),
        createFormat10('#걸크러시: 악녀, 가주, 기사까지 모두 모였다!'), createFormat10('#신박한 로판 사전: 이런 소재 찾고 계신가요?'),
        createFormat9('#정주행: 추천 완결작'), createFormat9('베스트 셀러'), createFormat11('로판 전체')
    ];
    const contents = combineFormats(formats)

    initPage();
    addToContents(contents);
}

export const createPageAction = () => {
    const formats = [
        createFormat0(), createFormat1B('독점 신작🔥', '이벤트로 달리자', '기다무 플러스'), 
        createFormat10('오늘의 추천!'), createFormat2(), createFormat5('일간 액션/무협 TOP'),
        createFormat10('ORIGINAL 독점 연재'), createFormat9('지금 뜨는 인기작'),
        createFormat9('혜택함🎁 시간 삭제 버튼!'), createFormat10('더 많이, 더 빠르게 기다리면 무료 플러스'),
        createFormat9('쎈 놈들의 액션'), createFormat10('요즘 빌런, 트렌디 무협'),
        createFormat5('정통 무협 어벤져스!'), createFormat9('HARD CORE & DRAMA'), createFormat9('장세이 테마 액션관'),
        createFormat9('리바이벌! 파격 삼국지'), createFormat9('향수에 취하다! 묵검향'), createFormat11('액션무협 전체')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const createPageBL = () => {
    const formats = [
        createFormat0(), createFormat1A(), createFormat9('오늘의 추천!'), createFormat6('일간 BL TOP'),
        createFormat2(), createFormat9('믿고보는 독점/선연재'), createFormat9('취향저격 추천작'),
        createFormat9('지금뜨는 인기작'), createFormat9('스테디셀러: 완결까지 정주행'),
        createFormat9('더 많이, 더 빠르게! 기다리면무료+'), createFormat5('#성공적으로 연애하는 방법'),
        createFormat9('최신 기다무 런칭작'), createFormat9('현대, 오피스'), createFormat9('연상연하, 청춘'),
        createFormat5('기다림은 반, 재미는 두 배? 12시간 무료!'), createFormat9('시대, 판타지'),
        createFormat9('매혹의 성역'), createFormat11('BL 전체')
    ];
    const contents = combineFormats(formats)

    initPage();
    addToContents(contents);
}