import express from "express";
import mainRouter from "./mainRouter.js";
import ejs from "ejs";
import cors from "cors";
import json from "./data.json" assert { type: "json" };

const app = express();

const protectedMid = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") res.send("<h1>NOT ALLOWED</h1>");
  next();
};
const getData = (req, res, next) => {
  res.json(json);
};

app.use(cors());
app.use(express.static(process.cwd() + "/client"));
app.use(protectedMid);
app.use("/data", getData);
app.use("/", mainRouter);

app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.set("views", process.cwd() + "/client/HTML");

export default app;
