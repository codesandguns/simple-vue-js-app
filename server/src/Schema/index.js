const mongoose = require("mongoose");
const config = require("../config/config");
const db = {};

function getConnectedToDB(app) {
  mongoose
    .connect(
      "mongodb://localhost:27017/tabtracker",
      config.db.options
    )
    .then(() => {
      app.listen(config.port, () =>
        console.log("Connected To Db and server up at port 7070")
      );
    })
    .catch(err => {
      console.log("Error connecting to DB ", err);
    });
}

module.exports = getConnectedToDB;
