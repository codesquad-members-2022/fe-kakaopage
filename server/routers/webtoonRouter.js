import express from 'express';
import webtoonData from '../data/webtoon.json';
export const webtoonRouter = express.Router();

webtoonRouter.get('/home', (req, res) => {
    res.json(webtoonData.home)
});
webtoonRouter.get('/daily', (req, res) => {
    res.json(webtoonData.daily);
});
webtoonRouter.get('/webtoon', (req, res) => {
    res.json(webtoonData.webtoon);
});
webtoonRouter.get('/boy', (req, res) => {
    res.json(webtoonData.boy);
});
webtoonRouter.get('/drama', (req, res) => {
    res.json(webtoonData.drama);
});
webtoonRouter.get('/romance', (req, res) => {
    res.json(webtoonData.romance);
});
webtoonRouter.get('/rofan', (req, res) => {
    res.json(webtoonData.rofan);
});
webtoonRouter.get('/action', (req, res) => {
    res.json(webtoonData.action);
});
webtoonRouter.get('/bl', (req, res) => {
    res.json(webtoonData.bl);
});