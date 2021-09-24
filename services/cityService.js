const { City } = require('../models')
const { Op } = require('sequelize')
class CityService {
    static getCity = async (next) => {
        try {
            const cities = await City.findAll({
                where: {
                    province: {
                      [Op.or]: ['Jawa Tengah', 'Jawa Barat', 'Jawa Timur', 'Banten', 'DI Yogyakarta', 'DKI Jakarta']
                    }
                  }
            })
            let cities_name = cities.map(( city ) => {
                return city.city_name
            })
            return cities_name
        } 
        catch (error) {
            next(error)
        }
    }
}

module.exports = CityService
