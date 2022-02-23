const express = require('express');
const cors = require('cors');
const logger= require('morgan');
const app = express()

app.use(cors())
app.use(logger());
app.use(express.static('static'));

const PORT = 3000;

app.listen(PORT, ()=>console.log(`listening to http://localhost:${PORT}`));