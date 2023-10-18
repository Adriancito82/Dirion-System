const router = require('express').Router()

const {
    newPc,
    getAllPc,
    getPcById,
    updatePcById,
    deletePcById

} = require('../controllers/pcController')

router
    .post('/newPc', newPc)

    .get('/', getAllPc)
    .get('/:id', getPcById)

    .put('/:id', updatePcById)

    .delete('/:id', deletePcById)


module.exports = router
