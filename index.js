const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const dotenv = require('dotenv')
dotenv.config({path: __dirname + '/.env'})
require('./config/db')

const app = express()
var corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

const server = require('http').Server(app)
const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})