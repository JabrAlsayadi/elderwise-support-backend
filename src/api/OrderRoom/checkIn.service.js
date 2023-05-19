/**
* @author: https://github.com/GabrSayadi
*/

const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");


module.exports = {

    /**
     *  Check in hospital
    */
    createCheckIn: (data, callback) => {
        const sql = `insert into order_hospital_check_in (hospitalName,createUser,hospitalAddress,medicineType,roomType,bedNumber,floorNumber,roomNumber, fee, reservationAt, updateAt, checkInAt, checkOutAt, paymentStatus) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        const checkInData = [
            data.hospitalName,
            data.createUser,
            data.hospitalAddress,
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
        handleConnction(sql, checkInData, callback);
    },

    /**
     *  Get all check in
    */
    getAllCheckIn: (callback) => {
        const sql = `select * from order_hospital_check_in`;
        handleConnction(sql, [], callback);
    },

    /**
     *  Get check in by id
    */
    getCheckInById: (id, callback) => {
        const sql = `select * from order_hospital_check_in where id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * Update check in by id
    */
    updateCheckInById: (data, callback) => {
        const sql = `update order_hospital_check_in set hospitalName = ?,hospitalAddress = ?,medicineType = ?,roomType = ?,bedNumber = ?,floorNumber = ?,roomNumber = ?,fee = ?,updateAt = ?,checkInAt = ?,checkOutAt = ?,paymentStatus = ? where id = ?`;
        const checkInData = [
            data.hospitalName,
            data.hospitalAddress,
            data.medicineType,
            data.roomType,
            data.bedNumber,
            data.floorNumber,
            data.roomNumber,
            data.fee,
            currentTime(),
            data.checkInAt,
            data.checkOutAt,
            0,
            data.id
        ];
        handleConnction(sql, checkInData, callback);
    },

    /**
     * Delete check in by id
    */
    deleteCheckInById: (id, callback) => {
        const sql = `delete from order_hospital_check_in where id = ?`;
        handleConnction(sql, [id], callback);
    }

}