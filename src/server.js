import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import categoryRouter from "./routers/categoryRouter";
import webtoonRouter from "./routers/webtoonRouter";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("src/public"));
app.use('/data', express.static("src/data"));
app.use(cors());

app.listen(PORT, () => {
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);
});

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).end(`<h1>ERROR</h1>`);
      }
      res.status(200).end(data);
    });
});

app.use("/webtoon", webtoonRouter);
app.use("/category", categoryRouter);