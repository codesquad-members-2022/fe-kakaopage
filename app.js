const dataRouter = require('./router/dataRouter.js');

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.redirect('/main'));

app.use(express.static('static'));

app.use('/data', dataRouter);

app.get('/main', (req, res) => res.sendFile(`${__dirname}/static/index.html`));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
