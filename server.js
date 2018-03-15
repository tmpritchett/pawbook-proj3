require ("dotenv").config();
const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const morgan = require ('morgan');
const app = express();
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on ('connected', () => {
    console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);

})
const userController = require('./controllers/userController')
app.use(bodyParser.json());
app.use('/api/user', userController)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT);

})
