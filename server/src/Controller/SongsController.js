const { getSongModel } = require("../Schema/schema");

module.exports = {
  async index(req, res) {
    try {
      const AllSongs = await getSongModel().find({}, { __v: 0 });
      res.status(200).send(AllSongs);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send({ error: "An error has occured in fetching the songs" });
    }
  },
  async post(req, res) {
    console.log("Hell");
    try {
      let song = new getSongModel()(
        {
          title: req.body.title,
          artist: req.body.artist,
          genre: req.body.genre,
          album: req.body.album,
          albumImage: req.body.albumImage,
          youtubeId: req.body.youtubeId,
          lyrics: req.body.lyrics,
          tab: req.body.tab
        },
        true
      );
      song.save(function(err) {
        if (err) {
          res.status(400).json("Your song has not been saved successfully");
        } else {
          res.status(200).json("Your song has been saved successfully");
        }
      });
    } catch (err) {
      res.status(500).json("Internal Server Error in saving the job");
      console.log(err);
    }
  }
};
