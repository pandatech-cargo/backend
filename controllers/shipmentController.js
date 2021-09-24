const shipment_service = require('../services/shipmentService')
const  shipment_layout = require('../layout/shipment_layout')
class ShipmentController {
    static getShipments = async (req, res, next) => {
        try{
            const { sortBy, sort, shipment_number, page, limit } = req.query
            const  shipment = await shipment_service.getShipments({ sortBy, sort, shipment_number, page, limit }, next)
            if(shipment)
                res.status(200).json(shipment_layout.getShipments(shipment, { page, limit }) )
        }
        catch (error) {
            next (error)
        }

    }

    static getDetailShipment = async (req, res, next) => {
        try{
            const { id } = req.params
            const  shipment = await shipment_service.getDetailShipment(id, next)
            if(shipment)
                res.status(200).json(shipment_layout.getShipmentDetails(shipment))
        }
        catch (error) {
            next (error)
        }
    }

    static addShipment = async (req, res, next) => {
        try {
            let params = req.parameters
            params = params.permit('origin', 'destination', 'loading_date', 'truck_id', 'driver_id').value()
            const { origin, destination, loading_date, truck_id, driver_id } = params
            const  shipment = await shipment_service.addShipment({ origin, destination, loading_date, truck_id, driver_id }, next)
            if(shipment)
                res.status(201).json(shipment)
        } 
        catch (error) {
            next (error)
        }
    }

    static updateShipment = async (req, res, next) => {
        try {
            const { id } = req.params
            let params = req.parameters
            params = params.permit( 'loading_date', 'truck_id', 'driver_id', 'status').value()
            const { loading_date, truck_id, driver_id, status } = params
            const  shipment = await shipment_service.updateShipment({ id, loading_date, truck_id, driver_id, status }, next)
            if(shipment)
                res.status(201).json(shipment)
        }
        catch (error) {
            next (error)
        }
    }
}

module.exports = ShipmentController