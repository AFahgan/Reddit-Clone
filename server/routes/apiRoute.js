const apiRoute = require("express").Router();
const { postSignUp, signin, logout } = require("../controllers");



apiRoute.post("/register", postSignUp);
apiRoute.post("/login", signin);
apiRoute.get("/api/v1/logout", logout);

module.exports = apiRoute;
