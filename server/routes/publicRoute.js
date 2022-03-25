const publicRoute = require("express").Router();
const path = require("path");
const { isAuthProtected, isUserLogined } = require("../controllers/middleware");

publicRoute.get("/home", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public",  "index.html")
  );});
publicRoute.get("/register", isUserLogined,(req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "register.html")
  );
});
publicRoute.get("/login", isUserLogined, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "login.html")
  );

});
publicRoute.get("/profile",isAuthProtected, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "profile.html")
  );

});
publicRoute.get("/reddit",isAuthProtected, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "reddit.html")
  );

});
module.exports = publicRoute;
