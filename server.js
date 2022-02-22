const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/static', express.static(path.resolve(__dirname, 'static')));

// mocke데이터를 post로 받아올 예정
app.post('/*', (req, res) => {
  const { uid } = req.body;
  res.send({ uid });
});

// 클라이언트에서 라우팅을 관리하기 때문에 어떤 path로 가든 index.html렌더링하기
app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'static/index.html'))
);

app.listen(PORT, () =>
  console.log(`✅ Server running on PORT: http://localhost:${PORT}`)
);
