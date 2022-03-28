const apiRoute = require("express").Router();
const { postSignUp, signin, addPost } = require("../controllers");



apiRoute.post("/register", postSignUp);
apiRoute.post("/login", signin);

module.exports = apiRoute;
