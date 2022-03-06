import express from 'express';
import path from 'path';
import { webtoonRouter } from './routers/webtoonRouter.js';
import { commonRouter } from './routers/commonRouter.js';

const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'client', 'static')));
app.use('/common', commonRouter);
app.use('/webtoon', webtoonRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(port, () => {
    console.log(`hearing on http://localhost:${port}/`);
});


