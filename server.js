// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = '4200';
const mongo = require('mongodb');
const session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/views/'));
app.use(express.static(__dirname + '/node_modules/'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const home = require('./routes/home.js');
const login = require('./routes/login.js');
const register = require('./routes/register.js');
app.use('/', home);
app.use('/login', login);
app.use('/register', register);

app.get('*', (req, res) => { res.send({ err: '404' }); });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/tmai";
//
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   db.close();
// });

app.listen(port, () => {
  console.log('listening on port: ' + port);
});
