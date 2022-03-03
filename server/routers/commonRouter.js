import express from 'express';
import commonData from '../data/common.json';
export const commonRouter = express.Router();

commonRouter.get('/gnb', (req, res) => {
    res.json(commonData.gnb)
});
commonRouter.get('/genreTab/webtoon', (req, res) => {
    res.json(commonData.genreTab.webtoon)
});
commonRouter.get('/genreTab/novel', (req, res) => {
    res.json(commonData.genreTab.novel)
});
commonRouter.get('/genreTab/movie', (req, res) => {
    res.json(commonData.genreTab.movie)
});
commonRouter.get('/genreTab/broadcast', (req, res) => {
    res.json(commonData.genreTab.broadcast)
});
commonRouter.get('/genreTab/book', (req, res) => {
    res.json(commonData.genreTab.book)
});