const express = require("express");
const router = express.Router();

const ctrl = require("../controllers");
const checkJwt = require("../middleware/checkJwt");

router.post("/register", ctrl.signup);
router.post("/login", ctrl.login);
router.post("/logout", checkJwt, ctrl.logout);
router.get("/current", checkJwt, ctrl.getUser);
router.patch("/:id", ctrl.updateSub);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post("/verify", ctrl.additionalVerify);

module.exports = router;
