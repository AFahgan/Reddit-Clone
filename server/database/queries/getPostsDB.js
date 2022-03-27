const connection = require('../config/connection');

const getbookDB = () => {
  const sql = {
    text: 'SELECT * FROM posts;',
  };

  return connection.query(sql);
};

module.exports = getbookDB;
