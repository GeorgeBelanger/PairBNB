const express = require('express')
const app = new express()
const fs = require('fs')
const rp = require('request-promise')
const url = 'https://www.airbnb.com/rooms/2238472'

rp(url)
  .then(function (html) {
    // success!
    console.log(html)
  })
  .catch(function (err) {
    // handle error
  })

let index = fs.readFileSync(__dirname + '/index.html')

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.send(index)
})

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function () {
  console.log('Listening on Port 3000...')
})

app.use(express.static(__dirname, +'/src/assets'))

app.use(express.static(__dirname, +'/src/images'))
