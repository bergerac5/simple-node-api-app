//Validation middleware using DTO
const { validateUserDTO } = require('../dtos/user.dtos');

function validateUser(req, res, next) {
  const validation = validateUserDTO(req.body);

  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  next();
}

module.exports = validateUser;