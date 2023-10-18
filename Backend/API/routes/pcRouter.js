const router = require('express').Router()

const {
    newPc,
} = require('../controllers/pcController')

router
    .post('/newPc')


module.exports = router
