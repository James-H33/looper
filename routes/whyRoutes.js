var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/why-looper', function(req, res) {
  res.render('why-looper/why-looper');
})

module.exports = router;
