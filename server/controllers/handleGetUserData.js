const { getUsers } = require("../database/queries");

const getUserData = (req, res,next) => {
  const idUser = req.id;
  getUsers(idUser.id)
    .then((values) => {
      res.json([values.rows]);
    })
    .catch((err) => next(err));
};

module.exports = getUserData;
