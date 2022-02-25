const homeData = require('./homeDB.js');
const webtoonData = require('./webtoonDB.js');
const novelData = require('./novelDB.js');

function mockDB() {
  const initMsg = '✅ Connect with mock DB';
  return {
    initDB: function () {
      console.log(initMsg);
    },
    findData: function (mainUid, subUid) {
      return new Promise(async (resolve, reject) => {
        let state = null;
        try {
          switch (mainUid) {
            case 0:
              state = homeData(subUid);
              break;
            case 1:
              state = webtoonData(subUid);
              break;
            case 2:
              state = novelData(subUid);
              break;
            default:
              state = homeData(subUid);
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
