const express = require('express');
const path = require('path');
const mockDB = require('./db/store');

const PORT = process.env.PORT || 4000;
const app = express();

const db = mockDB();
db.initDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/static', express.static(path.resolve(__dirname, 'static')));

// mocke데이터를 post로 받아올 예정
app.post('/*', async (req, res) => {
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
  res.send(resultObj);
});

// 클라이언트에서 라우팅을 관리하기 때문에 어떤 path로 가든 index.html렌더링하기
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'static/index.html'))
);

app.listen(PORT, () =>
  console.log(`✅ Server running on PORT: http://localhost:${PORT}`)
);
