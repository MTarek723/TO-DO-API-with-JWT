require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const authRouter = require('./routes/authencation')
const taskRouter = require('./routes/task')


const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', (error)=>console.error(error));
db.on('open', ()=> console.log('DB Connected'));

const app = express()

app.use(express.json())



app.use('/api/auth', authRouter)
app.use('/api/task', taskRouter)

app.listen(3000)



