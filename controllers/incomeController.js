const admin = require('../config/firebase');

const db = admin.database();
const incomeRef = db.ref('income');

// getting all income entries

const getAllIncomes = async (req, res) => {
    try {
        const snapshot = await incomeRef.once('value');
        let income = snapshot.val();
        if (income && typeof income === 'object') {
            income = Object.values(income);
        }
        console.log('Processed income:', income);
        res.status(200).json(income);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
  };

// getting a sigle income entry by id

const getIncomeById = async (req, res) => {
    try {
      const { id } = req.params;
      const snapshot = await incomeRef.child(id).once('value');
      const income = snapshot.val();
      if (!income) {
        return res.status(404).json({ error: 'Income entry not found' });
      }
      res.status(200).json(income);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
// creating a new income entry

const createIncome = async (req, res) => {
    try {
      const { id, wages, secondary_income, interest, support_payment, others } = req.body;
      await incomeRef.child(id).set({ id, wages, secondary_income, interest, support_payment, others });
      res.status(201).json({ id, wages, secondary_income, interest, support_payment, others });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
// updating an income entry by id

const updateIncome = async (req, res) => {
    try {
      const { id } = req.params;
      const { wages, secondary_income, interest, support_payment, others } = req.body;
      await incomeRef.child(id).update({ wages, secondary_income, interest, support_payment, others });
      res.status(200).json({ id, wages, secondary_income, interest, support_payment, others });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
// deleting an income entry by id
const deleteIncome = async (req, res) => {
    try {
      const { id } = req.params;
      await incomeRef.child(id).remove();
      res.status(200).json({ message: 'Income entry deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  module.exports = {
    getAllIncomes,
    getIncomeById,
    createIncome,
    updateIncome,
    deleteIncome,
  };