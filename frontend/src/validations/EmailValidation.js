
const emailValidator = require('email-validator');

function validateEmail(email) {
  const isValid = emailValidator.validate(email);
  return isValid;
}

module.exports = { validateEmail };