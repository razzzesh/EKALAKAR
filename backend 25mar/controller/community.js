const _ = require("lodash");
const Community = require("../models/community");
const User = require("../models/user");

exports.createACommunity = async (req, res) => {
  const data = Object.keys(req.body);

  const requiredFields = ["name", "about", "sector", "minAge", "art", "limit", "expertise"];

  let missing;

  const haveReqField = requiredFields.every((field) => {
    if (!data.includes(field)) {
      missing = field;
      return false;
    } else {
      return true;
    }
  });

  if (!haveReqField) {
    return res.status(400).json({
      status: "fail",
      message: `${missing} must be provided!`,
    });
  }

  try {
    const data = {
      name: req.body.name,
      about: req.body.about,
      sector: req.body.sector,
      minAge: req.body.minAge,
      art: req.body.art,
      limit: req.body.limit,
      expertise: req.body.expertise,
      createdBy: req.body.createdBy,
    };

    const community = await Community.create(data);

    res.status(201).json({
      status: "success",
      data: community,
    });
  } catch (error) {
    // console.log(error);
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((el) => el.message);
      const message = errors.join(". ");
      return res.status(400).json({
        status: "fail",
        message: message,
      });
    }
  }
};

exports.getCommunityById = async (req, res) => {
  const id = req.params.id;

  try {
    const community = await Community.findById(id);

    if (_.isEmpty(community)) {
      return res.status(404).json({
        status: "fail",
        message: `Community not found by this '${id}' id!`,
      });
    }

    res.status(200).json({
      status: "success",
      data: community,
    });
  } catch (error) {
    if (error.name === "CastError") {
      const message = `Invalid ${error.path}: ${error.value}`;
      return res.status(500).json({
        status: "error",
        message,
      });
    }
  }
};

exports.getAllCommunities = async (req, res) => {
  const communities = await Community.find({});

  if (_.isEmpty(communities)) {
    return res.status(404).json({
      status: "fail",
      message: "Not found!",
    });
  }

  res.status(200).json({
    status: "success",
    result: communities.length,
    data: communities,
  });
};

exports.joinACommunity = async (req, res) => {
  const { id, email } = req.params;

  const user = await User.findOne({ email });

  if (_.isEmpty(user)) {
    return res.status(404).json({
      status: "fail",
      message: `User not found by this '${email}' email!`,
    });
  }

  let community;

  try {
    community = await Community.findById(id);

    if (_.isEmpty(community)) {
      return res.status(404).json({
        status: "fail",
        message: `Community not found by this '${id}' id!`,
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      const message = `Invalid ${error.path}: ${error.value}`;
      return res.status(500).json({
        status: "error",
        message,
      });
    }
  }

  let alreadyJoined = false;

  for (const index in community.joinedBy) {
    if (user.id == community.joinedBy[index]) {
      alreadyJoined = true;
      break;
    }
    alreadyJoined = false;
  }

  if (alreadyJoined) {
    return res.status(404).json({
      status: "fail",
      message: "You have already joined this community!",
    });
  }

  if (community.totalJoinedMembers >= community.limit) {
    return res.status(400).json({
      status: "fail",
      message: "Community is full!",
    });
  }

  community.totalJoinedMembers++;

  community.joinedBy.push(user.id);

  await community.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    data: community,
  });
};

exports.leaveACommunity = async (req, res) => {
  const id = req.params.id;
  const email = req.params.email;

  const user = await User.findOne({ email });

  if (_.isEmpty(user)) {
    return res.status(404).json({
      status: "fail",
      message: `User not found by this '${email}' email!`,
    });
  }

  let community;

  try {
    community = await Community.findById(id);

    if (_.isEmpty(community)) {
      return res.status(404).json({
        status: "fail",
        message: `Community not found by this '${id}' id!`,
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      const message = `Invalid ${error.path}: ${error.value}`;
      return res.status(500).json({
        status: "error",
        message,
      });
    }
  }

  let isJoined = false;

  for (const index in community.joinedBy) {
    if (user.id == community.joinedBy[index]) {
      isJoined = true;
      break;
    }
    isJoined = false;
  }

  if (!isJoined) {
    return res.status(400).json({
      status: "fail",
      message: "You haven't joined the community!",
    });
  }

  const index = community.joinedBy.indexOf(user.id);

  if (index > -1) {
    community.joinedBy.splice(index, 1);
    community.totalJoinedMembers = community.totalJoinedMembers - 1;
    await community.save({ validateBeforeSave: false });
  }

  res.status(200).json({
    stutus: "success",
    data: community,
  });
};

exports.getJoinedMembers = async (req, res) => {
  const id = req.params.id;

  try {
    const community = await Community.findById(id).populate({ path: "joinedBy" });

    if (_.isEmpty(community)) {
      return res.status(404).json({
        status: "fail",
        message: `Community not found by this '${id}' id!`,
      });
    }

    if (_.isEmpty(community.joinedBy)) {
      return res.status(404).json({
        status: "fail",
        message: "No one have joined the community yet!",
      });
    }

    res.status(200).json({
      status: "success",
      result: community.joinedBy.length,
      data: community.joinedBy,
    });
  } catch (error) {
    if (error.name === "CastError") {
      const message = `Invalid ${error.path}: ${error.value}`;
      return res.status(500).json({
        status: "error",
        message,
      });
    }
  }
};

exports.search = async (req, res) => {
  const query = req.params.query;

  const communities = await Community.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { sector: { $regex: query, $options: "i" } },
      { subGroup: { $regex: query, $options: "i" } },
      { art: { $regex: query, $options: "i" } },
      { expertise: { $regex: query, $options: "i" } },
    ],
  });

  res.status(200).json({
    status: "success",
    result: communities.length,
    data: communities,
  });
};
