const express = require('express')
const app = express()
const port = 80
const process = require('process')

var counter = 0;
app.get('/', (req, res) => {
  counter++
  if (counter % 3 === 0) {
    res.status(500).end()
  } else {
    res.send(Date.now().toString())
  }
})

process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})