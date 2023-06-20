const express = require('express')
const router = express.Router()

const { AddMatchToGroup } = require('../controllers/group')

router.post('/:groupId/add-match', AddMatchToGroup)

module.exports = router