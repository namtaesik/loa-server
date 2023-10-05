var express = require("express");
var router = express.Router();
var controller = require("./job-offer-comment.controller");

router.get("/get", controller.getJobOfferComments);
// 댓글 CUD
router.post("/add", controller.addJobOfferComment);
router.post("/update", controller.updateJobOfferComment);
router.post("/delete", controller.deleteJobOfferComment);
// 대댓글 CUD
router.post("/add-detail", controller.addJobOfferCommentDetail);
router.post("/update-detail", controller.updateJobOfferCommentDetail);
router.post("/delete-detail", controller.deleteJobOfferCommentDetail);

module.exports = router;
