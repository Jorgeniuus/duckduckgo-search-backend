const express = require('express')
const cors = require('cors')
const routes = require('./routes/tasksRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/search', routes)

module.exports = app