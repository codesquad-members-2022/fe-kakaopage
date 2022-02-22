import express from "express";
const server = express();

server.listen(3000, (err) => {
  if(err) return console.log(err);
  console.log("The server is listening on port 3000");
});