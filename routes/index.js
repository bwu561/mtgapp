var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res) {
	res.send('got post');
});

router.post('/register', function(req, res) {
	res.send('got post');
});

router.get('/login', function(req, res) {
	res.send('got get :P');
});

module.exports = router;
