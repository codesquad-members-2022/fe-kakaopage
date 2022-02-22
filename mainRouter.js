import express from "express";

const mainRouter = express.Router();
const handleMain = (req, res) => {
  res.render("index.html");
};

mainRouter.get("/", handleMain);

export default mainRouter;
