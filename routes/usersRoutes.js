const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

// Define routes
router.get('/', usersController.getAllUsers); // Get all users
router.get('/:id', usersController.getUserById); // Get a single user by ID
router.post('/', usersController.createUser); // Create a new user
router.put('/:id', usersController.updateUser); // Update a user by ID
router.delete('/:id', usersController.deleteUser); // Delete a user by ID

module.exports = router;