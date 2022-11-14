const colorController = require('../controllers/colorCOntroller')
const router = require('express').Router()

router.get('/:hex', colorController)

module.exports = router