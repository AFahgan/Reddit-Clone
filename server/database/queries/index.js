const postSign = require("./postSignUp");
const getUsers = require("./getAllUsers");
const getUserByEmail = require("./getUserbyEmail");
const addPostDB  = require("./addPostDB");
const updatepostDB  = require("./updatepostDB");
const getpostsDB  = require("./getpostsDB");
const deletepostDB  = require("./deletepostDB");
const getUserPostDB  = require("./getUserPostDB");

module.exports = {
  postSign,
  getUsers,
  getUserByEmail,
  addPostDB,
  updatepostDB,
  getpostsDB,
  deletepostDB,
  getUserPostDB,

};
