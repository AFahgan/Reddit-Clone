const connection = require('../config/connection');

const addPostDB = (title) => {
  console.log(title);
  return connection.query({
    text: `INSERT INTO posts (title) 
        VALUES ($1);`,
    values: [title],
  });
};
module.exports = addPostDB;
