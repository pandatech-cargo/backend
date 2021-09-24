const city_service = require('../services/cityService')
class CityController {
    static getCity = async (req, res, next) => {
        try {
            const cities = await city_service.getCity(next)
            if(cities)
                res.status(200).json(cities)
        } 
        catch (error) {
            next(error)
        }
    }
}

module.exports = CityController
