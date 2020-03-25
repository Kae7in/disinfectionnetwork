const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const cors = require("cors")
const sslRedirect = require('heroku-ssl-redirect')
const fetch = require('node-fetch')
const dotenv = require('dotenv')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(sslRedirect())
dotenv.config()

// caching for fetching distilleries from airtable
let distilleries = {records: []}
let lastFetched = (new Date()).getTime()

// AJAX
app.get('/hello', (req, res) => res.send({ message: 'Welcome to the Disinfection Network.' }))
app.get('/distilleries', (req, res) => {
  const baseId = "app6GXpCRTsrba4vh"
  const table = "Distillery%20Hit%20List" //"Distilleries%20Form%20Results"
  const numRecords = 100;  // according to AirTable docs, if numRecords > pageSize, need to paginate. but pageSize max is 100.
  const view = "Master%20view"; //"Public%20View"
  const apiKey = process.env.AIRTABLE_API_KEY; // create a .env file with this var

  // send cache if data exists and within X seconds of last fetch
  const newTimeStamp = (new Date()).getTime()
  if (distilleries.records.length > 0 && (newTimeStamp - lastFetched < 5 * 1000)) {
    console.log('sending cache')
    res.send({data: distilleries})
  } else {
    console.log('fetching')
    lastFetched = newTimeStamp
    fetch(`https://api.airtable.com/v0/${baseId}/${table}?maxRecords=${numRecords}&view=${view}`, {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    })
    .then(res => res.json())
    .then(json => {
      distilleries = json
      res.send({data: distilleries})
    })
    .catch(err => res.err(err))
  }
  
  
})

// SERVER
app.use(favicon(__dirname + '/client/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))