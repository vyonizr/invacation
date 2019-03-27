const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const { User } = require("../models")
const isLoggedIn = require("../middlewares/isLoggedIn")

router.get("/login", (req, res) => {
  let err = null
  if (req.query) {
    err = req.query.err
  }
  res.render("pages/register-login", {
    title: "VacationPal | Login",
    header: "Login",
    registerOrLogin: "login",
    err,
    session: req.session
  })
})

router.get("/register", (req, res) => {
  let err = null
  res.render("pages/register-login", {
    title: "VacationPal | Register",
    header: "Register",
    registerOrLogin: "register",
    err,
    session: req.session
  })
})

router.get("/settings", isLoggedIn, (req, res) => {
  let err = null
  User.findByPk(req.session.loggedInUser.id)
  .then(foundUser => {
    res.render("pages/user-settings", {
      title: "Edit profile",
      header: "Edit profile",
      foundUser,
      err,
      session: req.session
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get("/logout", (req, res) => {
  req.session.destroy()
  res.redirect("/")
})

router.post("/login", (req, res) => {
  console.log(req.body);
  User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(foundUser => {
    if (!foundUser) {
      throw new Error ("User not found")
    }
    else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      req.session.loggedInUser = {
        id: foundUser.id,
        username: foundUser.username,
        name: foundUser.getFullName()
      }
      res.redirect("/")
    }
    else {
      throw new Error("wrong username/password")
    }
  })
  .catch(err => {
    res.redirect("/login?err=" + err)
  })
})

router.post("/register", (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  .then(createdUser => {
    res.redirect("/")
  })
  .catch(err => {
    res.send(err)
  })
})

router.post("/settings", (req, res) => {
  User.findOne({
    where: {
      id: req.session.loggedInUser.id
    }
  })
  .then(foundUser => {
    foundUser.firstName = req.body.firstName
    foundUser.lastName = req.body.lastName
    foundUser.email = req.body.email
    if (req.body.password !== "") {
      foundUser.password = req.body.password
    }
    req.session.loggedInUser.name = foundUser.getFullName()
    return foundUser.save()
  })
  .then(() => {
    res.redirect("/")
  })
  .catch(err => {
    res.send(err)
  })
})

router.post("/topup", (req, res) => {
  User.findOne({
    where: {
      id: req.session.loggedInUser.id
    }
  })
  .then(foundUser => {
    foundUser.balance += +(req.body.balance)
    return foundUser.save()
  })
  .then(() => {
    res.redirect("/")
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router