const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expenseController');

//routes
router.get('/', expensesController.getAllExpenses); // getting all expenses
router.get('/:id', expensesController.getExpenseById); //getting a single expenses entry by ID
router.post('/', expensesController.createExpense); // creating a new expenses entry
router.put('/:id', expensesController.updateExpense); // updating expenses entry by ID
router.delete('/:id', expensesController.deleteExpense); // deleting  expenses entry by ID

module.exports = router;