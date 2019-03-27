const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const { User } = require("../models")
const isLoggedIn = require("../middlewares/isLoggedIn")
const destinationRoute = require("./destinationRoute")
const userRoute = require("./userRoute")

router.get("/", (req, res) => {
  console.log(req.session);
  let foundUser = null
  if (req.session.loggedInUser) { // Logged in
    User.findByPk(req.session.loggedInUser.id)
    .then(user => {
      foundUser = user
      res.render("pages", {
        title: "InVacation",
        foundUser,
        session: req.session
      })
    })
  }
  else { // not Login
    res.render("pages", {
      title: "InVacation",
      foundUser,
      session: req.session
    })
  }
})

router.use("/destinations", destinationRoute)
router.use("/user", userRoute)


module.exports = router