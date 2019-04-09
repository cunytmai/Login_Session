// register.js

const router = require('express').Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/', (req, res) => {
  res.render('register/register', {});
});

router.post('/', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("tmai");
    var myobj = { username: req.body.user, password: req.body.pass};
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("document inserted");
      db.close();
    });
  });
});

module.exports = router;
