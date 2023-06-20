const express = require('express')
const router = express.Router()

const teamRouter = require('./team')
const refereeRouter = require('./referee')
const competitionRouter = require('./competition')
const seasonRouter = require('./season')
const groupRouter = require('./group')
const tournamentRouter = require('./tournament')

router.use("/api/v1/team", teamRouter)
router.use("/api/v1/referee", refereeRouter)
router.use("/api/v1/competition", competitionRouter)
router.use("/api/v1/season", seasonRouter)
router.use("/api/v1/group", groupRouter)
router.use("/api/v1/tournament", tournamentRouter)

module.exports = router