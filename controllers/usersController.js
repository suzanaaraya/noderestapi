const admin = require('../config/firebase');
const db = admin.database();
// reference to the database nodes
const userRef = db.ref('users');

// getting all users
const getAllUsers = async (req, res) =>{
  try{
    const snapshot =  await userRef.once('value');
    const users = snapshot.val();
    res.status(200).json(users);

  }catch(error){
    res.status(500).json({ error:'something went wrong' });
  }
}