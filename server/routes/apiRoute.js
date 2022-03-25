const apiRoute = require("express").Router();
// const { postSignUp,signin } = require("../controllers");

apiRoute.post("/register",  (req, res) => {
    res.sendFile(
        res.redirect('/home')
    )
});
apiRoute.post("/login",  (req, res) => {
    res.sendFile(
        res.redirect('/home')
    )
});


module.exports = apiRoute;
