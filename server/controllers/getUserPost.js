const { getUserPostDB } = require("../database/queries");

const getUserPosts = (req, res,next) => {
  const idUser = req.id;
  console.log(req.id);
  const userId = idUser.id;
  getUserPostDB(userId)  .then((data) => res.json(data.rows))
  .catch((err) => next(err));
};
 

module.exports = getUserPosts;
