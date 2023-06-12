/**
* @author: https://github.com/GabrSayadi
*/

const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {
    /**
     * medical
    */
    createOrder: (data, callback) => {
        const sql = `insert into medicals(createUser, imgUrl, medicineName, medicinePrice, countOfOrder, medicineCount, medicineType, createAt, updateAt) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const medicalData = [ 
            data.createUser,
            data.imgUrl,
            data.medicineName,
            data.medicinePrice,
            1,
            data.medicineCount,
            data.medicineType,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, medicalData, callback);
    },

    /**
     *  Get all medical
    */
    getAllOrders: (callback) => {
        const sql = `select * from medicals`;
        handleConnction(sql, [], callback);
    },

    /**
     *  Get medical by id
    */
    getOrderById: (id, callback) => {
        const sql = `select id, imgUrl, medicineName, medicinePrice, countOfOrder, medicineCount, medicineType, createAt from medicals where id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * Get medical by user id
     */
    medicineListByUserId: (id, callback) => {
        const sql = `select id, imgUrl, medicineName, medicinePrice, countOfOrder, medicineCount, medicineType, createAt from medicals where createUser = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     *  Update medical by id
    */
    updateOrder: (data, callback) => {
        const sql = `update medicals set imgUrl = ?, medicineName = ?, medicinePrice = ?, medicineCount = ?, medicineType = ?, updateAt = ? where id = ?`;
        const medicalData = [ 
            data.imgUrl,
            data.medicineName,
            data.medicinePrice,
            data.medicineCount,
            data.medicineType,
            currentTime(),
            data.id
        ];
        handleConnction(sql, medicalData, callback);
    },

    /**
     *  Delete medical by id
     */
    deleteOrder: (id, callback) => {
        const sql = `delete from medicals where id = ?`;
        handleConnction(sql, [id], callback);
    }

}