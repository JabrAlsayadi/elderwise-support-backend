/**
* @author: https://github.com/GabrSayadi
*/

const { handleConnction } = require("../../utils/callback/callback.global");
const { currentTime } = require("../../utils/time/time.global");

// createUser, hospitalId, medicineType, roomImgUrl, fee, floorNumber, roomType, roomNumber, bedNumber, createAt, updateAt

module.exports = {

    /**
     *  Check in hospital
    */
    createCheckIn: (data, callback) => {
        const sql = `insert into rooms (createUser, hospitalId, medicineType, roomImgUrl, fee, floorNumber, roomType, roomNumber, bedNumber, createAt, updateAt) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const roomData = [
            data.createUser,
            data.hospitalId,
            data.medicineType,
            data.roomImgUrl,
            data.fee,
            data.floorNumber,
            data.roomType,
            data.roomNumber,
            data.bedNumber,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, roomData, callback);
    },

    /**
     * Get Order Room by hospitalId
     */
    roomsByHospitalId: (id, callback) => {
        const sql = `select * from rooms where hospitalId = ?`;
        handleConnction(sql, [id], callback);
    },

    /** 
     * Get Room by userId
     * 
    */
    roomsListByUserId: (id, callback) => {
        const sql = `select o.id as room__id , o.hospitalId , o.medicineType , o.roomImgUrl , o.fee as room__fee, o.floorNumber , o.roomType , o.roomNumber , o.bedNumber, o.createAt, h.* from rooms o inner join hospitals h on o.hospitalId = h.id where o.createUser = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     *  Get all check in
    */
    getAllCheckIn: (callback) => {
        const sql = `select * from rooms`;
        handleConnction(sql, [], callback);
    },

    /**
     *  Get check in by id
    */
    getCheckInById: (id, callback) => {
        const sql = `select id, hospitalId, medicineType, roomImgUrl, fee, floorNumber, roomType, roomNumber, bedNumber from rooms where id = ?`;
        handleConnction(sql, [id], callback);
    },

    /**
     * Update check in by id
    */
    updateCheckInById: (data, callback) => {
        const sql = `update rooms set medicineType = ?, roomImgUrl = ?, fee = ?, floorNumber = ?, roomType = ?, roomNumber = ?, bedNumber = ?, updateAt = ? where id = ?`;
        const roomData = [
            data.medicineType,
            data.roomImgUrl,
            data.fee,
            data.floorNumber,
            data.roomType,
            data.roomNumber,
            data.bedNumber,
            currentTime(),
            data.id
        ];
        handleConnction(sql, roomData, callback);
    },

    /**
     * Delete check in by id
    */
    deleteCheckInById: (id, callback) => {
        const sql = `delete from rooms where id = ?`;
        handleConnction(sql, [id], callback);
    }

}