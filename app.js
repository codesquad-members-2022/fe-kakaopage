import express from "express";
import path from 'path';
// import pkg from 'express-handlebars';
// const { hbs } = pkg; 
import { engine } from 'express-handlebars';
const app = express();
const __dirname = path.resolve();
import acAPI from './public/src/tabData/webtoonData.json';
import acAPI2 from './public/src/tabData/mainMenu.json';
// server.engine("hbs", engine({
//     extname: "hbs",
//     defaultLayout: "layout.hbs",
//   partialsDir: [
//     "partials",
//     path.join(__dirname, 'views/partials'),
//   ]
//   })
// );
// server.set("view engine", "hbs");
// server.use(express.static(__dirname + "/public"));
app.use(express.static('public'));
app.use(express.json());


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/:tagName", (req, res) => {
  const jsonData = acAPI2[`${req.params.tagName}`];
  res.send(jsonData);
});

//GET get 메소드로 서버에 요청이 왔을 경우 어떤 걸 보내줄건지 결정
app.listen(3000, (err) => {
  if(err) return console.log(err);
  console.log("The server is listening on port 3000");
});

