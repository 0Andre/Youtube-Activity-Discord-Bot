const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('Hey')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Creator: https://github.com/0Andre")
  })
}

module.exports = keepAlive
