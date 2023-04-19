const express = require('express')
const route = express.Router()
const app = express()

const services = require('./services/render')
const controller = require('../controller/controller')

route.get('/', services.homeRoutes)


route.get('/add-user', (req,res) => {
    res.render('add_user')
})

app.get('/update-user', (req,res) => {
    res.render('update')
})

route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route