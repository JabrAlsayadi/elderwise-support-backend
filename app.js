/**
* @author: https://github.com/GabrSayadi
*/

require('dotenv').config();
const express = require('express');
const app = express();
const users = require('./src/api/users/users.router')
const phones = require('./src/api/phones/phones.router');
const medicalRegistration = require('./src/api/medical/registration.router')
const buyMedical = require('./src/api/orderMedical/order.router')
const checkInHospital = require('./src/api/checkInHospital/checkIn.router')


/**
 *  Global Settings
*/
app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });

/**
 *  Routers
*/
app.use('/api/user', users);
app.use('/api/phones', phones);
app.use('/api/medical-registration', medicalRegistration);
app.use('/api/buy-medical', buyMedical);
app.use('/api/check-in', checkInHospital);


/**
 *  listen
*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server runing on 3000...');
})
