const publicRoute = require("express").Router();
const path = require("path");

publicRoute.get("/home", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public",  "index.html")
  );});
publicRoute.get("/register", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "register.html")
  );
});
publicRoute.get("/login", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "login.html")
  );

});
publicRoute.get("/profile", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "profile.html")
  );

});
module.exports = publicRoute;
