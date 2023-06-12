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
        const sql = `insert into medical_registration (hospitalId, createUser, registrationType, doctorName, doctorDesc, doctorImgUrl, fee, createAt, updateAt) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const registrationData = [ 
            data.hospitalId,
            data.createUser,
            data.registrationType,
            data.doctorName,
            data.doctorDesc,
            data.doctorImgUrl,
            data.fee,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, registrationData, callback);
    },

    /**
     *  get all medical registration
    */
    getMedicalRegistration: (callback) => {
        const sql = `SELECT * FROM medical_registration`;
        handleConnction(sql, [], callback);
    },

    /**
     * get all medical registration by hospital id
    */
    medicalDataByHospitalId: (id, callback) => {
        const sql = `SELECT * FROM medical_registration WHERE hospitalId = ?`;
        handleConnction(sql, [id], callback);
    },

    listByUserId: (id, callback) => {
        const sql = `select o.id as reg__id , o.hospitalId, o.createUser, o.registrationType, o.doctorName, o.doctorDesc, o.doctorImgUrl, o.fee as reg__fee , h.* from medical_registration o inner join hospitals h on o.hospitalId = h.id where o.createUser = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * get medical registration by id
    */
    getMedicalRegistrationById: (id, callback) => {
        const sql = `SELECT id, hospitalId, createUser, registrationType, doctorName, doctorDesc, doctorImgUrl, fee FROM medical_registration WHERE id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * update medical registration by id
    */
    updateMedicalRegistrationById: (data, callback) => {
        const sql = `UPDATE medical_registration SET hospitalId = ?, registrationType = ?, doctorName = ?, doctorDesc = ?, doctorImgUrl = ?, fee = ?, updateAt = ? WHERE id = ?`;
        const registrationData = [
            data.hospitalId,
            data.registrationType,
            data.doctorName,
            data.doctorDesc,
            data.doctorImgUrl,
            data.fee,
            currentTime(),
            data.id
        ];
        handleConnction(sql, registrationData, callback);
    },

    /**
     * delete medical registration by id
    */
    deleteMedicalRegistrationById: (id, callback) => {
        const sql = `DELETE FROM medical_registration WHERE id = ?`;
        handleConnction(sql, [id], callback);
    }

}