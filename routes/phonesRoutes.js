var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Phones = require('../models/phonesModels');


router.get('/phones', function(req, res) {
  Phones.find({}, function(err, phones) {
    if (err) {
      console.log(err);
    } else {
      res.render('phones/phones', {phone: phones});
    }
  })
})

router.get('/phones/:id', function(req, res) {
  Phones.findById(req.params.id, function(err, phones) {
    if (err) {
      console.log(err);
    } else {
      res.render('phones/phone-details', {phone: phones});
    }
  })
})

module.exports = router;
