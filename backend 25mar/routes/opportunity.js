const express = require("express");
const router = express.Router();

const {
  createOpportunity,
  updateOpportunity,
  getOpportunityId,
  getAllOpportunity,
  getEmailId,
  applyOpportunity,
  getAllOpportunities,
  removeOpportunity,
  shortListAnArtist,
  hireListAnArtist,
  rejected,
  findAnOpportunity,
  getOpportunityById,
  deleteOpportunityById,
  recentlyPostedOpp,
  recentlyAppliedArtist,
  recentlyHiredArtist,
  saveAnOpportunity,
  delSavedOpp,
  search,
} = require("../controller/opportunity");
const { getUser, getUserById, updateUser, getPatron, updatePatron, registerPatron, getUserByFilter, registerUser, upload, getAllUsers, getUserByEmail, getSavedOpp } = require("../controller/user");
const { isSignedIn, isAuthenticated, isPatron } = require("../controller/auth");

router.param("userId", getUserById);
router.param("opportunityId", getOpportunityId);
router.param("emailId", getEmailId);

//create or post new opportunity
router.post("/patron/create/opportunity/:userId", isSignedIn, isAuthenticated, isPatron, createOpportunity);

//update the opportuity
router.put("/patron/update/opportunity/:opportunityId", updateOpportunity);

//get all opportunities by patron using the email:
router.get("/patron/opportunity/all/:emailId", getAllOpportunity);

//search
router.get("/opportunity/:query", search);

// routes added by Gokul Suthar
router.get("/getAllOpportunities", getAllOpportunities);
router.get("/getAllUsers", getAllUsers);
router.get("/getUserByEmail", getUserByEmail);
// routes added by Gokul Suthar

//apply for opportunity
// router.put("/user/apply/opportunity/:opportunityId",applyOpportunity) //send parameter in body email of artist and set hired statuus=0

router.put("/user/apply/opportunity/:opportunityId", applyOpportunity); //send parameter in body email of artist and set hired statuus=0

//for eg.
//{
//     "applied_by":{
//     "emailid":"Saurav54muke@gmai.com",
//     "hired_status":0
//       }
// }

router.post("/user/apply/opportunity/:opportunityId", removeOpportunity);

//shortlist
router.post("/user/shortlist/opportunity/:opportunityId/:emailId", shortListAnArtist);

//hire
router.post("/user/hire/opportunity/:opportunityId/:emailId", hireListAnArtist);

//reject
router.post("/user/reject/opportunity/:opportunityId/:emailId", rejected);

//search an opportunity
router.post("/user/getOpportunities", findAnOpportunity);

router.get("/user/getOpportunity/:opportunityId", getOpportunityById);

router.delete("/user/delete/getOpportunity/:opportunityId", deleteOpportunityById);

//recently posted opp
router.get("/users/opportunity/recentlyPostedOpportunities/:id", recentlyPostedOpp); //Solved By ALok

//recently applied artist
router.get("/users/opportunity/recentlyAppliedArtist", recentlyAppliedArtist); // solved

//recently hired artist
router.get("/users/opportunity/recentlyHiredArtist", recentlyHiredArtist); //solved

//save an opportunity
router.post("/users/opportunity/:opportunityId/:emailId", saveAnOpportunity);

//get saved opportunities
router.get("/users/getSavedOpportunies/:emailId", getSavedOpp);

//remove saved Opportunity
router.delete("/users/opportunity/:opportunityId/:emailId", delSavedOpp);

module.exports = router;
