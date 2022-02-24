var express = require('express')
var app = express()

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})
app.use(express.static('client'))

app.get('/', function(req,res) {
  res.sendFile(__dirname + "/client/main.html")
})

app.get('/main', function(req,res) {
  res.sendFile(__dirname + "/client/main.html")
})