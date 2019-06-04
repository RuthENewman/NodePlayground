const https = require('https');
const url = "https://api.darksky.net/forecast/bef64b7f9653bd2ecdad26b985f0706b/37.8267,-122.4233";

const request = https.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) => {
  console.log('You have an error', error)
})


request.end()
