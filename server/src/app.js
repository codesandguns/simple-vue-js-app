const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  console.log("Server hit on /register");
  res.send({
    message: "Your user was register.. Have fun",
    email: req.body.email
  });
});

app.listen(process.env.PORT || 7070);
