const express = require('express');
const path = require('path');
const mockDB = require('./db/store.js');
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const app = express();

const db = mockDB();
db.initDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsOption = {
  origin: 'http://localhost:8080/',
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};

app.use(cors());

// app.use((req, res, next) => {
//   req.header('Access-Control-Allow-Origin', '*');
//   req.header('Content-Type', 'application/x-www-form-urlencoded');
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
//   next();
// });

app.post('/', async (req, res, next) => {
  const { categoryUid, subCategoryUid } = req.body;
  const resultObj = {};
  try {
    const content = await db.findData(categoryUid, subCategoryUid);
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
