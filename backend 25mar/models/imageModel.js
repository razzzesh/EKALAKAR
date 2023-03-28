const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  name: { type: String, required: true },
  otherImages: [{ type: String }],
  profileImage: { type: String },
  uploadedBy: { type: String, required: true, unique: true },
  size: { type: Number, required: true },
  dateUploaded: { type: Date, default: Date.now },
});

imageSchema.virtual("totalImages").get(function () {
  return this.otherImages.length;
});

imageSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Image", imageSchema);
