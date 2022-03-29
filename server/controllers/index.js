const { clientError, serverError } = require("./handleError");
const postSignUp = require("./handelSignup");
const getUserData = require("./handleGetUserData");
const signin = require("./handelSignin");
const logout = require("./handlelogout");
const getPosts = require("./getPosts");
const addPost = require("./addPost");
const deletePost = require('./deletePost');
const updatePost = require('./updatePost');
const getUserPosts = require('./getUserPost');

module.exports = {
  clientError,
  serverError,
  getUserData,
  postSignUp,
  signin,
  logout,
  getPosts,
  addPost,
  deletePost,
   updatePost,
   getUserPosts,
  
};