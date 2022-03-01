const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/webtoon/datas', (req, res) => {
  res.sendFile(path.join(__dirname, '/json/datas.json'))
})

// const image
// app.use('/webtoon/datas')
app.use('/', express.static(path.join(__dirname, './public/js')))
app.use('/', express.static(path.join(__dirname, './public/json')))
app.use('/', express.static(path.join(__dirname, './public/css')))
app.use('/', express.static(path.join(__dirname, './public/images')))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
