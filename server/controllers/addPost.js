const addPostDB = require('../database/queries/addPostDB');

const addPost = (req, res) => {
  const idUser = req.id;
  const userIdFinal = idUser.id;
  const {
    title,content,img_url,votes
  } = req.body;
  addPostDB(title,content,img_url,votes, userIdFinal)
    .then(() => {
      res.redirect('/home');
    });
};
module.exports = addPost;
