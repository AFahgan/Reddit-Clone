const connection = require('../config/connection');

const getpostsDB = () => {
  const sql = {
    text: 'SELECT * FROM posts;',
  };

  return connection.query(sql);
};

module.exports = getpostsDB;
