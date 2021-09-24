if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')
const cors = require('cors');

app.use(cors())
app.use(route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})