import express from "express";
import mainRouter from "./mainRouter.js";
import ejs from "ejs";

const app = express();

const protectedMid = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") res.send("<h1>NOT ALLOWED</h1>");
  next();
};

app.use(express.static(process.cwd() + "/client"));
app.use(protectedMid);
app.use("/", mainRouter);

app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.set("views", process.cwd() + "/client/HTML");

export default app;
