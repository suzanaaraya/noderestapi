const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//routes
router.get('/', userController.getAllUsers); // gettimg  all users
router.get('/:id', userController.getUserById); // getting user by id
router.post('/', userController.createUser); // creating a  new user
router.put('/:id', userController.updateUser); // updating user by id
router.delete('/:id', userController.deleteUser); // deleting user by id