var mongoose = require('mongoose');

var phonesSchema = new mongoose.Schema({
  name: String,
  ratings: String,
  images: [String],
  contract_price: String,
  total_price: String,
  specs:
    {
      display: [String],
      size_weight: [String],
      os: [String],
      battery: [String],
      camera: [String],
      memory: [String]
    }

})
module.exports = mongoose.model('Phones', phonesSchema);
