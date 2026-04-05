const express = require("express");
const router = express.Router();
const attendantController = require("../controllers/attendantController");

router.post("/", attendantController.createAttendant);


router.get("/", attendantController.getAttendants);

router.get("/:id", attendantController.getAttendantById);

router.put("/:id", attendantController.updateAttendant);

router.delete("/:id", attendantController.deleteAttendant);

module.exports = router;