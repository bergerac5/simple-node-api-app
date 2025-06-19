const { v4: uuidv4 } = require("uuid");
const users = require("../models/user.model");

// Function to create a new user
// POST /users
function createUser(req, res) {
  const { name, email } = req.body;

  const id = uuidv4();
  const newUser = {
    id,
    name,
    email,
  };

  users[id] = newUser;
  res.status(201).json(newUser);
}

// function to search for a user by ID
// GET /users/:id
function getUserById(req, res) {
  const user = users[req.params.id];
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
}

module.exports = {
  createUser,
  getUserById,
};
