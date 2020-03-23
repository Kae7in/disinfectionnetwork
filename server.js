const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const cors = require("cors")
const sslRedirect = require('heroku-ssl-redirect')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(sslRedirect())

app.get('/hello', (req, res) => res.send({ message: 'Welcome to the Disinfection Network.' }))

app.use(favicon(__dirname + '/client/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))