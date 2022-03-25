const bcrypt = require('bcryptjs');

const comaprePassword = (password, hashedpassword) =>
  bcrypt.compare(password, hashedpassword);

module.exports = comaprePassword;