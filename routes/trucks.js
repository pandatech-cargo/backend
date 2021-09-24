const router = require("express").Router();

const TruckController = require("../controllers/truckController");

router.post("/", TruckController.create);
router.get("/", TruckController.findAll);
router.get("/:id", TruckController.findById);
router.put("/:id", TruckController.update);
router.patch("/:id/activate", TruckController.activate);
router.patch("/:id/deactivate", TruckController.deactivate);

module.exports = router;
