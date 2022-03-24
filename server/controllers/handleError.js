const { join } = require("path");

const clientError = (req, res) => {
  res
    .status(404)
    .sendFile(join(__dirname, "..", "..", "public", "html", "404.html"));
};
const serverError = (err, req, res) => {
  console.log(err);
  res
    .status(500)
    .sendFile(join(__dirname, "..", "..", "public", "html", "500.html"));
};

module.exports = {  clientError,serverError };
