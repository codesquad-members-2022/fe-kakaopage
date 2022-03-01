import express from "express";
import { getWebtoons, getDailyRankTop, getRecommend, getPopularity, getExclusive, getTodayGift, getWeeks } from "../controllers/webtoonController";

const webtoonRouter = express.Router();

webtoonRouter.get("/", getWebtoons);
webtoonRouter.get("/dailyRank/:id", getDailyRankTop);
webtoonRouter.get("/weeks/:id", getWeeks);
webtoonRouter.get("/recommend/:id", getRecommend);
webtoonRouter.get("/popularity/:id", getPopularity);
webtoonRouter.get("/exclusive/:id", getExclusive);
webtoonRouter.get("/todayGift/:id", getTodayGift);

export default webtoonRouter;