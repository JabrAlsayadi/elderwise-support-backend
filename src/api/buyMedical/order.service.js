/**
* @author: https://github.com/GabrSayadi
*/

const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {

    /**
     *  Buy medical
    */
    createOrder: (data, callback) => {
        const sql = `insert into buy_medical(medicineName, createUser, medicinePrice, medicineCount, medicineType, paymentStatus, createAt, updateAt) values(?,?,?,?,?,?,?,?)`;
        const medicalData = [ data.medicineName, data.createUser, data.medicinePrice, data.medicineCount, data.medicineType, data.paymentStatus, currentTime(), currentTime() ];
        handleConnction(sql, medicalData, callback);
    },

    /**
     *  Get all medical
    */
    getAllOrders: (callback) => {
        const sql = `select * from buy_medical`;
        handleConnction(sql, [], callback);
    },

    /**
     *  Get medical by id
    */
    getOrderById: (id, callback) => {
        const sql = `select * from buy_medical where id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     *  Update medical by id
    */
    updateOrder: (data, callback) => {
        const sql = `update buy_medical set medicineName = ?, medicinePrice = ?, medicineCount = ?, medicineType = ?, paymentStatus = ?, updateAt = ? where id = ?`;
        const medicalData = [ data.medicineName, data.medicinePrice, data.medicineCount, data.medicineType, data.paymentStatus, currentTime(), data.id ];
        handleConnction(sql, medicalData, callback);
    },

    /**
     *  Delete medical by id
     */
    deleteOrder: (id, callback) => {
        const sql = `delete from buy_medical where id = ?`;
        handleConnction(sql, [id], callback);
    }

}