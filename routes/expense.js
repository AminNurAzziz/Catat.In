const express = require('express');
const router = express.Router();
const expense = require('../controllers/expenseController');

router.route('/input')
    .get(expense.InputExpense)

router.route('/expense')
    .get(expense.getAllExpense)
    .post(expense.setExpense);

router.route('/wallet/:id')
    .patch(expense.editWallet)

router.route('/editExpense/:id')
    .patch(expense.editExpense)

router.route('/expenses/delete')
    .delete(express.json(), expense.deleteExpenses);

module.exports = router;