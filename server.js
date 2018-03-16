require ("dotenv").config();
const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const logger = require ('morgan');
const app = express();
const router = express.Router()


mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on ('connected', () => {
    console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);

})
const userController = require('./controllers/userController')
const profileController = require('./controller/profileController')
const portraitController = require('./controller/portraitController')

app.use('/api/user', userController)
app.use('/api/profile', profileController)
app.use('/api/portrait', portraitController)

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT);

})


module.exports = app
