const Task = require('../models/tasks')

const CreateTask = async (req, res)=> {
    const {title, describtion} = req.body
    try {
        const task = new Task({title, describtion, user: req.user.id})
        await task.save()
        res.status(201).json({message: "Task Created Successfully!", task})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const GetTask = async (req, res)=> {
    try {
        const tasks = await Task.find({user: req.user.id});
        res.json(tasks)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    CreateTask, 
    GetTask
}