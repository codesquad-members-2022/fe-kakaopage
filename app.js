const dataRouter = require('./dataRouter.js');

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.redirect('/main'));

app.use(express.static('public'));

app.use('/data', dataRouter);

app.get('/main', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
