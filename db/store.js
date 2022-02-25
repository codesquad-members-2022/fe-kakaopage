function mockDB() {
  const initMsg = '✅ Connect with mock DB';
  return {
    initDB: function () {
      console.log(initMsg);
    },
    findData: function (mainUid, subUid) {
      return new Promise((resolve, reject) => {
        try {
          resolve({ mainUid, subUid });
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}

module.exports = mockDB;
