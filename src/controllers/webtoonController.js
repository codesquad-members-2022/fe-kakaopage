import { WebtoonData } from "../data/dummy";
import { days } from "../public/utils/utils";

export const getWebtoons = (req, res) => {
    const webtoonsData = WebtoonData.slice(0, 20);
    return res.json(webtoonsData);
}

export const getWeeks = (req, res) => {
    const id = +req.params.id;
    const weeksData = WebtoonData.filter(data => data.week.includes(days[id])).sort((a, b) => b.rating - a.rating);
    return res.json(weeksData);
}

export const getDailyRankTop = (req, res) => {
    const id = +req.params.id;
    const topData = WebtoonData.filter((data) => data.categoryId === id).sort((a, b) => {
        return b.rating - a.rating;
    }).slice(0, 3);
    return res.json(topData);
}

export const getRecommend = (req, res) => {
    const id = +req.params.id;
    const recommendData = WebtoonData.filter(data => data.categoryId === id).slice(0, 4);
    return res.json(recommendData);
}

export const getPopularity = (req, res) => {
    const id = +req.params.id;
    const popularityData = WebtoonData.filter(data => data.categoryId === id).sort((a, b) => b.rating - a.rating).slice(0, 4);
    return res.json(popularityData);
}

export const getExclusive = (req, res) => {
    const id = +req.params.id;
    const exclusiveData = WebtoonData.filter(data => data.categoryId === id).sort((a, b) => b.subscriptions - a.subscriptions).slice(0, 4);
    return res.json(exclusiveData);
}

export const getTodayGift = (req, res) => {
    const id = +req.params.id;
    const todayGiftData = WebtoonData.filter(data => data.categoryId === id).slice(0, 4);
    return res.json(todayGiftData);
}