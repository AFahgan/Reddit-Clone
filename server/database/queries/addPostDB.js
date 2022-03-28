const connection = require('../config/connection');

const addPostDB = (title,content, user_id) => {
  console.log(title,content, user_id);
  return connection.query({
    text: `INSERT INTO posts (title,content, user_id) 
        VALUES ($1, $2, $3) returning *;`,
    values: [title,content, user_id],
  });
};
module.exports = addPostDB;
