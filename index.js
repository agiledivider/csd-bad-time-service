const express = require('express')
const app = express()
const port = 80
const process = require('process')

var counter = 0;
var amIBad = false;
app.get('/', (req, res) => {
  counter++
  if (amIBad && counter % 3 === 0) {
    res.status(500).end()
  } else {
    res.send(Date.now().toString())
  }
})

app.get('/bebad/', (req, res) => {
  amIBad = true
  res.send('I am bad now')
})

app.get('/begood/', (req, res) => {
  amIBad = false
  res.send('I am good now')
})

app.get('/status/', (req, res) => {
  if (amIBad) {
    res.send('I am bad')
  } else {
    res.send('I am good')
  }
})

app.get('/counter/', (req, res) => {
  res.send('count: ' + counter)
})

process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})