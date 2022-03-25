const { clientError, serverError } = require("./handleError");
const postSignUp = require("./handelSignup");
const getUserData = require("./handlerGetUserData");
const signin = require("./handelSignin");
const logout = require("./handlelogout");

module.exports = {
  clientError,
  serverError,
  getUserData,
  postSignUp,
  signin,
  logout,
};