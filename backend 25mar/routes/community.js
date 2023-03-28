const express = require("express");
const router = express.Router();

const communityController = require("../controller/community");

router.post("/createCommunity", communityController.createACommunity);

router.get("/getAllCommunities", communityController.getAllCommunities);

router.post("/joinACommunity/:id/:email", communityController.joinACommunity);

router.get("/getJoinedMembers/:id", communityController.getJoinedMembers);

router.post("/leaveACommunity/:id/:email", communityController.leaveACommunity);

router.get("/:id", communityController.getCommunityById);

router.get("/search/:query", communityController.search);

module.exports = router;
