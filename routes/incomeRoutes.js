const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');
 
//routes
 router.get('/', incomeController.getAllIncomes); // geting  all incomes
 router.get('/:id', incomeController.getIncomeById); // getting income by id
 router.post('/', incomeController.createIncome); // creating a  new income
 router.put('/:id', incomeController.updateIncome); // updating income by id
 router.delete('/:id', incomeController.deleteIncome); // deleting income by id

 //exporting the router

 module.exports = router;