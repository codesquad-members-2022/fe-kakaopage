import { setSlideBanner } from "./banner.js";
import { genreNavEventHandler, headNavEventHandler, addSelected } from "./event.js";
import { createFormatBannerMain, createFormatContentsBoxBigger, createFormatTotal, createFormatHotizontalList, createFormatSummaryA, createFormatSummaryB, createFormatBannerAd, createFormatDailyTop, createFormatImgWithLine, createFormatContentsBox, createFormatRanking, createFormatBannerSub, createFormatDailyWebtoon, createFormatHorizontalContents, createFormatNotYet } from "./format.js";
import { dummy } from "./sources.js";
import { addClickEventToElement, addToContents, combineFormats } from "./util.js";

export function initPage(){
    const contents = document.getElementById('contents');

    contents.innerHTML = '';
}

export const renderPageInit = () => {
    renderPageHome();
    addClickEventToElement('body', addSelected);
    addClickEventToElement('body', genreNavEventHandler);
    addClickEventToElement('body', headNavEventHandler);
}

export const renderPageHome = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatSummaryA(), createFormatBannerAd(), createFormatDailyTop(),
        createFormatImgWithLine(), createFormatContentsBox('로맨스 TOP'), createFormatContentsBox('로판 TOP'), createFormatContentsBox('드라마 TOP'),
        createFormatContentsBox('BL/GL TOP'), createFormatContentsBox('소년 TOP'), createFormatContentsBox('액션무협 TOP'),
        createFormatRanking('일간 랭킹 TOP'), createFormatBannerSub()
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
    addSelectedToday();
    document.getElementById('genre-home').classList.add('selected');
    setSlideBanner(".banner-main", dummy.slideBannerMainImg, 45, 500, true, 2000);
}

export const renderPageDaily = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatDailyWebtoon()
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
    addSelectedToday();
}

export const renderPageWebtoon = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatHotizontalList(), createFormatHorizontalContents('🔥HOT 최근 프로모션 진행작')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const renderPageTeen = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatSummaryB('독점 신작', '이벤트로 달리자', 'ㄸㅂㅇㄹ ㄹㅂㅇ'), 
        createFormatContentsBoxBigger('오늘의 추천'), createFormatBannerAd(), createFormatRanking('일간 소년 TOP'),
        createFormatContentsBoxBigger('[ORIGINAL] 믿고보는 독.점.연.재'), createFormatHorizontalContents('[GIFT] 오늘의 선물🎁'),
        createFormatHorizontalContents('[HOT] 지금 뜨는 인기작'), createFormatHorizontalContents('[PICK] 요일 웹툰 추천작'),
        createFormatContentsBoxBigger('#일본 명작 - 재미 보장! 시간 순삭!'), createFormatContentsBoxBigger('#노블코믹스 - 소설 원작의 웹툰화!'),
        createFormatHorizontalContents('#완결까지 정주행 - 기다무로 달리자!'), createFormatHorizontalContents('#밀리언페이지 - 100만의 PICK!'),
        createFormatTotal('소년 전체')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const renderPageDrama = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatSummaryB('월간베스트#20', '#이벤트로달리자', '완결까지#정주행'),
        createFormatContentsBoxBigger('오늘의 추천'), createFormatBannerAd(), createFormatRanking('일간 드라마 TOP'),
        createFormatContentsBox('믿고 보는 독점/선연재!'), createFormatHorizontalContents('지금 UP 뜬 추천작'),
        createFormatHorizontalContents('오늘의 선물🎁 대여권 받자!'), createFormatHorizontalContents('지금 뜨는 인기작'),
        createFormatContentsBoxBigger('이달의 HOT한 신작!'), createFormatContentsBoxBigger('이번 생은 부와 명에! #현판'),
        createFormatContentsBoxBigger('신비로운 대서사시! #판드'), createFormatContentsBoxBigger('생명이 오가는 긴박함! #메디컬'),
        createFormatContentsBoxBigger('알고 보니 웹툰? #영회·드라마 원작!'), createFormatHorizontalContents('최신 기다무 런칭작!'),
        createFormatHorizontalContents('더 많이, 더 빠르게! 기다리면무료+'), createFormatHorizontalContents('요일웹툰 추천작!'),
        createFormatHorizontalContents('대세는 요리!'), createFormatHorizontalContents('파란만장 스쿨라이프'), createFormatHorizontalContents('실용 명작'),
        createFormatHorizontalContents('가슴을 울리는 음악의 선율'), createFormatHorizontalContents('내 귀여움에 빠져볼래냥?'), 
        createFormatHorizontalContents('빠져든다, 스릴러&미스터리'), createFormatHorizontalContents('판타지 드라마'), 
        createFormatHorizontalContents('조금 특별한 일상 드라마'), createFormatHorizontalContents('베스트셀러'), createFormatTotal('드라마 전체')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const renderPageRomance = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatSummaryB('완결까지 정주행', '인기완결작', '기다무플러스'),
        createFormatContentsBoxBigger('오늘의 추천'), createFormatBannerAd(), createFormatRanking('일간 로맨스 TOP'),
        createFormatHorizontalContents('믿고보는 독!점!'), createFormatContentsBoxBigger('어디에도 없는 오리지널 추천작'),
        createFormatHorizontalContents('지금뜨는 인기작'), createFormatContentsBoxBigger('더 많이, 더 빠르게! 기다리면무료+'),
        createFormatContentsBox('기다림이 반! 12시간마다 무료'), createFormatHorizontalContents('최신 연재작'), 
        createFormatHorizontalContents('오늘의 추천 GL'), createFormatHorizontalContents('요일웹툰 추천작'), createFormatHorizontalContents('최신 기다무 런칭작!'),
        createFormatHorizontalContents('베스트셀러'), createFormatHorizontalContents('오피스 로맨스'), createFormatHorizontalContents('시대극 로맨스'),
        createFormatHorizontalContents('학원 로맨스'), createFormatHorizontalContents('로맨스릴러'), createFormatHorizontalContents('캠퍼스 로맨스'),
        createFormatHorizontalContents('로맨스의 명가, 할리퀸 컬렉션'), createFormatHorizontalContents('황미리&한유랑, 로맨틱 코미디'),
        createFormatTotal('로맨스 전체')

    ];
    const contents = combineFormats(formats);
    
    initPage();
    addToContents(contents);
}

export const renderPageRofan = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatSummaryB('월간 베스트', '스테디셀러정주행', '기다무 플러스'),
        createFormatContentsBoxBigger('오늘의 추천'), createFormatBannerAd(), createFormatRanking('일간 로맨스판타지 TOP'),
        createFormatContentsBoxBigger('금요일, 믿고 보는 독.점.연.재'), createFormatHorizontalContents('기다림은 반, 재미는 두배? 12시간 무료!'),
        createFormatHorizontalContents('지금 뜨는 인기작'), createFormatHorizontalContents('최신 연재작'), createFormatHorizontalContents('요일 웹툰 추천작!'),
        createFormatHorizontalContents('🖤이달의 추천신작🖤'), createFormatHorizontalContents('#1화부터 완결까지 달리자!'),
        createFormatContentsBoxBigger('#눈호강: 비주얼 끝판왕을 찾고 있다면?!'), createFormatContentsBoxBigger('#육아: 심쿵, 랜선 조카 모음집'),
        createFormatContentsBoxBigger('#걸크러시: 악녀, 가주, 기사까지 모두 모였다!'), createFormatContentsBoxBigger('#신박한 로판 사전: 이런 소재 찾고 계신가요?'),
        createFormatHorizontalContents('#정주행: 추천 완결작'), createFormatHorizontalContents('베스트 셀러'), createFormatTotal('로판 전체')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const renderPageAction = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatSummaryB('독점 신작🔥', '이벤트로 달리자', '기다무 플러스'), 
        createFormatContentsBoxBigger('오늘의 추천!'), createFormatBannerAd(), createFormatContentsBox('일간 액션/무협 TOP'),
        createFormatContentsBoxBigger('ORIGINAL 독점 연재'), createFormatHorizontalContents('지금 뜨는 인기작'),
        createFormatHorizontalContents('혜택함🎁 시간 삭제 버튼!'), createFormatContentsBoxBigger('더 많이, 더 빠르게 기다리면 무료 플러스'),
        createFormatHorizontalContents('쎈 놈들의 액션'), createFormatContentsBoxBigger('요즘 빌런, 트렌디 무협'),
        createFormatContentsBox('정통 무협 어벤져스!'), createFormatHorizontalContents('HARD CORE & DRAMA'), createFormatHorizontalContents('장세이 테마 액션관'),
        createFormatHorizontalContents('리바이벌! 파격 삼국지'), createFormatHorizontalContents('향수에 취하다! 묵검향'), createFormatTotal('액션무협 전체')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const renderPageBL = () => {
    const formats = [
        createFormatBannerMain(dummy.slideBannerMainImg), createFormatSummaryA(), createFormatHorizontalContents('오늘의 추천!'), createFormatRanking('일간 BL TOP'),
        createFormatBannerAd(), createFormatHorizontalContents('믿고보는 독점/선연재'), createFormatHorizontalContents('취향저격 추천작'),
        createFormatHorizontalContents('지금뜨는 인기작'), createFormatHorizontalContents('스테디셀러: 완결까지 정주행'),
        createFormatHorizontalContents('더 많이, 더 빠르게! 기다리면무료+'), createFormatContentsBox('#성공적으로 연애하는 방법'),
        createFormatHorizontalContents('최신 기다무 런칭작'), createFormatHorizontalContents('현대, 오피스'), createFormatHorizontalContents('연상연하, 청춘'),
        createFormatContentsBox('기다림은 반, 재미는 두 배? 12시간 무료!'), createFormatHorizontalContents('시대, 판타지'),
        createFormatHorizontalContents('매혹의 성역'), createFormatTotal('BL 전체')
    ];
    const contents = combineFormats(formats);

    initPage();
    addToContents(contents);
}

export const renderPageNotYet = () => {
    initPage();
    addToContents(createFormatNotYet());
}

export const genreFunction = {
    home: () => renderPageHome(),
    daily: () => renderPageDaily(),
    webtoon: () => renderPageWebtoon(),
    teen: () => renderPageTeen(),
    drama: () => renderPageDrama(),
    romance: () => renderPageRomance(),
    rofan: () => renderPageRofan(),
    action: () => renderPageAction(),
    BL: () => renderPageBL()
}

export const headerFunction = {
    home: () => renderPageNotYet(),
    webtoon: () => renderPageHome(),
    webnovel: () => renderPageNotYet(),
    movie: () => renderPageNotYet(),
    broad: () => renderPageNotYet(),
    book: () => renderPageNotYet(),
}

function addSelectedToday(){
    const days = document.querySelectorAll('.day');
    let today = new Date().getDay()-1;

    if(today === -1) today = 6;

    days[today].classList.add('selected');
}
