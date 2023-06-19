const express = require('express')
const router = express.Router()

const { AddCompetition } = require('../controllers/competition')

router.post('/create', AddCompetition)

module.exports = router