module.exports = {
    getDrivers(data, params) {
        data = JSON.parse(JSON.stringify(data))
        data.page = +(params.page || 1);
        data.limit = +(params.limit || 5);
        data.totalPage = Math.ceil(data.count / data.limit);
        data.data = data.rows;
        delete data.rows
        data.data.map(( row ) => {
            row.class = {
                id: row.id,
                name: row.name,
                phone_number: row.phone_number,
                idcard_url:row.idcard_url,
                license_url: row.license_url,
                status: row.status
            }
            delete row.Driver
        })
        return data
    },
}