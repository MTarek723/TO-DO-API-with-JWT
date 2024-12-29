const express = require('express')
const {CreateTask, GetTask} = require('../controllers/taskscontroller');
const jwt = require('jsonwebtoken')

const router = express.Router()

const AuthMiddleware = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(401).json({message: "No Token, Invalid Entry"})
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(401).json({message: "Invalid Token"})
    }
}
router.get('/',AuthMiddleware, GetTask)
router.post('/',AuthMiddleware, CreateTask);

module.exports = router

