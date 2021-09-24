const router = require('express').Router()
const CityController = require('../controllers/cityController');
const driver = require('./driverRouter')
const shipment = require('./shipmentRouter')
const trucksRouter = require("./trucks");
router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.use('/drivers', driver)
router.use('/shipments', shipment)
router.use("/trucks", trucksRouter);
router.get('/cities', CityController.getCity)

module.exports = router;