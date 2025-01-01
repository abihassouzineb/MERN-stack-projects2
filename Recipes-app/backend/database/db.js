// database/db.js
const mongoose = require('mongoose');

const connectEstateDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('MongoDB for Estates connected...');
  } catch (err) {
    console.error('Error connecting to the Estates DB:', err.message);
    process.exit(1);
  }
};

module.exports = connectEstateDB;
