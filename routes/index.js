const router = require('express').Router()

const CityController = require('../controllers/cityController');
const UploadController = require("../controllers/uploadController");

const driversRouter = require('./driverRouter')
const trucksRouter = require("./trucks");

router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.use('/drivers', driversRouter)
router.use("/trucks", trucksRouter);
router.post("/signed-url", UploadController.getSignedUrl);
router.get('/cities', CityController.getCity)

module.exports = router;