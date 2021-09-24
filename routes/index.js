const router = require('express').Router()
const driver = require('./driverRouter')
router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.use('/drivers', driver)

module.exports = router