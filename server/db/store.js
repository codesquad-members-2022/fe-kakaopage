const getHomeData = require('./homeDB.js');
const getWebtoonData = require('./webtoonDB.js');
const getNovelData = require('./novelDB.js');
const { MAIN_CATEGORY_UID } = require('../constants/uid.js');

const { MAIN, WEBTOON, NOVEL, MOVIE, TV, BOOK } = MAIN_CATEGORY_UID;

function mockDB() {
  const initMsg = '✅ Connect with mock DB';
  return {
    initDB: function () {
      console.log(initMsg);
    },
    findData: function (mainUid, subUid) {
      return new Promise((resolve, reject) => {
        let state = null;
        try {
          switch (mainUid) {
            case MAIN:
              state = getHomeData(subUid);
              break;
            case WEBTOON:
              state = getWebtoonData(subUid);
              break;
            case NOVEL:
              state = getNovelData(subUid);
              break;
            default:
              state = getHomeData(subUid);
              break;
          }
          resolve(state);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}

module.exports = mockDB;
