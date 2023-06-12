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
        const sql = `insert into order_medical(createUser, imgUrl, medicineName, medicinePrice, countOfOrder, medicineType, paymentStatus, createAt, updateAt) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const orderData = [ 
            data.createUser,
            data.imgUrl,
            data.medicineName,
            data.medicinePrice,
            data.countOfOrder,
            data.medicineType,
            data.paymentStatus,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, orderData, callback);
    },

    /**
     *  Get all medical
    */
    getAllOrders: (callback) => {
        const sql = `select id, createUser, imgUrl, medicineName, medicinePrice, countOfOrder, medicineType, paymentStatus, createAt from order_medical`;
        handleConnction(sql, [], callback);
    },


    /**
     *  get all medical orders where medical create by user id
    */
    ordersByProvId: (id, callback) => {
        const sql = `SELECT om.*
        FROM order_medical om
        INNER JOIN medicals m ON om.createUser = m.createUser
        WHERE m.createUser = ?`;
        handleConnction(sql, [id], callback);
    },
    
    /**
     * Get all medical by user id
    */
    getListByUserId: (id, callback) => {
        const sql = `select id, imgUrl, medicineName, medicinePrice, countOfOrder, medicineType, paymentStatus,  createAt from order_medical where createUser = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     *  Get medical by id
    */
    getOrderById: (id, callback) => {
        const sql = `select id, createUser, imgUrl, medicineName, medicinePrice, countOfOrder, medicineType, paymentStatus, createAt from order_medical where id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     *  Update medical by id
    */
    updateOrder: (data, callback) => {
        const sql = `update order_medical set  imgUrl = ?, medicineName = ?, medicinePrice = ?, countOfOrder = ?, medicineType = ?, paymentStatus = ?, updateAt = ? where id = ?`;
        const orderData = [ 
            data.imgUrl,
            data.medicineName,
            data.medicinePrice,
            data.countOfOrder,
            data.medicineType,
            data.paymentStatus,
            currentTime(),
            data.id
        ];
        handleConnction(sql, orderData, callback);
    },

    /**
     *  Delete medical by id
     */
    deleteOrder: (id, callback) => {
        const sql = `delete from order_medical where id = ?`;
        handleConnction(sql, [id], callback);
    }
}