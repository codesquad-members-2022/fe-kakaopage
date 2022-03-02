const express = require("express");
const app = express();

const router = require("./routes");
const port = 3000;

app.use(express.static("static"));

app.use("/", router);

app.listen(process.env.PORT || port, () => {
    console.log(`App listening on port ${port}`);
});
