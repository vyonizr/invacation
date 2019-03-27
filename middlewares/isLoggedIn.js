module.exports = function isLoggedIn(req, res, next) {
  if (req.session.loggedInUser) {
    next()
  }
  else {
    res.status(404).send("404: page not found")
  }
}