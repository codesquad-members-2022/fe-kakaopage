import express from "express";
const app = express();
app.use(express.json());
const port = 5000;

app.get("/api/hello", (req, res) => {
  res.send({ message: "안녕" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
