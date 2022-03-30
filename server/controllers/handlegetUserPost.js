const getUserPostDB = require('../database/queries/getUserPostDB');

const getUserPost = (req, res) => {
    const idUser = req.id;
    const userIdFinal = idUser.id;

    getUserPostDB(userIdFinal)
    .then((data) => res.json(data.rows));
};

module.exports = getUserPost;
