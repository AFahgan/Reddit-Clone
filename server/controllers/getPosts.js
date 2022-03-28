const getPostsDB = require('../database/queries');

const getPosts = (req, res) => {
  getPostsDB()
    .then((data) => res.json(data.rows));
};

module.exports = getPosts;
