/* eslint-disable quotes */
const connection = require('../config/connection');

const updatepostDB = (id) => {
  const sql = {
    text: `update posts set Title = 'Updated' where id= $1`,
    values: [id],
  };
  return connection.query(sql);
};

module.exports = updatepostDB;
