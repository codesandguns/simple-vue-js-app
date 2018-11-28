const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  email: String,
  password: String
});

let SongSchema = mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
  album: String,
  albumImage: String,
  youtubeId: String,
  lyrics: String,
  tab: String
});

function getUserModel() {
  return mongoose.model("user", UserSchema, "user");
}

function getSongModel() {
  return mongoose.model("songs", SongSchema, "songs");
}

module.exports = { getUserModel, getSongModel };
