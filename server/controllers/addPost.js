const addPostDB = require('../database/queries/addPostDB');

const addPost = (req, res) => {
  const {
    title,content,img_url,votes, user_id,
  } = req.body;
  addPostDB(title,content,img_url,votes, user_id)
    .then(() => {
      res.redirect('/home');
    });
};
module.exports = addPost;
