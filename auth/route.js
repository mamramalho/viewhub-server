const express = require("express");

const router = express.Router();

const { register, login, deleteUser } = require("./auth");

router.route("/register").post(register);
router.route("/login").post(login);

const { adminAuth } = require("../middleware/auth")
router.route("/update").put(adminAuth, update)
router.route("/deleteUser").delete(adminAuth, deleteUser)

module.exports = router;