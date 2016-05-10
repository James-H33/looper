var mongoose = require('mongoose');
var Phones = require('./models/phonesModels');

var data = [
  {
    name: 'Apple iPhone 6s',
    ratings: '561',
    images: ['/imgs/apple6s-crop.png', '/imgs/iphone6s-dem.jpg'],
    contract_price: '$0/24m Contract',
    total_price: '$649',
    specs:
      {
        display: ['4.7"', '1334 x 750 pixels'],
        size_weight: ['5.44 x 2.64 x 0.28 inches', '5.04 ounces'],
        os: ['iOS 9', 'A9 Chip', '64-bit architecture'],
        battery: ['Up to 14 hours talk time', 'Up to 10 days standby time'],
        camera: ['12-megapixel iSight Camera'],
        memory: ['16GB', '64GB']
      }
  },
  {
    name: 'Samsung Galaxy S7',
    ratings: '245',
    images: ['/imgs/g7black-crop.png', '/imgs/g7black-dem.jpg'],
    contract_price: '$0/24m Contract',
    total_price: '$499',
    specs:
      {
        display: ['5.1"', '2560 x 1440 pixels'],
        size_weight: ['5.61 x 2.74 x 0.31 inches', '5.36 ounces'],
        os: ['Android 6.0 Marshmallow', 'Qualcomm® Snapdragon™ 820 processor'],
        battery: ['Up to 28 hours talk time', 'UUp to 12 days standby time'],
        camera: ['12 MP Rear Facing Camera', '5MP Front Facing Camera'],
        memory: ['4GB RAM / 32GB ROM, expandable up to 200GB (sold separately)']
      }
  },
  {
    name: 'Samsung Galaxy S7 Edge',
    ratings: '331',
    images: ['/imgs/g7silver-crop.png', '/imgs/g7silver-dem.jpg'],
    contract_price: '$0/24m Contract',
    total_price: '$499',
    specs:
      {
        display: ['5.5"', '2560 x 1440 pixels'],
        size_weight: ['5.61 x 2.74 x 0.31 inches', '5.36 ounces'],
        os: ['Android 6.0 Marshmallow', 'Qualcomm® Snapdragon™ 820 processor'],
        battery: ['Up to 28 hours talk time', 'UUp to 12 days standby time'],
        camera: ['12 MP Rear Facing Camera', '5MP Front Facing Camera'],
        memory: ['4GB RAM / 32GB ROM, expandable up to 200GB (sold separately)']
      }
  },
  {
    name: 'LG G5 Plus',
    ratings: '302',
    images: ['/imgs/apple6s-crop.png', '/imgs/iphone6s-dem.jpg'],
    contract_price: '$0/24m Contract',
    total_price: 'Total Price: $399',
    specs:
      {
        display: ['4.7"', '1334 x 750 pixels'],
        size_weight: ['5.44 x 2.64 x 0.28 inches', '5.04 ounces'],
        os: ['iOS 9', 'A9 Chip', '64-bit architecture'],
        battery: ['Up to 14 hours talk time', 'Up to 10 days standby time'],
        camera: ['12-megapixel iSight Camera'],
        memory: ['16GB', '64GB']
      }
  }
];

function seedDB() {
  Phones.remove({}, function(err, items) {
    if (err) {
      console.log(err);
    } else {
      console.log('Removed');
      data.forEach(function(item) {
        Phones.create(item, function(err, phones) {
          if (err) {
            console.log(err);
          } else {
            console.log('Phone Created!');
            phones.save();
          }
        })
      })
    }
  })
}

module.exports = seedDB;
