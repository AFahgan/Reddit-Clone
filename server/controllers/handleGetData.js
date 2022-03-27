const { getUsers } = require("../database/queries");

const getUserData = (req, res) => {
  const idUser = req.id;
  const userId = idUser.id;
  const getusers = getUsers(userId);
  Promise.all([getusers])
    .then((values) => {
      res.json([values[0].rows]);
    })
    .catch((e) => console.error(e));
};

module.exports = getUserData;
