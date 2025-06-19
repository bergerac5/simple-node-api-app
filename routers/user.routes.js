const express = require('express');
const router = express.Router();
const {getUserById,createUser} = require('../controllers/user.controller');
const validateUser = require('../middlewares/validate.middleware');

// Route to create a new user
router.post('/', validateUser, createUser);
// Route to get a user by ID
router.get('/:id', getUserById);

module.exports = router;



