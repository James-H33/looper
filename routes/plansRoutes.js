var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/plans', function(req, res) {
  res.render('plans/plans');
})

module.exports = router;
