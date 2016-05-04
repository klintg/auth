const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const http = require('http')
const router = require('./router')
const mongoose = require('mongoose')

const app = express();

//db SETUP
mongoose.connect('mongodb://localhost:auth/auth')

app.use(morgan('dev'))
app.use(bodyParser.json())

router(app)
const port = process.env.PORT || 3000;

const server = http.createServer(app)
server.listen(port);
console.log("running on :", port)
