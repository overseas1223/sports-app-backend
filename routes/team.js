const express = require('express')
const router = express.Router()

const { AddTeam } = require('../controllers/team')

router.post('/create', AddTeam)

module.exports = router