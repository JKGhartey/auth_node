const express = require("express");
const router = express.Router();
const { getPrivateData, getProfile } = require("../controllers/private");
const { protect, profile } = require("../middleware/auth");

router.route("/").get(protect, getPrivateData);
router.route("/profile").get(profile);

module.exports = router;
