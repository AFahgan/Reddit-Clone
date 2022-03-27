const deletepostDB = require('../database/queries/deletepostDB');

const deletePost = (req, res) => {
  const postId = req.params.id;
  deletepostDB(postId);
  res.redirect('/home');
};

module.exports = deletePost;
