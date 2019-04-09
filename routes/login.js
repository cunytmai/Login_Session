// login.js

const router = require('express').Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/', (req, res) => {
  res.render('login/login', {user: req.body.user});
});

router.post('/', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("tmai");
    dbo.collection('users').findOne({username: req.body.user, password: req.body.pass}, function (err, result) {
      if (err) console.log(err);
      if (result === null) res.send('null');
      else {
        req.session.user = result.username;
        // res.send({user: result.username});
        // res.redirect('/login');
         res.render('home/home', {user: req.session.user});
      }
      db.close();
    });
  });
});

module.exports = router;
