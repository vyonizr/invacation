module.exports = function isLoggedIn(req, res, next) {
  if (req.session.loggedInUser) {
    next()
  }
  else {
    res.redirect("/user/login?err=" + "You have to login first")
  }
}