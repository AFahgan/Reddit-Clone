const publicRoute = require("express").Router();
const path = require("path");
const { isAuthProtected, isUserLogined } = require("../middleware");
const { logout, getUserData, addPost, getPosts } = require("../controllers");

publicRoute.get("/home", isAuthProtected, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "reddit.html")
  );
});

publicRoute.get("/register", isUserLogined, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "register.html")
  );
});
publicRoute.get("/login", isUserLogined, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "login.html")
  );
});
publicRoute.get("/profile", isAuthProtected, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "profile.html")
  );
});
publicRoute.get("/reddit", isAuthProtected, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "reddit.html")
  );
});

publicRoute.get("/getPosts", getPosts);
publicRoute.get("/user", isAuthProtected, getUserData);
publicRoute.post("/addPost", addPost);
publicRoute.get("/logout", logout);

module.exports = publicRoute;
