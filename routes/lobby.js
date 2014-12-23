var express = require('express');
var router = express.Router();

/* GET lobby page. */
router.get('/', function(req, res) {
  res.render('lobby', { title: 'Express' });
});

module.exports = router;