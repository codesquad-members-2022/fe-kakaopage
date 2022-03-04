
import express from "express";
import path from 'path';
import { webtoonData, contentsData, categoryMenus } from "./public/js/webtoonData.js";

const app = express();
const port = 3000;
// __dirname 이 좀 이상하다. 현재경로가 아닌 public/js 로 나와서 상위로 2번 이동해야함.
const __dirname = path.resolve('..', '..');

// localhost:3000 경로로 접속가능
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, 'public')))

// '/' 주소로 접속 시 response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get('/webtoon/webtoonData', (req, res) => {
    res.json(webtoonData)
})

app.get('/webtoon/contentsData', (req, res) => {
    res.json(contentsData)
})

app.get('/webtoon/categoryMenus', (req, res) => {
    res.json(categoryMenus)
})
