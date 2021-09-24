const router = require('express').Router()
const ShipmentController = require('../controllers/shipmentController')

router.get('/', ShipmentController.getShipments)
router.post('/', ShipmentController.addShipment)
router.get('/:id', ShipmentController.getDetailShipment)
router.put('/:id', ShipmentController.updateShipment)

module.exports = router