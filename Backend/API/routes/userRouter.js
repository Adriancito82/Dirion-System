const router = require('express').Router()

const {
    checkAuth,
    checkRolAdmin
} = require('../utils')

const {
    singup,
    login,
    getUserById,
    updateUserById,
    deleteUserById,

} = require('../controllers/userController')

router
    .post('/signup', singup)
    .post('/login', login)

    .get('/:id', checkAuth, checkRolAdmin, getUserById)

    .put('/:id', checkAuth, checkRolAdmin, updateUserById)

    .delete('/:id', checkAuth, checkRolAdmin, deleteUserById)

module.exports = router
