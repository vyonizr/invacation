const express = require("express")
const app = express()
const router = require("./routes")
const port = process.env.PORT || 4000
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

app.listen(port, function() {
  console.log(`Server starts on port ${port}`);
})