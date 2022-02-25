import express from "express";
import path from 'path';
import pkg from 'express-handlebars';
const { hbs } = pkg; 
import { engine } from 'express-handlebars';
const server = express();
const __dirname = path.resolve();


server.engine("hbs", engine({
    extname: "hbs",
    defaultLayout: "layout.hbs",
  partialsDir: [
    "partials",
    path.join(__dirname, 'views/partials'),
  ]
  })
);
server.set("view engine", "hbs");
server.use(express.static(__dirname + "/public"));



server.get("/main", (req, res) => {
  res.render("home");
  // res.sendFile(__dirname + "/index.html");
  
});

// server.get("/main/")

//GET get 메소드로 서버에 요청이 왔을 경우 어떤 걸 보내줄건지 결정
server.listen(3000, (err) => {
  if(err) return console.log(err);
  console.log("The server is listening on port 3000");
});