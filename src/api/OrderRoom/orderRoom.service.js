/**
* @author: https://github.com/GabrSayadi
*/

const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");


module.exports = {

    /**
     *  Order Room 
    */
    createCheckIn: (data, callback) => {
        const sql = `insert into order__room (hospitalId, createUser, medicineType, roomType, bedNumber, floorNumber, roomNumber, fee, reservationAt, updateAt, checkInAt, checkOutAt, paymentStatus) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const orderRoom = [
            data.hospitalId,
            data.createUser,
            data.medicineType,
            data.roomType,
            data.bedNumber,
            data.floorNumber,
            data.roomNumber,
            data.fee,
            currentTime(),
            currentTime(),
            data.checkInAt,
            data.checkOutAt,
            data.paymentStatus
        ];
        handleConnction(sql, orderRoom, callback);
    },

    /**
     *  Get all Order Room
    */
    getAllCheckIn: (callback) => {
        const sql = `select id, hospitalId, createUser, medicineType, roomType, bedNumber, floorNumber, roomNumber, fee, reservationAt, checkInAt, checkOutAt, paymentStatus from order__room`;
        handleConnction(sql, [], callback);
    },


    /**
     * get all room orders by user id
     */
    ordersByUserId: (id, callback) => {
        const sql = `SELECT o.id AS room_id, h.hospitalName, h.hospitalAddress, r.roomImgUrl, o.medicineType, o.roomType, o.bedNumber, o.floorNumber, o.roomNumber, o.fee, o.reservationAt, o.checkInAt, o.checkOutAt, o.paymentStatus
        FROM order__room o
        JOIN hospitals h ON o.hospitalId = h.id
        JOIN rooms r ON o.roomNumber = r.roomNumber AND o.createUser = r.createUser
        WHERE o.createUser = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     *  get all room orders by hospital id
    */
    ordersRoomByProvId: (id, callback) => {
        const sql = `SELECT mr.*
        FROM order__room mr
        INNER JOIN hospitals h ON mr.hospitalId = h.id
        INNER JOIN user u ON h.createuser = u.id
        WHERE u.id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     *  Get Order Room by id
    */
    getCheckInById: (id, callback) => {
        const sql = `select id, hospitalId, createUser, medicineType, roomType, bedNumber, floorNumber, roomNumber, fee, reservationAt, checkInAt, checkOutAt, paymentStatus from order__room where id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * Update Order Room by id
    */
    updateCheckInById: (data, callback) => {
        const sql = `update order__room set medicineType = ?, roomType = ?, bedNumber = ?, floorNumber = ?, roomNumber = ?, fee = ?, updateAt = ?, checkInAt = ?, checkOutAt = ?, paymentStatus = ? where id = ?`;
        const checkInData = [
            data.medicineType,
            data.roomType,
            data.bedNumber,
            data.floorNumber,
            data.roomNumber,
            data.fee,
            currentTime(),
            data.checkInAt,
            data.checkOutAt,
            data.paymentStatus,
            data.id
        ];
        handleConnction(sql, checkInData, callback);
    },

    /**
     * Delete Order Room by id
    */
    deleteCheckInById: (id, callback) => {
        const sql = `delete from order__room where id = ?`;
        handleConnction(sql, [id], callback);
    }

}