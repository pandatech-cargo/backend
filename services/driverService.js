const { Op } = require('sequelize')
const { Driver } = require('../models')
class DriverService {
    static getDrivers = async (params, next) => {
        try {
            const limit = params.limit || 5
            const offset = ( params.page -1 ) * limit || 0
            let order = []
            if (params.sortBy && !params.sort)
                order = [ [params.sortBy], ['ASC'] ]
            if (params.sortBy && params.sort)
                order = [ [params.sortBy], [params.sort] ]
            let where = {}
            if(params.name)
                where['name'] = {
                    [Op.like]: `%${params.name}%`
                }
            if(params.status)
                where['status'] = params.status
            const drivers  = await Driver.findAndCountAll({
                offset,
                limit,
                where,
                order,
            })
            return drivers
        } 
        catch (error) {
            next(error)
        }
    }

    static getDetailDriver = async (param, next) => {
        try{
            const driver  = await Driver.findOne({
                where: { id: param }
            })
            if(driver)
                return driver
            else{
                throw({name: 'NOT_FOUND', message: 'driver not found'})
            }
        } 
        catch (error) {
            next(error)
        }
    }

    static addDriver = async (params, next) => {
        try {
            const { name, phone_number, idcard_url, lisence_url } = params
            const driver = await Driver.create({ name, phone_number, idcard_url, lisence_url })
            return driver
        } 
        catch (error) {
            next(error)
        }
    }
    
    static updateDriver = async (params, next) => {
        try {
            const { id, name, phone_number, idcard_url, lisence_url, status } = params
            const driver = await Driver.findByPk(id)
            if (driver) {
                driver.name = name
                driver.phone_number = phone_number
                driver.idcard_url = idcard_url
                driver.lisence_url = lisence_url
                driver.status = status
    
                await driver.save()
            }
            else {
                throw({name: 'NOT_FOUND', message: 'driver not found'})
            }
            return driver
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = DriverService