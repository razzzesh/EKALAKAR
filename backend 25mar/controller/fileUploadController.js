const multer = require("multer");
const _ = require("lodash");
const path = require("path");
const fs = require("fs");
const User = require("../models/user");
const Image = require("../models/imageModel");

// Patron and artist profile image (completed)
// Artist upload audio, video
// Artist patron upload documents
// Patron upload  company image

// profile-image-name = profile-userId-time.ext

const findDoc = async (Model, filter, req, res) => {
  const doc = await Model.findOne(filter);

  if (doc) {
    return doc;
  }

  res.status(404).json({
    status: "fail",
    message: `Not found!`,
  });
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(req.profileImgPath);
    cb(null, req.profileImgPath);
  },
  filename: function (req, file, cb) {
    // console.log(`${req.imgName}.${file.originalname.split(".")[1]}`);
    cb(null, `${req.imgName}-${Date.now()}.${file.originalname.split(".")[1]}`);
  },
});

const fileFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 2 MB limit
  },
  fileFilter: fileFilter,
});

exports.getUser = async (req, res, next) => {
  const email = req.params.email;

  if (_.isEmpty(email)) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide an email address!",
    });
  }

  const user = await findDoc(User, { email }, req, res);

  if (user.role === 1) {
    req.profileImgPath = "uploads/users/patron";
  } else if (user.role === 2) {
    req.profileImgPath = "uploads/users/artist";
  }

  req.imgName = `profile-${user.id}`;

  req.user = user;
  next();
};

exports.uploadProfileImg = async (req, res, next) => {
  if (!req.file) {
    const error = new Error("No file uploaded!");
    error.statusCode = 422;
    return next(error);
  }
  // console.log(req.file.path);
  try {
    await Image.create({
      name: req.user.name,
      profileImage: req.file.path,
      uploadedBy: req.user.email,
      size: req.file.size,
    });

    res.status(201).json({
      status: "success",
      message: "Image uploaded successfully!",
    });
  } catch (error) {
    if (error) {
      if (error.code === 11000) {
        const img = await findDoc(Image, { uploadedBy: req.user.email }, req, res);
        fs.unlink(img.profileImage, async (err) => {
          await Image.findOneAndUpdate(
            { uploadedBy: req.user.email },
            {
              $set: {
                profileImage: req.file.path,
              },
            },
            {
              new: true,
              runValidators: true,
            }
          );

          console.log("image uploaded");

          res.status(201).json({
            status: "success",
            message: "Image uploaded successfully!",
          });
        });
      }
    } else
      res.status(500).json({
        status: "fail",
        message: "Unable to save image!",
      });
  }
};

exports.getProfileImg = async (req, res) => {
  const email = req.params.email;

  if (_.isEmpty(email)) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide an email address!",
    });
  }

  const img = await findDoc(Image, { uploadedBy: email }, req, res);

  if (img) {
    const imageStream = await fs.createReadStream(img.profileImage);

    res.setHeader("Content-Type", "image/jpeg");

    imageStream.pipe(res);
  }
};

exports.delProfileImg = async (req, res) => {
  const email = req.params.email;

  if (_.isEmpty(email)) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide an email address!",
    });
  }

  const img = await Image.findOneAndDelete({ uploadedBy: email });

  fs.unlink(img.profileImage, async (err) => {
    res.status(204).json({
      status: "success",
      message: "Image deleted successfully!",
    });
  });
};
