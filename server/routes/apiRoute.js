const apiRoute = require("express").Router();
const { postSignUp, signin } = require("../controllers");



apiRoute.post("/register", postSignUp);
apiRoute.post("/login", signin);

module.exports = apiRoute;
