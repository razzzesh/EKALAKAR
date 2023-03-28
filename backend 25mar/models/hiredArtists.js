const mongoose = require("mongoose");

const hiredArtists = mongoose.Schema(
  {
    hiredArtists: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("hired ", hiredArtists);
