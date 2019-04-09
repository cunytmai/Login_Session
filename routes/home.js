// home.js

const router = require('express').Router();
const request = require('request');

router.get('/', (req, res) => {
  res.render('home/home', {user: req.session.user});
});

router.post('/', (req, res) => {
  req.session.user = null;
  res.render('home/home', {user: req.session.user});
});
module.exports = router;
