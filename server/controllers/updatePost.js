const updatepostDB = require('../database/queries/updatepostDB');

const updatePost = (req, res) => {
  const postId = req.params.id;

  updatepostDB(postId);
  res.redirect('/home');
};

module.exports = updatePost;
