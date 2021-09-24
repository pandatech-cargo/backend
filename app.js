if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const cors = require('cors');
const route = require('./routes')
const params = require('strong-params')
const express = require('express')

const app = express()
app.use(cors())
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(params.expressMiddleware())
app.use(route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})