const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async(req, res) => {
    const { name, email, password} = req.body;

    try {
        const user = new User({name, email, password})
        await user.save()
        res.status(201).json({message: 'User Created Successfully!'});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const login = async(req, res)=> {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({message: "Invalid User!"})
        
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({message: "Invalid User!"})
        
        const payload = {user: {id: user.id}}
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.json({token})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    register,
    login
}