const jwt = require("jsonwebtoken");

const isUserLogined = (req, res, next) => {
  const { id } = req.cookies;
  if (id) {
    jwt.verify(id, process.env.PRIVATE_KEY, (err, id) => {
      if (err) {
        next();
      } else {
        res.redirect("/");
      }
    });
  } else {
    next();
  }
};

module.exports = isUserLogined;
