const express = require('express');
const path = require('path');
const mockDB = require('./db/store');

const PORT = process.env.PORT || 4000;
const app = express();

const db = mockDB();
db.initDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get('/*', async (req, res) => {
//   // req.params나 req.query 알아보고 url에서 바로 받아오기
//   const { categoryUid, subCategoryUid } = req.body;
//   const resultObj = {};
//   try {
//     const content = await db.findData(categoryUid, subCategoryUid);
//     resultObj.content = content;
//     resultObj.isSuccess = true;
//     resultObj.msg = '성공!';
//   } catch (error) {
//     resultObj.isSuccess = false;
//     resultObj.msg = error.message;
//   }
//   res.send(resultObj);
// });

app.get('/', (req, res) => {
  console.log(req);
  res.send('프론트와 분리된 서버입니다');
});

app.listen(PORT, () =>
  console.log(`✅ Server running on PORT: http://localhost:${PORT}`)
);
