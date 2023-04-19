const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodypaser = require('body-parser')
const connectDB = require('./server/database/connection')
const app = express();
const path = require('path')
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'))

connectDB()

app.use(bodypaser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "views/ejs"))

app.use('/css', express.static('/assets/css'));
app.use('/js', express.static('/assets/js'));
app.use('/img', express.static('/assets/img'));
app.use(express.static('assets'));

app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {
    console.log('сервер запущен на ' + PORT +' порту')
})