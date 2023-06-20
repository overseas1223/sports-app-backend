const express = require('express')
const router = express.Router()

const { CreateTournament, AddMatchToTournament } = require('../controllers/tournament')

router.post('/create', CreateTournament)
router.post('/:tournamentId/add-match', AddMatchToTournament)

module.exports = router