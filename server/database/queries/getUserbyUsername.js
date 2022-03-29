const connection = require("../config/connection");

const getUserByUsername = (username) =>
  connection.query({
    text: "select * from users where username = $1 ;",
    values: [username],
  });

module.exports = getUserByUsername;
