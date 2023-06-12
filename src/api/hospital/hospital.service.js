/**
* @author: https://github.com/GabrSayadi
*/

const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");


module.exports = {

    /**
     *  create hospital
    */
    createCheckIn: (data, callback) => {
        const sql = `insert into hospitals (hospitalName, createUser, hospitalAddress, hospitalDesc, createAt, updateAt) values (?,?,?,?,?,?)`;
        const hospitalData = [
            data.hospitalName,
            data.createUser,
            data.hospitalAddress,
            data.hospitalDesc,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, hospitalData, callback);
    },

    allHospitalCanRegistration: (callback) => {
        const sql = `
        SELECT 
            h.id AS hospitalId,
            h.hospitalName,
            h.hospitalAddress,
            h.hospitalDesc,
            h.createAt AS hospitalCreateAt,
            h.updateAt AS hospitalUpdateAt,
            m.id AS medicalRegistrationId,
            m.registrationType,
            m.doctorName,
            m.doctorDesc,
            m.doctorImgUrl,
            m.fee,
            m.createAt AS registrationCreateAt,
            m.updateAt AS registrationUpdateAt
        FROM
            hospitals h
        JOIN
            medical_registration m ON h.id = m.hospitalId
        ORDER BY
            h.id;    
        `;
        handleConnction(sql, [], callback);
    },

    /**
     * Get all hospital by user id
    */
    listByUserId: (id, callback) => {
        const sql = `select id, hospitalName, hospitalAddress, hospitalDesc from hospitals where createUser = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     *  Get all hospital
    */
    getAllCheckIn: (callback) => {
        const sql = `select * from hospitals`;
        handleConnction(sql, [], callback);
    },

    /**
     *  Get hospital by id
    */
    getCheckInById: (id, callback) => {
        const sql = `select id, hospitalName, hospitalAddress, hospitalDesc from hospitals where id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * Update hospital by id
    */
    updateCheckInById: (data, callback) => {
        const sql = `update hospitals set hospitalName = ?, hospitalAddress = ?, hospitalDesc = ?, updateAt = ? where id = ?`;
        const hospitalData = [
            data.hospitalName,
            data.hospitalAddress,
            data.hospitalDesc,
            currentTime(),
            data.id
        ];
        handleConnction(sql, hospitalData, callback);
    },

    /**
     * Delete hospital by id
    */
    deleteCheckInById: (id, callback) => {
        const sql = `delete from hospitals where id = ?`;
        handleConnction(sql, [id], callback);
    }

}