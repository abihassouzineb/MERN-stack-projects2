const mongoose = require('mongoose');


// creating estate schema
const estateSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true
      },
      description: {
            type: String,
            required: true
      },
      location: {
            type: String,
            required: true
      },
      price: {
            type: Number,
            required: true
      },
      image: {
            type: String,
            required: true
      },
      Beds: {
            type: Number,
            required: true
      },
      Baths: {
            type: Number,
            required: true
      }
});

const Estate = mongoose.model('Estate', estateSchema);

module.exports = Estate;