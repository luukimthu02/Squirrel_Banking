// models/User.js
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  id: String,
  date: String,
  object: String,
  amount: Number,
});

const UserSchema = new mongoose.Schema({
  user: { type: String, required: true },
  currency: { type: String, required: true },
  description: { type: String, required: true },
  balance: { type: Number, required: true },
  transactions: [TransactionSchema],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
