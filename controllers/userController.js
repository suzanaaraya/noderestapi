const admin = require('../config/firebase');

const db = admin.database();
const userRef = db.ref('users'); // Reference to the 'users' node




// getting all users
const getAllUsers = async (req, res) => {
    try {
      const snapshot = await userRef.once('value');
      let users = snapshot.val();
      if (users && typeof users === 'object') {
        users = Object.values(users);
      }
      console.log('Processed data:', users);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong', details: error.message  });
    }
  };



// getting user by id
const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const snapshot = await userRef.child(id).once('value');
      const user = snapshot.val();
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

// creating  a new user
const createUser = async (req, res) => {
  try {
    const { id, name, username, email, address } = req.body;
    await userRef.child(id).set({ id, name, username, email, address });
    res.status(201).json({ id, name, username, email, address });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};


// updating user by id

const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, username, email, address } = req.body;
      await userRef.child(id).update({ name, username, email, address });
      res.status(200).json({ id, name, username, email, address });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

// deleting user by id
const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      await userRef.child(id).remove();
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };