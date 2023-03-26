
/**
* @author: https://github.com/GabrSayadi
*/

const { isEmpty } = require('../../utils/empty');
const { createContact, contactList, updatePhone, deleteContact } = require('./phonse.service');
const { errorRes, successRes } = require('../../utils/response/response.global');
const { EMPTY, ERROR_RES, NOT_FOUND } = require('../../Exception/exception.global');

module.exports = {

    /**
     * Create new agency contact
     */
    create: (req, res) => {
        const phone = req.body

        isEmpty(phone)
        ?
            createContact(phone, (err, data) => {
                if (err)
                    errorRes(res, 401, ERROR_RES);
                successRes(res, 200, data.insertId);
            })
        :
            errorRes(res,  401, EMPTY);
    },

    /**
     * Update phone
    */
    update: (req, res) => {
        const phoneData = req.body;

        isEmpty(phoneData)
        ?
            updatePhone(phoneData, (err, data) => {
                if (err)
                    errorRes(res, 401, ERROR_RES);
                
                if (data.affectedRows === 0)
                    errorRes(res, 401, NOT_FOUND);
                else
                    successRes(res, 200, data.affectedRows);
            })
        :
            errorRes(res,  401, EMPTY);
    },

    /**
     * Contact List
    */
    list: (req, res) => {

        contactList((err, data) => {
            if (err)
                errorRes(res, 401, ERROR_RES);
            successRes(res, 200, data);
        });
    },

    /**
     * Delete contact by id
    */
    deleteContactById: (req, res) => {
        const id = req.params.id;

        deleteContact(id, (err, data) => {
            if (err)
                errorRes(res, 401, ERROR_RES);
            
            if (data.affectedRows === 0)
                errorRes(res, 401, NOT_FOUND);
            else
                successRes(res, 200, data.affectedRows);
        });
    }

}