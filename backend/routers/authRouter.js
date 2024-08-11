const express = require('express')
const router = express.Router()
const auth = require('../controllers/authController')

router.post("/users/register",auth.signUpUser)
router.post('/users/login', auth.loginUser)
router.post('/users/logout', auth.logOutUser)
router.post('/users/verify',auth.verifyEmail)
router.post('/users/resend', auth.resendOtp)

module.exports = router