const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'static')));

app.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'static/index.html'))
);

app.listen(PORT, () =>
  console.log(`✅ Server running on PORT: http://localhost:${PORT}`)
);
