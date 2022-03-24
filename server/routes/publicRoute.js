const publicRoute = require("express").Router();
const path = require("path");

publicRoute.get("/home", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public",  "index.html")
  );});
publicRoute.get("/sign-up", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "signup.html")
  );
});
publicRoute.get("/sign-in", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "signin.html")
  );

});
publicRoute.get("/profile", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "profile.html")
  );

});
module.exports = publicRoute;
