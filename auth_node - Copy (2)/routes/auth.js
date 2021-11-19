const express = require("express");
const router = express.Router();

const {
  register,
  login,
  login_cookies,
  forgotpassword,
  resetpassword,
  logout,
} = require("../controllers/auth");

router.route("/api/register").post(register);

router.route("/api/login").post(login);

router.route("/api/login").get(login_cookies);

// router.route("/api/forgotpassword").post(forgotpassword);

// router.route("/api/resetpassword/:resetToken").post(resetpassword);

router.route("/api/logout").post(logout);

module.exports = router;
