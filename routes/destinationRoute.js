const express = require("express")
const router = express.Router()
const { Destination, User, Picture } = require("../models")
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
  if (req.session.loggedInUser) {
    User.findByPk(req.session.loggedInUser.id)
    .then(user => {
      foundUser = user
      return Destination.findByPk(req.params.destinationId)
    })
    .then(foundDestination => {
      res.render("pages/destinations/destination-detail", {
        title: `Invacation | ${foundDestination.name}`,
        foundDestinationStringify: JSON.stringify(foundDestination),
        foundUser,
        foundDestination,
        getCompleteDate,
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
        session: req.session
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
})

router.post("/:destinationId/book", isLoggedIn, (req, res) => {
  let foundUser = null
  if (req.session.loggedInUser) {
    User.findByPk(req.session.loggedInUser.id)
    .then(user => {
      foundUser = user
      return Destination.findByPk(req.params.destinationId)
    })
    .then(foundDestination => {
      res.render("pages/destinations/destination-detail", {
        title: `Invacation | ${foundDestination.name}`,
        foundDestinationStringify: JSON.stringify(foundDestination),
        foundUser,
        foundDestination,
        getCompleteDate,
        session: req.session
      })
    })
    .catch(err => {
      res.send(err)
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
        session: req.session
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
})

module.exports = router