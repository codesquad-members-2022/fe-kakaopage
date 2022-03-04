const express = require('express');
const path = require('path');
const mockDB = require('./db/store.js');
const cors = require('cors');
const routes = require('./routes.js');

const PORT = 4000;
const app = express();

const db = mockDB();
db.initDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 직접 http header로 cors문제 해결
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
//   res.header('Content-Type', 'application/x-www-form-urlencoded');
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
//   next();
// });

// 프론트가 실행되고 있는 로컬 8080포트 cors허용하기(cors가 localhost랑 127.0.0.1을 다르게 봄)
const allowlist = ['http://127.0.0.1:8080', 'http://localhost:8080'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowlist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};

app.use(cors(corsOptions));

app.get(routes.uidContent, async (req, res) => {
  const { categoryUid, subCategoryUid } = req.query;
  const mainUid = Number(categoryUid);
  const subUid = Number(subCategoryUid);
  const resultObj = {};
  try {
    const content = await db.findData(mainUid, subUid);
    resultObj.content = content;
    resultObj.isSuccess = true;
    resultObj.msg = '성공!';
  } catch (error) {
    resultObj.isSuccess = false;
    resultObj.msg = error.message;
  }
  res.json(resultObj);
});

app.get('/', (req, res) => {
  res.send('프론트와 분리된 서버입니다.');
});

app.listen(PORT, () =>
  console.log(`✅ Server running on PORT: http://localhost:${PORT}`)
);
