const connection = require('../config/connection');

const getpostsDB = () => {
  const sql = {
    text: "SELECT posts.id,posts.title, posts.content,  posts.votes,posts.img_url,posts.user_id,users.userName FROM posts JOIN users ON (posts.user_id = users.id) ;",
    values: [],
  };

  return connection.query(sql);
};

module.exports = getpostsDB;
