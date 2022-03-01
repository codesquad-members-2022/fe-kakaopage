const express = require('express');
const path = require('path');
const mockDB = require('./db/store.js');
const cors = require('cors');
const routes = require('./routes.js');

const PORT = process.env.PORT || 4000;
const app = express();

const db = mockDB();
db.initDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use((req, res, next) => {
//   req.header('Access-Control-Allow-Origin', '*');
//   req.header('Content-Type', 'application/x-www-form-urlencoded');
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
//   next();
// });

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

app.use(cors(corsOptions), (req, res, next) => {
  next();
});

app.get('/api', async (req, res) => {
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
  console.log(req.url);
  res.send('프론트와 분리된 서버입니다.');
});

app.listen(PORT, () =>
  console.log(`✅ Server running on PORT: http://localhost:${PORT}`)
);
