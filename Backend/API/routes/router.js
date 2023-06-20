const router = require('express').Router()

const user = require('./userRouter')
const pc = require('./pcRouter')

router.use('/user', user)
router.use('/pc', pc)

module.exports = router
