//server.js
if (process.env.NODE_ENV !== 'production') {
  const denv = require('dotenv').config();
}
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', ()=>console.log('Connected to Mongoose ... '));

//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

//app.use(express.static(path.join(__dirname, 'build')));

app.use()
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);