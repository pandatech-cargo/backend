module.exports = {
    getShipments(data, params) {
        data = JSON.parse(JSON.stringify(data))
        data.page = +(params.page || 1);
        data.limit = +(params.limit || 5);
        data.totalPage = Math.ceil(data.count / data.limit);
        data.data = data.rows;
        data.data.map(( row )=>{
            if(row.Driver)
                row.driver = row.Driver.name
            if(row.Truck)
                row.truck = row.Truck.license_number
            row.origin = `${row.city_origin.type} ${row.city_origin.city_name}`
            row.destination = `${row.city_destination.type} ${row.city_destination.city_name}`
            delete row.Driver
            delete row.Truck
            delete row.city_origin
            delete row.city_destination
        })
        delete data.rows
        return data
    },
    getShipmentDetails(data) {
        data = JSON.parse(JSON.stringify(data))
        data.data = data.rows;
            if(row.Driver)
                row.driver = row.Driver.name
            if(row.Truck)
                row.truck = row.Truck.license_number
            data.origin = `${data.city_origin.type} ${data.city_origin.city_name}`
            data.destination = `${data.city_destination.type} ${data.city_destination.city_name}`
            delete data.Driver
            delete data.Truck
            delete data.city_origin
            delete data.city_destination
        delete data.rows
        return data
    },
}