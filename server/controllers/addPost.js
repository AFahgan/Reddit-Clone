const addPostDB = require('../database/queries/addPostDB');

const addPost = (req, res) => {
  const {
    title,
  } = req.body;
  addPostDB(title)
    .then(() => {
      res.redirect('/home');
    });
};
module.exports = addPost;
