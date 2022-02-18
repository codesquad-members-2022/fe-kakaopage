const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const getHtml = async () => {
  try {
    return await axios.get(
      "https://page.kakao.com/main?categoryUid=10&subCategoryUid=10000"
    );
  } catch (error) {
    console.error(error);
  }
};
getHtml()
  .then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.css-19y0ur2").children("a");
    $bodyList.each(function (i, elem) {
      ulList[i] = {
        img: $(this).find("img").attr("data-src"),
        title: $(this).find(".css-6mi0ws").children("span").text(),
        info: $(this).find(".css-nfxgqr").text(),
        user: $(this).find(".css-1c1ahuy").text(),
      };
    });
    return ulList;
  })
  .then((res) => {
    console.log(res);
    fs.writeFile(
      "webtoons.json",
      JSON.stringify(res, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });