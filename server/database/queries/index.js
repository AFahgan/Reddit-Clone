const postSign = require("./postSignUp");
const getUsers = require("./getAllUsers");
const getUserByEmail = require("./getUserbyEmail");
const addPostDB  = require("./addPostDB");
const updatepostDB  = require("./updatepostDB");
const getpostsDB  = require("./getPostsDB");
const deletepostDB  = require("./deletepostDB");
const getUserPostDB  = require("./getUserPostDB");
const getUserByUsername = require("./getUserbyUsername");
module.exports = {
  postSign,
  getUsers,
  getUserByEmail,
  addPostDB,
  updatepostDB,
  getpostsDB,
  deletepostDB,
  getUserPostDB,
  getUserByUsername,

};
