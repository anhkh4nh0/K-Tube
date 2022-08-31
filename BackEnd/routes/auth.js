import express from 'express'
import { signin, signup, googleAuth } from '../controller/auth.js'

const router = express.Router()

//CREATE  A USER
router.post("/signup", signup)
// SIGN IN
router.post("/signin", signin)

// GOOGLE AUTHENCATION
router.post("/google", googleAuth )


export default router