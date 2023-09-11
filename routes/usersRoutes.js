const express = require("express");
const router = express.Router();

const ctrl = require("../controllers");
const checkJwt = require("../middleware/checkJwt");
const upload = require("../middleware/multer");

router.post("/register", ctrl.signup);
router.post("/login", ctrl.login);
router.post("/logout", checkJwt, ctrl.logout);
router.get("/current", checkJwt, ctrl.getUser);
router.patch("/avatars", checkJwt, upload.single("avatar"), ctrl.uploadAvatar);
router.patch("/:id", checkJwt, ctrl.updateSub);

module.exports = router;
