const express = require("express");
const router = express.Router();

const checkJwt = require("../middleware/checkJwt");
const ctrl = require("../controllers");

router.get("/", checkJwt, ctrl.getAll);

router.get("/:contactId", checkJwt, ctrl.getOneById);

router.post("/", checkJwt, ctrl.create);

router.delete("/:contactId", checkJwt, ctrl.remove);

router.put("/:contactId", checkJwt, ctrl.update);

router.patch("/:contactId", checkJwt, ctrl.updateStatus);

module.exports = router;
