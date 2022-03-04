import { issueObj, bannerObj, WebtoonData } from "../data/dummy";

export const getCategory = (req, res) => {
    const id = +req.params.id;
    const parsingData = WebtoonData.filter(data => data.categoryId === id);
    return res.json(parsingData);
}

export const getIssue = (req, res) => {
    const id = +req.params.id;
    return res.json(issueObj[id]);
}

export const getBanner = (req, res) => {
    const id = +req.params.id;
    return res.json(bannerObj[id]);
}