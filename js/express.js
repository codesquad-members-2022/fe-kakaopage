
import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express();
const port = 3000;


console.log(path.join(__dirname, '..' , "/index.html"));
// '/' 주소로 접속 시 response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', "/index.html"))
});

// localhost:3000 경로로 접속가능
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});