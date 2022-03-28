const connection = require('../config/connection');

const deletepostDB = (id) => {
  const sql = {
    text: 'delete from posts where id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deletepostDB;
