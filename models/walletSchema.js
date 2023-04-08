const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userSchema');

const walletSchema = new Schema({
    balance: {
        type: Number,
        default: 0
    },
    expense: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    }
});

module.exports = mongoose.model('Wallet', walletSchema);
