/**
* @author: https://github.com/GabrSayadi
*/

const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

module.exports = {
    /**
     *  Registration medical
     */
    registrationMedical: (data, callback) => {
        const sql = `insert into order_registration (hospitalId, createUser, registrationType, doctorName, fee, registrationStatus, registrationAt, createAt, updateAt, paymentStatus) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const orderData = [ 
            data.hospitalId,
            data.createUser,
            data.registrationType,
            data.doctorName,
            data.fee,
            data.registrationStatus,
            data.registrationAt,
            currentTime(),
            currentTime(),
            data.paymentStatus
        ];
        handleConnction(sql, orderData, callback);
    },

    /**
     *  get all medical registration
    */
    getMedicalRegistration: (callback) => {
        const sql = `SELECT id, hospitalId, createUser, registrationType, doctorName, fee, registrationStatus, registrationAt, paymentStatus FROM order_registration`;
        handleConnction(sql, [], callback);
    },

    /**
     * get all medical registration by user id
     */
    getListByUserId: (id, callback) => {
        const sql = `SELECT o.id AS order_id, h.hospitalName, h.hospitalAddress, o.registrationType, o.doctorName, o.fee, o.paymentStatus, o.registrationAt
        FROM order_registration o
        JOIN hospitals h ON o.hospitalId = h.id
        WHERE o.createUser = ?`;
        handleConnction(sql, [id], callback);
    },
    /**
     * get medical registration by id
    */
    getMedicalRegistrationById: (id, callback) => {
        const sql = `SELECT id, hospitalId, createUser, registrationType, doctorName, fee, registrationStatus, registrationAt, paymentStatus FROM order_registration WHERE id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * get order by user id
     */
    getOrderByUserId: (id, callback) => {
        const sql = `SELECT mr.*
        FROM order_registration mr
        INNER JOIN hospitals h ON mr.hospitalId = h.id
        INNER JOIN user u ON h.createuser = u.id
        WHERE u.id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * update medical registration by id
    */
    updateMedicalRegistrationById: (data, callback) => {
        const sql = `UPDATE order_registration SET doctorName = ?, registrationAt = ?, updateAt = ?, paymentStatus = ? WHERE id = ?`;
        const orderData = [ 
            data.doctorName,
            data.registrationAt,
            currentTime(),
            data.paymentStatus,
            data.id
        ];
        handleConnction(sql, orderData, callback);
    },

    /**
     * delete medical registration by id
    */
    deleteMedicalRegistrationById: (id, callback) => {
        const sql = `DELETE FROM order_registration WHERE id = ?`;
        handleConnction(sql, [id], callback);
    }
}