const express = require("express")
const app = express()
const router = require("./routes")
let session = require("express-session")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/assets", express.static("public"))
app.use(session({
  secret: 'VacationPal',
  resave: true,
  saveUninitialized: true,
}))

app.use("/", router)

app.listen(3000)