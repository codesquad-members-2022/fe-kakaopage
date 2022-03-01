const getHomeData = require('./homeDB.js');
const getWebtoonData = require('./webtoonDB.js');
const getNovelData = require('./novelDB.js');

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
            case 0:
              state = getHomeData(subUid);
              break;
            case 1:
              state = getWebtoonData(subUid);
              break;
            case 2:
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
