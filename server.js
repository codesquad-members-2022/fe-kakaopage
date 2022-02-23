const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");


app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/component', express.static(path.join(__dirname, '/component')));
app.use('/container', express.static(path.join(__dirname, '/container')));
app.use('/images', express.static(path.join(__dirname, '/images')));


app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, "/index.html"), (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).end(`<h1>ERROR</h1>`);
        }
        
        res.status(200).end(data);
      });
});

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});