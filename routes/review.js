const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewComtroller = require("../controllers/review.js");

//Reviews POST Route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewComtroller.createReview));

//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewComtroller.destroyReview));

module.exports = router;