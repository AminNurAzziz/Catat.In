const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userSchema');
const moment = require('moment');


const expenseSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: moment().format('YYYY-MM-DD')
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Expense', expenseSchema);