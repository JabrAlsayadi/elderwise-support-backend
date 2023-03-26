/**
* @author: https://github.com/GabrSayadi
*/

const { EMPTY, NOT_FOUND, ERROR_RES } = require("../../Exception/exception.global");
const { isEmpty } = require("../../utils/empty");
const { errorRes, successRes } = require("../../utils/response/response.global");
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require("./order.service");

module.exports = {
    
    /**
     *  Buy medical
    */
    create: (req, res) => {
        const orderData = req.body;
        
        isEmpty(orderData)
        ?
            createOrder(orderData, (err, data) => {
                if(err)
                    errorRes(res, 500, err);
                
                if (!data)
                    errorRes(res, 401, ERROR_RES);
                successRes(res, 200, data.affectedRows);
            })
        :
            errorRes(res, 401, EMPTY)
    },

    /**
     *  Get all medical
    */
    getOrders: (req, res) => {
        getAllOrders((err, data) => {
            if(err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     *  Get medical by id
    */
    getOrder: (req, res) => {
        const id = req.params.id;
        
        isEmpty(id)
        ?
            getOrderById(id, (err, data) => {
                if(err)
                    errorRes(res, 500, err);
                
                if (!data.length)
                    errorRes(res, 404, NOT_FOUND);
                successRes(res, 200, data);
            })
        :
            errorRes(res, 401, EMPTY)
    },

    /**
     *  Update medical by id
    */
    updateOrder: (req, res) => {
        const orderData = req.body;
        
        isEmpty(orderData)
        ?
            updateOrder(orderData, (err, data) => {
                if(err)
                    errorRes(res, 500, err);
                
                if (data.affectedRows === 0)
                    errorRes(res, 404, NOT_FOUND);
                successRes(res, 200, data.affectedRows);
            })
        :
            errorRes(res, 401, EMPTY)
    },

    /**
     *  Delete medical by id
    */
    deleteOrder: (req, res) => {
        const id = req.params.id;
        
        isEmpty(id)
        ?
            deleteOrder(id, (err, data) => {
                if(err)
                    errorRes(res, 500, err);
                
                if (data.affectedRows === 0)
                    errorRes(res, 404, NOT_FOUND);
                successRes(res, 200, data);
            })
        :
            errorRes(res, 401, EMPTY)
    }

}