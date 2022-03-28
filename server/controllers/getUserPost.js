const { getUserPostDB } = require("../database/queries");

const getUserPosts = (req, res) => {
  const idUser = req.id;
  const userId = idUser.id;
  const getUserPost = getUserPostDB(userId);
  Promise.all([getUserPost])
    .then((values) => {
      res.json([values[0].rows]);
    })
    .catch((e) => console.error(e));
};

module.exports = getUserPosts;
