const express = require('express');
const app = express();
const port = 3030;

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Front server listening on port ${port}`)
})