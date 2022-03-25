const { clientError, serverError } = require("./handleError");
const postSignUp = require("./handelSignup");
const getUserData = require("./handleUserData");
const signin = require("./handelSignin");
module.exports = {
  clientError,
  serverError,
  getUserData,
  postSignUp,
  signin,
};