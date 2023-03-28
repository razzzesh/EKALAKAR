const mongoose = require("mongoose");

const appliedArtist = mongoose.Schema(
  {
    appliedArtists: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("applied ", appliedArtist);
