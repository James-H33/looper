var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Phones = require('../models/phonesModels');


router.get('/phones', function(req, res) {
  Phones.find({}, function(err, phones) {
    if (err) {
      console.log(err);
    } else {
      res.render('phones', {phone: phones});
    }
  })
})

module.exports = router;
