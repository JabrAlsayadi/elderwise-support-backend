/**
* @author: https://github.com/GabrSayadi
*/

require('dotenv').config();
const express = require('express');
const app = express();
const users = require('./src/api/users/users.router')
const hospital = require('./src/api/hospital/hospital.router')
const registration = require('./src/api/registration/registration.router')
const orderRegistration = require('./src/api/orderRegistration/registration.router')
const rooms = require('./src/api/rooms/rooms.router')
const orderRoom = require('./src/api/OrderRoom/orderRoom.router')
const medical = require('./src/api/Medical/Medical.router')
const orderMedical = require('./src/api/OrderMedical/order.router')
const phones = require('./src/api/phones/phones.router');

/**
 *  Global Settings
*/
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

/**
 *  Routers
*/
app.use('/v1/user', users);
app.use('/v1/hospital', hospital);
app.use('/v1/registration', registration);
app.use('/v1/order-registration', orderRegistration);
app.use('/v1/rooms', rooms);
app.use('/v1/order-room', orderRoom);
app.use('/v1/medical', medical);
app.use('/v1/order-medical', orderMedical);
app.use('/v1/phones', phones);


/**
 *  listen
*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server runing on 3000...');
})
