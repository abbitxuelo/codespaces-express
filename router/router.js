const router = require('express').Router()
const audio = require('./audioRouter')
router.use('/audio/', audio)

module.exports = router
