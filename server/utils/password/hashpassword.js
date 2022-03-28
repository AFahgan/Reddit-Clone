const bcrypt = require('bcrypt')

const hashPassword = (password) => bcrypt.hash(password, 8);

module.exports = hashPassword;