const router = require('express').Router()
const driver = require('./driverRouter')
const trucksRouter = require("./trucks");
router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.use('/drivers', driver)
router.use("/trucks", trucksRouter);

module.exports = router;