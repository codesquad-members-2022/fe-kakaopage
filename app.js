const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, function () {})

// app.use(express.static('./'))
app.use(express.static('css'))
app.use(express.static('js'))
app.use(express.static('images'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
