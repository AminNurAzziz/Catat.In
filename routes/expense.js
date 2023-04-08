const express = require('express');
const router = express.Router();
const expense = require('../controllers/expenseController');


router.route('/input')
    .get(expense.InputExpense)

router.route('/expense')
    .get(expense.getAllExpense)
    .post(expense.setExpense);

module.exports = router;