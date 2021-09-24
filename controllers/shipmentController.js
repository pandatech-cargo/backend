const shipment_service = require('../services/shipmentService')
// const  shipment_layout = require('../layout/shipment_layout')
class ShipmentController {
    static getShipments = async (req, res, next) => {
        try{
            const { sortBy, sort, shipment_number, page, limit } = req.query
            const  shipment = await shipment_service.getShipments({ sortBy, sort, shipment_number, page, limit }, next)
            // res.status(200).json(shipment_layout.getShipments(shipment, { page, limit }) )
        }
        catch (error) {
            next (error)
        }

    }

    static getDetailShipment = async (req, res, next) => {
        try{
            const { id } = req.params
            const  driver = await shipment_service.getDetailShipment(id, next)
            if(driver)
                res.status(200).json(driver)
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
            const  driver = await shipment_service.addShipment({ origin, destination, loading_date, truck_id, driver_id }, next)
            if(driver)
                res.status(201).json(driver)
        } 
        catch (error) {
            next (error)
        }
    }

    static updateShipment = async (req, res, next) => {
        try {
            const { id } = req.params
            let params = req.parameters
            params = params.permit('name', 'phone_number', 'idcard_url', 'lisence_url', 'status').value()
            const { name, phone_number, idcard_url, lisence_url, status } = params
            const  driver = await shipment_service.updateShipment({ id, name, phone_number, idcard_url, lisence_url, status }, next)
            if(driver)
                res.status(201).json(driver)
        }
        catch (error) {
            next (error)
        }
    }
}

module.exports = ShipmentController