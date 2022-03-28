const signinSchema = require("../utils/validation/signinSchema");
const bcrypt = require("bcryptjs");
const { getUserByEmail } = require("../database/queries");
const jwt = require("jsonwebtoken");
const { CustomError } = require("../utils");

const signin = (req, res, next) => {
  const { password } = req.body;
  signinSchema
    .validateAsync(req.body)
    .then((value) => getUserByEmail(value.email))
    .then((data) => {
      userId = data.rows[0].id;
      if (!data.rows.length) {
        res.status(403).json("USER NOT FOUND!");
        throw CustomError("email not found", 401);
      }
      return bcrypt.compare(password, data.rows[0].password);
    })
    .then((value) => {
      if (value === false) {
        res.status(403).json("PASSWORD ERROR!");
      } else {
        jwt.sign({ id: userId }, process.env.PRIVATE_KEY, (err, token) => {
          if (err) {
            console.log(err);
          } else {
            res.cookie("id", token).redirect("/reddit");
          }
        });
      }
    })
    .catch((err) => {
      if (err.details) {
        res.status(400).json("Please Enter A valid Email or valid Password");

        next(CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = signin;
