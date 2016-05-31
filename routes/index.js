var express = require('express');
var router = express.Router();

var timestamp = require('../public/javascripts/timestamp.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Timestamp microservice' });
});

router.get('/*/*', function(req, res, next) {
  res.send('adeus');
});

router.get('/*', function(req, res, next) {
  res.send('olá');
});

module.exports = router;
