const getPostsDB = require('../database/queries/getPostsDB');

const getPosts = (req, res,next) => {
  getPostsDB()
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = getPosts;
