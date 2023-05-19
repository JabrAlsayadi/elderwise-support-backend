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
        const sql = `insert into order_user_registration (hospitalName, createUser, hospitalAddress, registrationType, doctorName, fee, registrationStatus, registrationAt, createAt, updateAt, paymentStatus) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const registrationData = [ data.hospitalName, data.createUser, data.hospitalAddress, data.registrationType, data.doctorName, data.fee, data.registrationStatus, currentTime(), currentTime(), currentTime(), 0 ];
        handleConnction(sql, registrationData, callback);
    },

    /**
     *  get all medical registration
    */
    getMedicalRegistration: (callback) => {
        const sql = `SELECT * FROM order_user_registration`;
        handleConnction(sql, [], callback);
    },

    /**
     * get medical registration by id
    */
    getMedicalRegistrationById: (id, callback) => {
        const sql = `SELECT * FROM order_user_registration WHERE id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * update medical registration by id
    */
    updateMedicalRegistrationById: (data, callback) => {
        const sql = `UPDATE order_user_registration SET hospitalName = ?, hospitalAddress = ?, registrationType = ?, doctorName = ?, fee = ?, registrationStatus = ?, registrationAt = ?, updateAt = ?, paymentStatus = ? WHERE id = ?`;
        const registrationData = [ data.hospitalName, data.hospitalAddress, data.registrationType, data.doctorName, data.fee, data.registrationStatus, data.registrationAt, currentTime(), 0, data.id ];
        handleConnction(sql, registrationData, callback);
    },

    /**
     * delete medical registration by id
    */
    deleteMedicalRegistrationById: (id, callback) => {
        const sql = `DELETE FROM order_user_registration WHERE id = ?`;
        handleConnction(sql, [id], callback);
    }

}