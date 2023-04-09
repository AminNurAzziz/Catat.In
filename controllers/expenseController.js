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
        const parseAmount = parseInt(amount);
        // Update saldo wallet user
        const wallet = await Wallet.findOne({ user: req.user._id });
        wallet.balance -= parseAmount;
        wallet.expense += parseAmount;
        await wallet.save();
        res.redirect('/expense');
    } catch (error) {
        next(error);
    }
};


module.exports.deleteExpenses = async (req, res, next) => {
    try {
        const ids = req.body.ids; // Ambil ID transaksi yang dicentang dari body request
        const expenses = await Expense.find({ _id: { $in: ids } }); // Ambil data transaksi yang memiliki ID yang ada di dalam array ids
        for (let expense of expenses) {
            const wallet = await Wallet.findOne({ user: req.user._id });
            wallet.balance += expense.amount;
            wallet.expense -= expense.amount;
            await wallet.save();
        }

        // Update saldo wallet user
        // const wallet = await Wallet.findOne({ user: req.user._id });
        // wallet.balance += ids.amount;
        // wallet.expense -= ids.amount;
        // await wallet.save();

        await Expense.deleteMany({ _id: { $in: ids } }); // Hapus transaksi yang memiliki ID yang ada di dalam array ids
        console.log(ids)
        res.status(200).json({ message: 'Transaksi berhasil dihapus.' });

    } catch (error) {
        next(error);
    }
};

module.exports.updateExpense = async (req, res, next) => {
    try {
        res.send('Update')
    } catch (error) {
        next(error);
    }
}

module.exports.editWallet = async (req, res) => {
    const walletId = req.params.id;
    const wallet = await Wallet.findById(walletId);
    let { balance, addition } = req.body;
    if (addition === '' || addition === undefined || addition === null) {
        addition = 0;
    }
    if (balance === '' || balance === undefined || balance === null) {
        balance = wallet.balance;
    }
    console.log(balance, addition)
    const newBalance = parseInt(balance) + parseInt(addition);
    wallet.balance = newBalance;
    await wallet.save();
    res.redirect('/expense');
};

module.exports.editExpense = async (req, res) => {
    let min = false;
    const expenseId = req.params.id;
    const expensee = await Wallet.findById(expenseId);
    let { expense } = req.body;
    if (expense === '' || expense === undefined || expense === null) {
        expense = expensee.expense;
        min = true;
    }
    const newExpense = parseInt(expense);
    expensee.expense = newExpense;
    if (min !== true) {
        expensee.balance = expensee.balance - expensee.expense;
    }
    await expensee.save();
    res.redirect('/expense');
};
