const Schema = require("../Schema/schema");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSercret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async register(req, res) {
    try {
      let user = new Schema.getUserModel()(
        {
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync())
        },
        true
      );
      let result = await Schema.getUserModel().findOne({
        email: req.body.email
      });
      if (result) {
        res.status(400).json("User already exists");
      } else {
        user.save(function(err) {
          if (err) {
            res.status(400).json("Your user has not been saved successfully");
          } else {
            res.status(200).json("Your user has been saved successfully");
          }
        });
      }
    } catch (error) {
      console.log("Error while registering ", error);
      res.status(500).json({ msg: "Internal Server error" });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      let userFromDB = await Schema.getUserModel().findOne({
        email: email
      });
      if (!userFromDB) {
        return res.status(403).send({
          msg: "The login credentials is incorrect"
        });
      }
      const ifPasswordValid = bcrypt.compareSync(password, userFromDB.password);
      if (!ifPasswordValid) {
        return res.status(403).send({
          msg: "The login credentials is incorrect"
        });
      }
      res.status(200).send({
        msg: "Yay.!! you are now logged in",
        token: jwtSignUser(userFromDB.toJSON())
      });
    } catch (err) {
      console.log(err);
    }
  }
};
