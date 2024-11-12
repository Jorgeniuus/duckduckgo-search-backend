const express = require('express')
const cors = require('cors')
const routes = require('./routes/tasksRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(routes)

module.exports = app