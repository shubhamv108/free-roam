const express = require('express')
const app = express()
const featureOneRoutes = require('./featureOneRoutes')

app.use('/1.0/featureOne', featureOneRoutes)

module.exports = app;