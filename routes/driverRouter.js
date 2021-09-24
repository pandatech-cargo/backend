const router = require('express').Router()
const DriverController = require ('../controllers/driverController')

router.get('/', DriverController.getDrivers)
router.post('/', DriverController.addDriver)
router.get('/:id', DriverController.getDetailDriver)
router.put('/:id', DriverController.updateDriver)

module.exports = router