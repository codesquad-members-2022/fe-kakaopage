const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const util = require('util');

const fs_writeFile = util.promisify(fs.writeFile);

const getHTML = async (url) => {
  try {
    return await axios.get(url)
  } catch(err) {
    console.log(err);
  }
}

const parsingMainHome = async () => {
  const url = 'https://page.kakao.com/main';
  const html = await getHTML(url);

  const $ = cheerio.load(html.data);
  const $item = $('.css-d582dq');
  let result = [];

  $item.each((idx, node) => {
    result.push({
      title: $(node).find('.css-6mi0ws > span').text(),
      desc: $(node).find('.css-1nd90yn').text(),
      viewer: $(node).find('.css-1c1ahuy').text(),
      author: $(node).find('.css-1pysja1').text(),
      img: 'https:' + $(node).find('.css-1iw29bw > img').attr('data-src')
    })
  });

  console.log(result);
}

// parsingMainHome()

const parsingMainBanner = async () => {
  const url = [
    'https://page.kakao.com/main',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=10000',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=1000',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=115',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=116',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=121',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=69',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=112',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=119'
  ]

  // 임의로 생성한 요일과 장르
  const day = ['home', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'end'];
  const genre = ['홈', '요일연재', '소년', '드라마', '로맨스', '로판', '액션무협', 'BL'];
  let mainBanner = [];

  for (let i = 0; i < url.length; i++) {
    const html = await getHTML(url[i]);
    const $ = cheerio.load(html.data);

    const $mainBanner = $('div.topBannerWrap');
    $mainBanner.each((idx, node) => {
      mainBanner.push({
        title: $(node).find('div.css-1tqt666').text(),
        viewer: $(node).find('div.css-13yoxln').text(),
        img: 'https:' + $(node).find('img').attr('data-src'),
        desc: $(node).find('div.css-11164fm > span').text(),
        day: day[i],
        genre: genre[i]
      })
    });
  }

  return mainBanner
}

parsingMainBanner()
.then((value) => {
  fs_writeFile('mainBannerData.js', `export const mainBannerData = 
  ${JSON.stringify(value)}`)
});

const parsingPromotionBanner = async () => {
  const url = [
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=10000',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=115',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=116',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=121',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=69',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=112',
    'https://page.kakao.com/main?categoryUid=10&subCategoryUid=119'
  ]

  const genre = ['홈', '소년', '드라마', '로맨스', '무협', '액션무협', 'BL'];

  let promotionBanner = [];

  for (let i = 0; i < url.length; i++) {
    const html = await getHTML(url[i]);
    const $ = cheerio.load(html.data);

    const $promotionBanner = $('div.jsx-1785673090');
    $promotionBanner.each((idx, node) => {
      promotionBanner.push({
        img_url: 'https:' + $(node).find('img').attr('data-src'),
        img_alt: `${genre[i]} 프로모션`,
        genre: genre[i]
      })
    });
  }

  return promotionBanner;
}

parsingPromotionBanner()
.then((value) => {
  fs_writeFile('promotionBannerData.js', `export const promotionBannerData = 
  ${JSON.stringify(value)}`)
});

const parsingDailyRanking = async () => {
  const url = 'https://page.kakao.com/main?categoryUid=10&subCategoryUid=10000';
  const html = await getHTML(url);

  const $ = cheerio.load(html.data);
  const $dailyRanking = $('.css-sknpnp');
  let result = [];
  $dailyRanking.each((idx, node) => {
    result.push({
      rank: $(node).find('.css-80le51').text(),
      title: $(node).find('.css-6mi0ws > span').text(),
      viewer: $(node).find('.css-1c1ahuy').text(),
      author: $(node).find('.css-ifcwub > .css-1pysja1').text(),
      img_url: 'https:' + $(node).find('.css-gvuv0v > img').attr('data-src'),
      img_alt: $(node).find('.css-gvuv0v > img').attr('alt'),
      genre: $(node).find('.css-ifcwub > .css-vurnku').text(),
      day: $(node).find('.css-wdpbmy').text(),
    })
  });

  return result;
}

parsingDailyRanking()
.then((value) => {
  fs_writeFile('dailyRanking.js', `export const dailyRankingData = 
  ${JSON.stringify(value)}`)
})

const parsingHomeTop = async () => {
  const url = 'https://page.kakao.com/main?categoryUid=10&subCategoryUid=10000';
  const html = await getHTML(url);
  
  const $ = cheerio.load(html.data);
  const $item = $('div.css-19y0ur2').children('a');
  
  let result = [];
  $item.each((idx, node) => {
    result.push({
      title: $(node).find('div.css-6mi0ws > span').text(),
      review: $(node).find('div.css-nfxgqr').text(),
      viewer: $(node).find('div.css-1c1ahuy').text(),
      img_url: 'https:' + $(node).find('img').attr('data-src'),
      img_alt: $(node).find('img').attr('alt')
    })
  });
  return result
}

parsingHomeTop()
.then((value) => {
  fs_writeFile('dailyTop.js', `export const dailyTopData = 
  ${JSON.stringify(value)}`)
})