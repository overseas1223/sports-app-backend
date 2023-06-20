const express = require('express')
const router = express.Router()

const { AddSeason, AddTeamsToSeason, GroupTeams } = require('../controllers/season')

router.post('/create', AddSeason)
router.put('/:seasonId/add-teams', AddTeamsToSeason)
router.put('/:seasonId/group-teams', GroupTeams)

module.exports = router