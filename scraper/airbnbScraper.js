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
