/**
* @author: https://github.com/GabrSayadi
*/

require('dotenv').config();
const express = require('express');
const app = express();
const users = require('./src/api/users/users.router')
const phones = require('./src/api/phones/phones.router');
const medicalRegistration = require('./src/api/medical/registration.router')
const buyMedical = require('./src/api/buyMedical/order.router')
const checkInHospital = require('./src/api/checkInHospital/checkIn.router')
const orderRegistration = require('./src/api/orderRegistration/registration.router')
const orderRoom = require('./src/api/OrderRoom/checkIn.router')
const orderMedical = require('./src/api/OrderMedical/order.router')


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
app.use('/v1/user', users);
app.use('/v1/phones', phones);
app.use('/v1/medical-registration', medicalRegistration);
app.use('/v1/buy-medical', buyMedical);
app.use('/v1/check-in', checkInHospital);
app.use('/v1/order-registration', orderRegistration);
app.use('/v1/order-room', orderRoom);
app.use('/v1/order-medical', orderMedical);


/**
 *  listen
*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server runing on 3000...');
})
