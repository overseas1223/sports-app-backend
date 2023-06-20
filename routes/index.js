const express = require('express')
const router = express.Router()

const teamRouter = require('./team')
const refereeRouter = require('./referee')
const competitionRouter = require('./competition')
const seasonRouter = require('./season')

router.use("/api/v1/team", teamRouter)
router.use("/api/v1/referee", refereeRouter)
router.use("/api/v1/competition", competitionRouter)
router.use("/api/v1/season", seasonRouter)

module.exports = router