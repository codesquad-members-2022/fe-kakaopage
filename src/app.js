const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hellodfdfdf world')
});

app.listen(port, () => {
    console.log(`hearing on http://localhost:${port}/`);
});