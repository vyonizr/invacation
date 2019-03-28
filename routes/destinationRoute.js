const express = require("express")
const router = express.Router()
const { Destination, User, Picture, UserDestination } = require("../models")
const isLoggedIn = require("../middlewares/isLoggedIn")
const getCompleteDate = require("../helpers/getCompleteDate")

router.get("/", (req, res) => {
  let foundUser = null
  if (req.session.loggedInUser) {
    User.findByPk(req.session.loggedInUser.id)
    .then(user => {
      foundUser = user
      return Destination.findAll({
        raw: true
      })
    })
    .then(destinations => {
      res.render("pages/destinations", {
        title: "InVacation",
        foundUser,
        destinations: JSON.stringify(destinations),
        session: req.session
      })
    })
  }
  else {
    Destination.findAll({
      raw: true
    })
    .then(destinations => {
      res.render("pages/destinations", {
        title: "InVacation | Destinations",
        destinations: JSON.stringify(destinations),
        foundUser,
        session: req.session
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
})

router.get("/:destinationId", (req, res) => {
  let foundUser = null
  let err = null
  let booked = false
  let success = null
  if (req.query.err) {
    err = req.query.err
  }
  else if (req.query.success) {
    success = req.query.success
  }
  if (req.session.loggedInUser) {
    User.findByPk(req.session.loggedInUser.id)
    .then(user => {
      foundUser = user
    })
    UserDestination.findOne({
      where: {
        UserId: req.session.loggedInUser.id,
        DestinationId: req.params.destinationId
      }
    })
    .then(foundUserDestination => {
      // res.send(foundUserDestination)
      if(foundUserDestination) {
        booked = true
      }
      return Destination.findByPk(req.params.destinationId, {
        include: [
          {model: Picture}
        ]
      })
    })
    .then(foundDestination => {
      // res.send(foundDestination)
      res.render("pages/destinations/destination-detail", {
        title: `Invacation | ${foundDestination.name}`,
        foundDestinationStringify: JSON.stringify(foundDestination),
        foundUser,
        foundDestination,
        getCompleteDate,
        booked,
        success,
        err,
        session: req.session
      })
    })
  }
  else {
    Destination.findByPk(req.params.destinationId, {
      include: [
        {model: Picture}
      ]
    })
    .then(foundDestination => {
      // res.send(foundDestination)
      res.render("pages/destinations/destination-detail", {
        title: `Invacation | ${foundDestination.name}`,
        foundDestinationStringify: JSON.stringify(foundDestination),
        foundUser,
        foundDestination,
        getCompleteDate,
        booked,
        success,
        err,
        session: req.session
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
})

router.get("/:destinationId/book", isLoggedIn, (req, res) => {
  let destination = {}
  Destination.findByPk(req.params.destinationId)
  .then(foundDestination => {
    destination = foundDestination
    return User.findByPk(req.session.loggedInUser.id)
  })
  .then(foundUser => {
    if (foundUser.balance < destination.price) {
      res.redirect(`/destinations/${destination.id}?err=` + "You have insufficient funds")
    }
    else {
      return UserDestination.create({
        UserId: req.session.loggedInUser.id,
        DestinationId: req.params.destinationId
      })
    }
  })
  .then(() => {
    res.redirect(`/destinations/${req.params.destinationId}?success=` + "Book success!")
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router