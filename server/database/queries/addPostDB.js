const connection = require("../config/connection");

const addPostDB = (title, content, img_url, votes, user_id) => {
  console.log(title, content, img_url, votes, user_id);
  return connection.query({
    text: `INSERT INTO posts (title,content,img_url,votes, user_id) 
        VALUES ($1, $2, $3,$4,$5) returning *;`,
    values: [title, content, img_url, 0, user_id],
  });
};
module.exports = addPostDB;
