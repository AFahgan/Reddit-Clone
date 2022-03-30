const connection = require("../config/connection");

const getUserPostDB = (id) => {
return connection.query({
    text: "SELECT posts.id,posts.title, posts.content, posts.img_url, posts.votes, users.userName FROM posts JOIN users ON (posts.user_id = users.id) where user_id=$1;",
    values: [id],
  });
}
module.exports = getUserPostDB;
