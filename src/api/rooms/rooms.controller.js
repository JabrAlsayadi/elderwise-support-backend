/**
* @author: https://github.com/GabrSayadi
*/

const { createCheckIn, getAllCheckIn, getCheckInById, updateCheckInById, deleteCheckInById, roomsByHospitalId, roomsListByUserId } = require("./rooms.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js')
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");



module.exports = {

    /**
     * Check in hospital
    */
    create: (req, res) => {
        const checkInData = req.body;

        isEmpty (checkInData)
        ?
            createCheckIn(checkInData, (err, data) => {
                if (err) 
                    errorRes(res, 200, err)
                
                if (!data.affectedRows)
                    errorRes(res, 200, ERROR_RES);
                successRes(res, 200, data.insertId);
            })
        :
            errorRes(res, 200, EMPTY);
    },

    /**
    * Get Order Room by hospitalId
    */
    roomsByHospitalId: (req, res) => {
        const id = req.params.id;
        isEmpty (id)
        ?
            roomsByHospitalId(id, (err, data) => {
                if (err) 
                    errorRes(res, 500, err)
                
                if (!data.length)
                    errorRes(res, 200, NOT_FOUND);
                successRes(res, 200, data);
            })
        :
            errorRes(res, 200, EMPTY);
    },

    /**
     * Get all check in
     */
    getAll: (req, res) => {
        getAllCheckIn((err, data) => {
            if (err) 
                errorRes(res, 200, err)
            successRes(res, 200, data);
        });
    },

    /**
     * 
     * Get Room by userId
     */
    roomsListByUserId: (req, res) => {
        const id = req.params.id;
        roomsListByUserId(id, (err, data) => {
            if (err)
                errorRes(res, 500, err)
            successRes(res, 200, data);
        })
    },

    /**
     * Get check in by id
     */
    getById: (req, res) => {
        const id = req.params.id;
        isEmpty (id)
        ?
            getCheckInById(id, (err, data) => {
                if (err) 
                    errorRes(res, 200, err)
                
                if (!data.length)
                    errorRes(res, 200, NOT_FOUND);
                successRes(res, 200, data);
            })
        : 
            errorRes(res, 200, EMPTY);
    },

    /**
     * Update check in by id
     */
    updateById: (req, res) => {
        const checkInData = req.body;

        isEmpty (checkInData)
        ?
            updateCheckInById(checkInData, (err, data) => {
                if (err) 
                    errorRes(res, 200, err)
                
                if (data.affectedRows === 0)
                    errorRes(res, 200, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            })
        : 
            errorRes(res, 200, EMPTY);
    },

    /**
     * Delete check in by id
     */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty (id) 
        ?
            deleteCheckInById(id, (err, data) => {
                if (err)
                    errorRes(res, 200, err)
                
                if (data.affectedRows === 0)
                    errorRes(res, 200, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            })
        :
            errorRes(res, 200, EMPTY);
    }

}