const rp = require('request-promise')
const url = 'https://www.airbnb.com/rooms/2238472'

var fs = require('fs')
var util = require('util')
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags: 'w'})
var log_stdout = process.stdout

console.log = function (d) { //
  log_file.write(util.format(d) + '\n')
  log_stdout.write(util.format(d) + '\n')
}

rp(url)
  .then(function (html) {
    // success!
    console.log(html)
  })
  .catch(function (err) {
    // handle error
  })
