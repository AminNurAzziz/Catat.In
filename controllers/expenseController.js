const Expense = require('../models/expenseSchema');
const Wallet = require('../models/walletSchema');
const User = require('../models/userSchema');


// Handler untuk GET /expense
module.exports.getAllExpense = async (req, res, next) => {
    try {
        const result = await Expense.find({ user: req.user._id });
        const wallet = await Wallet.findOne({ user: req.user._id });
        res.render('home', { result, wallet })
    } catch (error) {
        next(error);
    }
};

// Input untuk GET /expense
module.exports.InputExpense = async (req, res, next) => {
    try {
        res.render('input')
    } catch (error) {
        next(error);
    }
};

// Handler untuk POST /expense
module.exports.setExpense = async (req, res, next) => {
    let { date, category, amount } = req.body;
    // const user = req.user._id; // Mendapatkan user yang sedang login
    if (category === 'lainnya') {
        category = req.body['tipe-lainnya'];
    }

    try {
        const expense = new Expense({ category, amount, date, user: req.user._id });
        const result = await expense.save();

        // Update saldo wallet user
        const wallet = await Wallet.findOne({ user: req.user._id });
        wallet.balance -= amount;
        wallet.expense += amount;
        await wallet.save();
        res.redirect('/expense');
    } catch (error) {
        next(error);
    }
};


module.exports.deleteExpense = async (req, res, next) => {
    try {
        res.send('Delete')
    } catch (error) {
        next(error);
    }
}

module.exports.updateExpense = async (req, res, next) => {
    try {
        res.send('Update')
    } catch (error) {
        next(error);
    }
}

