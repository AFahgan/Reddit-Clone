const apiRoute = require("express").Router();
const { postSignUp, signin } = require("../controllers");
const { isAuthProtected, isUserLogined } = require("../controllers/middleware");

apiRoute.get("/home", isAuthProtected, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public"));
});
apiRoute.get("/login", isUserLogined, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "public", "html", "login.html")
  );
});
apiRoute.post("/register", postSignUp);
apiRoute.post("/login", signin);

module.exports = apiRoute;
