var express = require("express");
var router = express.Router();
var controller = require("./job-offer.controller");


router.post("/add", controller.addJobOfferMst);
router.post("/update", controller.updateJobOfferMst);
router.post("/delete", controller.deleteJobOfferMst);
router.get("/list", controller.getJobOfferMst);
// 해시태그
router.post("/add-hash-tag", controller.addJobOfferHashTagMst);
router.post("/delete-hash-tag", controller.deleteJobOfferHashTag);

module.exports = router;
