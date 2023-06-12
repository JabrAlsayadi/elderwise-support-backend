/**
* @author: https://github.com/GabrSayadi
*/

const { createCheckIn, getAllCheckIn, getCheckInById, updateCheckInById, deleteCheckInById, ordersByUserId, ordersRoomByProvId } = require("./orderRoom.service");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { isEmpty } = require('../../utils/empty.js')
const { NOT_FOUND, ERROR_RES, EMPTY } = require("../../Exception/exception.global");



module.exports = {

    /**
     * Order Room hospital
    */
    create: (req, res) => {
        const checkInData = req.body;

        isEmpty (checkInData)
        ?
            createCheckIn(checkInData, (err, data) => {
                if (err) 
                    errorRes(res, 500, err)
                
                if (!data.affectedRows)
                    errorRes(res, 200, ERROR_RES);
                successRes(res, 200, data.insertId);
            })
        :
            errorRes(res, 200, EMPTY);
    },

    /**
     * Get all Order Room
     */
    getAll: (req, res) => {
        getAllCheckIn((err, data) => {
            if (err) 
                errorRes(res, 500, err)
            successRes(res, 200, data);
        });
    },

    /**
     * get all room orders by prov id
    */
    ordersRoomByProvId: (req, res) => {
        const id = req.params.id;
        ordersRoomByProvId(id, (err, data) => {
            if (err)
                errorRes(res, 500, err)
            successRes(res, 200, data);
        })
    },

    /**
     * get all room orders by user id
     */
    ordersByUserId: (req, res) => {
        const id = req.params.id;
        isEmpty (id)
        ?
            ordersByUserId(id, (err, data) => {
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
     * Get Order Room by id
     */
    getById: (req, res) => {
        const id = req.params.id;
        isEmpty (id)
        ?
            getCheckInById(id, (err, data) => {
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
     * Update Order Room by id
     */
    updateById: (req, res) => {
        const checkInData = req.body;
        isEmpty (checkInData)
        ?
            updateCheckInById(checkInData, (err, data) => {
                if (err) 
                    errorRes(res, 500, err)
                
                if (data.affectedRows === 0)
                    errorRes(res, 200, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            })
        : 
            errorRes(res, 200, EMPTY);
    },

    /**
     * Delete Order Room by id
     */
    deleteById: (req, res) => {
        const id = req.params.id;

        isEmpty (id) 
        ?
            deleteCheckInById(id, (err, data) => {
                if (err)
                    errorRes(res, 500, err)
                
                if (data.affectedRows === 0)
                    errorRes(res, 200, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            })
        :
            errorRes(res, 200, EMPTY);
    }
}