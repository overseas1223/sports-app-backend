const express = require('express')
const router = express.Router()

const teamRouter = require('./team')
const refereeRouter = require('./referee')

router.use("/api/v1/team", teamRouter)
router.use("/api/v1/referee", refereeRouter)

module.exports = router