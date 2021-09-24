const driver_service = require('../services/driverService')
const  driver_layout = require('../layout/driver_layout')
class DriverController {
    static getDrivers = async (req, res, next) => {
        try{
            const { sortBy, sort, status, name, page, limit } = req.query
            const  drivers = await driver_service.getDrivers({ sortBy, sort, status, name, page, limit }, next)
            res.status(200).json(driver_layout.getDrivers(drivers, { page, limit }) )
        }
        catch (error) {
            next (error)
        }

    }

    static getDetailDriver = async (req, res, next) => {
        try{
            const { id } = req.params
            const  driver = await driver_service.getDetailDriver(id, next)
            if(driver)
                res.status(200).json(driver)
        }
        catch (error) {
            next (error)
        }
    }

    static addDriver = async (req, res, next) => {
        try {
            let params = req.parameters
            params = params.permit('name', 'phone_number', 'idcard_url', 'lisence_url').value()
            const { name, phone_number, idcard_url, lisence_url, status } = params
            const  driver = await driver_service.addDriver({ name, phone_number, idcard_url, lisence_url, status }, next)
            if(driver)
                res.status(201).json(driver)
        } 
        catch (error) {
            next (error)
        }
    }

    static updateDriver = async (req, res, next) => {
        try {
            const { id } = req.params
            let params = req.parameters
            params = params.permit('name', 'phone_number', 'idcard_url', 'lisence_url', 'status').value()
            const { name, phone_number, idcard_url, lisence_url, status } = params
            const  driver = await driver_service.updateDriver({ id, name, phone_number, idcard_url, lisence_url, status }, next)
            if(driver)
                res.status(201).json(driver)
        }
        catch (error) {
            next (error)
        }
    }
}

module.exports = DriverController