/**
* @author: https://github.com/GabrSayadi
*/

const { createCheckIn, getAllCheckIn, getCheckInById, updateCheckInById, deleteCheckInById, allHospitalCanRegistration, listByUserId } = require("./hospital.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js')
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");



module.exports = {

    /**
     * create hospital
    */
    create: (req, res) => {
        const checkInData = req.body;

        isEmpty (checkInData)
        ?
            createCheckIn(checkInData, (err, data) => {
                if (err) 
                    errorRes(res, 500, err)
                
                if (!data.affectedRows)
                    errorRes(res, 500, ERROR_RES);
                successRes(res, 200, data.insertId);
            })
        :
            errorRes(res, 500, EMPTY);
    },

    /**
     *  Get hospital with can registration data
     */
    getCanRegistration: (req, res) => {
        allHospitalCanRegistration((err, data) => {
            if (err) 
                errorRes(res, 500, err)
            successRes(res, 200, data);
        });
    },


    /**
     * Get all hospital by user id
    */
    listByUserId: (req, res) => {
        const id = req.params.id;
        isEmpty (id)
        ?
            listByUserId(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err)
                successRes(res, 200, data);
            })
        :
            errorRes(res, 500, EMPTY);
    },
    
    /**
     * Get all hospital
     */
    getAll: (req, res) => {
        getAllCheckIn((err, data) => {
            if (err) 
                errorRes(res, 500, err)
            successRes(res, 200, data);
        });
    },

    /**
     * Get hospital by id
     */
    getById: (req, res) => {
        const id = req.params.id;
        isEmpty (id)
        ?
            getCheckInById(id, (err, data) => {
                if (err) 
                    errorRes(res, 500, err)
                
                if (!data.length)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data);
            })
        : 
            errorRes(res, 500, EMPTY);
    },

    /**
     * Update hospital by id
     */
    updateById: (req, res) => {
        const checkInData = req.body;

        isEmpty (checkInData)
        ?
            updateCheckInById(checkInData, (err, data) => {
                if (err) 
                    errorRes(res, 500, err)
                
                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            })
        : 
            errorRes(res, 500, EMPTY);
    },

    /**
     * Delete hospital by id
     */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty (id) 
        ?
            deleteCheckInById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err)
                
                if (data.affectedRows === 0)
                    errorRes(res, 500, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            })
        :
            errorRes(res, 500, EMPTY);
    }
}