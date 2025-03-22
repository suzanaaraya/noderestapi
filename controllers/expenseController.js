
const admin = require('../config/firebase');

const db = admin.database();
const expenseRef = db.ref('expenses');// Reference to the 'expenses' node

// getting all expense entries

const getAllExpenses = async (req, res) => {
    try {
      const snapshot = await expenseRef.once('value');
      let expenses = snapshot.val();
      if (expenses && typeof expenses === 'object') {
        expenses = Object.values(expenses);
      }
      console.log('Processed expenses:', expenses);
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong',details: error.message });
    }
  };
// getting a sigle expense entry by id

const getExpenseById = async (req, res) => {
    try {
      const { id } = req.params;
      const snapshot = await expenseRef.child(id).once('value');
      const expenses = snapshot.val();
      if (!expenses) {
        return res.status(404).json({ error: 'Expenses entry not found' });
      }
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
// creating a new expense entry

const createExpense = async (req, res) => {
    try {
      const { id, savings, payment_obligations, insurance, housing, utilities, personal } = req.body;
      await expenseRef.child(id).set({ id, savings, payment_obligations, insurance, housing, utilities, personal });
      res.status(201).json({ id, savings, payment_obligations, insurance, housing, utilities, personal });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
// updating an expense entry by id
const updateExpense = async (req, res) => {
    try {
      const { id } = req.params;
      const { savings, payment_obligations, insurance, housing, utilities, personal } = req.body;
      await expenseRef.child(id).update({ savings, payment_obligations, insurance, housing, utilities, personal });
      res.status(200).json({ id, savings, payment_obligations, insurance, housing, utilities, personal });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

// deleting an expense entry by id

const deleteExpense = async (req, res) => {
    try {
      const { id } = req.params;
      await expenseRef.child(id).remove();
      res.status(200).json({ message: 'Expenses entry deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

  module.exports = {
    getAllExpenses,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense,
  };