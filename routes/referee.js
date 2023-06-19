const express = require('express')
const router = express.Router()

const { AddReferee } = require('../controllers/referee')

router.post('/create', AddReferee)

module.exports = router