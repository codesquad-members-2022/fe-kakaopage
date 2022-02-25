const express = require('express');
const cors = require('cors');
const path = require('path');
const logger= require('morgan');
const app = express()

app.use(cors())
app.use(logger());
app.use(express.static('static'));
app.set('views', __dirname + '/static');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const PORT = 3000;

app.get('/', (req,res)=>{
    res.render('doc.html');
})

app.listen(PORT, ()=>console.log(`listening to http://localhost:${PORT}`));