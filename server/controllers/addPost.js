const addPostDB = require('../database/queries/addPostDB');

const addPost = (req, res) => {
  const {
    title,content, user_id
  } = req.body;
  addPostDB(title,content, user_id)
    .then(() => {
      res.redirect('/home');
    });
};
module.exports = addPost;
