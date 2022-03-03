
import express from "express";
import path from 'path';
const __dirname = path.resolve();
import { webtoonData, contentsData } from "./webtoonData.js";

const app = express();
const port = 3000;

// localhost:3000 경로로 접속가능
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, '..', '..', 'fe-kakaopage')))

// '/' 주소로 접속 시 response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', "/index.html"))
});

app.get('/webtoon/webtoonData', (req, res) => {
    res.json(webtoonData)
})

app.get('/webtoon/contentsData', (req, res) => {
    res.json(contentsData)
})