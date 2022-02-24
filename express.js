const express = require('express');
// 모듈을 로드해오는 코드
const app = express();
// 익스프레스를 함수처럼 호출하고 있다-> 익스프레스는 일종의 함수임.
// 여기 안에 application이라는 객체가 담겨있고, 우리는 이를 사용할 수 있음.

const port = 3000

app.get('/', (request, res) => {
  res.sendFile(__dirname +'/main.html');
})
// get(paths, )
// route, routing
// 어떤 길을 따라서 가다가, 갈림길에서 방향을 잡는 것.
// 사용자들이 여러가지 path를 통해서 들어올때 적당한 응답을 해주는 것.

// app.use(express.static('public'));
// // /static경로에, public몰더를 추가한다.
// // localhost:3000/static/image.png -> 이미지 작동됨
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// 3000번 포트에 listen하게되고, 성공하면 console.log이 찍히도록 되어 있다.