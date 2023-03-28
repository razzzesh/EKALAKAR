const express = require("express");
const passport = require("passport");
const multer = require("multer");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const app = express();

require("dotenv").config();

const port = 4000;

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const opportunityRoutes = require("./routes/opportunity");
const communityRoutes = require("./routes/community");
const specialServiceRoutes = require("./routes/specialService");

const mongoose = require("mongoose");
//Set up default mongoose connection

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.static("public"));

//app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(cors());

// database configuration
const db = process.env.MONGODB;

mongoose.set("strictQuery", true);

mongoose.connect(db).then(() => {
  console.log("DB Connected");
});

//using middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", opportunityRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/specialService", specialServiceRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(422).json({
      status: "fail",
      message: `${err.message}! File size must be less than or equal to 2mb.`,
    });
  } else {
    res.status(err.statusCode || 500).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
