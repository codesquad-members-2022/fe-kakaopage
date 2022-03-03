import express from 'express';
import commonData from '../data/common.json';
export const commonRouter = express.Router();

commonRouter.get('/gnb', (req, res) => {
    res.json(commonData.gnb)
});
commonRouter.get('/genre/webtoon', (req, res) => {
    res.json(commonData.genre.webtoon)
});
commonRouter.get('/genre/novel', (req, res) => {
    res.json(commonData.genre.novel)
});
commonRouter.get('/genre/movie', (req, res) => {
    res.json(commonData.genre.movie)
});
commonRouter.get('/genre/broadcast', (req, res) => {
    res.json(commonData.genre.broadcast)
});
commonRouter.get('/genre/book', (req, res) => {
    res.json(commonData.genre.book)
});