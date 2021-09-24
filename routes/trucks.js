const router = require("express").Router();

const TruckController = require("../controllers/truckController");

router.post("/", TruckController.create);
router.get("/", TruckController.findAll);
router.get("/:id", TruckController.findById);

module.exports = router;
