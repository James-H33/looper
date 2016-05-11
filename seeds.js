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
    images: ['/imgs/g5-crop1.png', '/imgs/g5-dem.jpg'],
    contract_price: '$0/24m Contract',
    total_price: '$399',
    specs:
      {
        display: ['5.3"', '2560 x 1440 pixels'],
        size_weight: ['5.88 x 2.91 x 0.32 inches', '5.57 ounces'],
        os: ['Android 6.0.1 Marshmallow', '2.2 GHz Quad-Core Processor'],
        battery: ['Up to 21.88 hours talk time', 'Up to 16.2 days standby time'],
        camera: ['16MP Normal & 8MP Wide Angle Lens', '8MP FFC / Dual RFC Dual Rear Camera'],
        memory: ['16GB', '64GB']
      }
  },
  {
    name: 'HTC One® M9',
    ratings: '113',
    images: ['/imgs/htc-one-m9-crop.png', '/imgs/htc-one-m9-dem.jpg'],
    contract_price: '$0/24m Contract',
    total_price: '$549',
    specs:
      {
        display: ['5"', '1920 x 1080 pixels'],
        size_weight: ['5.69 x 2.74 x 0.37 inches', '5.64 ounces'],
        os: ['Android 5.0 Lollipop', '2.2 GHz Quad-Core Processor'],
        battery: ['Up to 20 hours talk time', 'Up to 13.6 days standby time'],
        camera: ['20MP Camera with Sapphire Glass Lens', '5MP FFC'],
        memory: ['3GB RAM', '32GB Built-in Memory and Up to 128GB Expandable Memory']
      }
  },
  {
    name: 'Apple iPhone 5c',
    ratings: '132',
    images: ['/imgs/iphone5c-crop.png', '/imgs/iphone5c-dem.jpg'],
    contract_price: '$0/24m Contract',
    total_price: '$329',
    specs:
      {
        display: ['4.7"', '1334 x 750 pixels'],
        size_weight: ['4.9 x 2.33 x 0.35 inches', '4.65 ounces'],
        os: ['iOS 7', 'A6 chip'],
        battery: ['Up to 10 hours on 3G talk time', 'Up to 10 days standby time'],
        camera: ['8-megapixel iSight camera with panorama'],
        memory: ['1GB RAM', '8GB']
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
