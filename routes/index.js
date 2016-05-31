var express = require('express');
var router = express.Router();

var timestamp = require('../public/javascripts/timestamp.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Timestamp microservice' });
});

router.get('/:val/*', function(req, res, next) {
	var value = timestamp(req.params.val);
	res.send({unix: value.unix(), natural: value.natural()});
});

router.get('/:val', function(req, res, next) {
	var value = timestamp(req.params.val);
	res.send({unix: value.unix(), natural: value.natural()});
});

module.exports = router;
