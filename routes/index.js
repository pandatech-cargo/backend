const router = require('express').Router()

const CityController = require('../controllers/cityController');
const driversRouter = require('./driverRouter')
const shipment = require('./shipmentRouter')
const trucksRouter = require("./trucks");
const UploadController = require("../controllers/uploadController");


router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.use('/shipments', shipment)
router.use('/drivers', driversRouter)
router.use("/trucks", trucksRouter);
router.post("/signed-url", UploadController.getSignedUrl);
router.get('/cities', CityController.getCity)

module.exports = router;