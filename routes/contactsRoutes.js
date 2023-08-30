const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getOneById);

router.post("/", ctrl.create);

router.delete("/:contactId", ctrl.remove);

router.put("/:contactId", ctrl.update);

router.patch("/:contactId", ctrl.updateStatus);

module.exports = router;
