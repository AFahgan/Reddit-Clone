const logout = (req, res) => {
    res.clearCookie("id").redirect("/home");
  };
  
  module.exports = logout;
  