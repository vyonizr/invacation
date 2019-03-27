const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const { User, UserDestination, Destination } = require("../models")
const isLoggedIn = require("../middlewares/isLoggedIn")
const destinationRoute = require("./destinationRoute")
const userRoute = require("./userRoute")
const getCompleteDate = require("../helpers/getCompleteDate")

router.get("/", (req, res) => {
  let foundUser = null
  if (req.session.loggedInUser) { // Logged in
    User.findByPk(req.session.loggedInUser.id, {
      include: [
        {model: Destination}
      ]
    })
    .then(foundUser => {
      res.render("pages", {
        title: "InVacation",
        foundUser,
        getCompleteDate,
        session: req.session
      })
    })
    .catch(err => {
      res.send(err)
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

router.post("/cancel/:destinationId", (req, res) => {
  UserDestination.findOne({
    include: [{model: User}, {model: Destination}],
    where: {
      UserId: req.session.loggedInUser.id,
      DestinationId: req.params.destinationId
    }
  })
  .then(foundUserDestination => {
    foundUserDestination.User.balance += foundUserDestination.Destination.price * 0.5
    return Promise.all([foundUserDestination.User.save(), foundUserDestination.destroy()])
  })
  .then(() => {
    res.redirect("/")
  })
  .catch(err => {
    res.send(err)
  })
})

router.use("/destinations", destinationRoute)
router.use("/user", userRoute)


module.exports = router