const { getUserPostDB, getUsers } = require("../database/queries");

const getUserProfile = (req, res, next) => {
  const userID = req.params.id;
  Promise.all([getUserPostDB(userID), getUsers(userID)])
    .then((value) => res.json([value[0].rows, value[1].rows]))
    .catch((err) => next(err));
};

module.exports = getUserProfile;
