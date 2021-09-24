const { Op } = require('sequelize')
const { 
    Truck, 
    City, 
    Shipment, 
    Driver 
} = require('../models')
const moment = require('moment')
class ShipmentService {
    static getShipments = async (params, next) => {
        try {
            const limit = params.limit || 5
            const offset = ( params.page -1 ) * limit || 0
            let order = []
            if (params.sortBy && !params.sort)
                order = [ [params.sortBy], ['ASC'] ]
            if (params.sortBy && params.sort)
                order = [ [params.sortBy], [params.sort] ]
            let where = {}
            if(params.shipment_number)
                where['shipment_number'] = {
                    [Op.like]: `%${params.shipment_number}%`
                }
            const shipments  = await Shipment.findAndCountAll({
                offset,
                limit,
                where,
                order,
            })
            return shipments
        } 
        catch (error) {
            next(error)
        }
    }

    static getDetailShipment = async (param, next) => {
        try{
            const shipment  = await Shipment.findOne({
                where: { id: param }
            })
            if(shipment)
                return shipment
            else{
                throw({name: 'NOT_FOUND', message: 'shipment not found'})
            }
        } 
        catch (error) {
            next(error)
        }
    }

    static addShipment = async (params, next) => {
        try {
            const { origin, destination, loading_date, truck_id, driver_id } = params
            const shipment = await Shipment.create({ origin, destination, loading_date, truck_id, driver_id })
            
            let date = new Date()
            date = moment(date).format('YYMM')
            const shipment_number = `DO-${date}${shipment.id}`
            shipment.shipment_number = shipment_number
            await shipment.save()
            return shipment
        } 
        catch (error) {
            next(error)
        }
    }
    
    static updateShipment = async (params, next) => {
        try {
            const { id, origin, destination, loading_date, truck_id, driver_id, status } = params
            const shipment = await Shipment.findByPk(id)
            if (shipment) {
                shipment.origin = origin
                shipment.destination = destination
                shipment.loading_date = loading_date
                shipment.truck_id = truck_id
                shipment.driver_id = driver_id
                shipment.status = status
    
                await shipment.save()
            }
            else {
                throw({name: 'NOT_FOUND', message: 'shipment not found'})
            }
            return shipment
        }
        catch (error) {
            next(error)
        }
    }
}
module.exports = ShipmentService