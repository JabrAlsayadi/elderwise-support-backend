/**
* @author: https://github.com/GabrSayadi
*/

const { EMPTY, NOT_FOUND, ERROR_RES } = require("../../Exception/exception.global")
const { isEmpty } = require("../../utils/empty")
const { errorRes, successRes } = require("../../utils/response/response.global")
const { registrationMedical, getMedicalRegistration, getMedicalRegistrationById, updateMedicalRegistrationById, deleteMedicalRegistrationById } = require("./registration.service")


module.exports = {

    /**
     *  Registration medical
     */
    registration: (req, res) => {
        const registrationData = req.body
        
        isEmpty(registrationData)
        ? 
            registrationMedical(registrationData, (err, data) => {
                if(err)
                    errorRes(res, 500, err);
                
                if (!data)
                    errorRes(res, 404, ERROR_RES);
                successRes(res, 200, data.affectedRows);
            })
        :
            errorRes(res, 401, EMPTY)
    },

    /**
     *  Get all medical registration
    */
    registrationList: (req, res) => {
        getMedicalRegistration((err, data) => {
            if(err)
                errorRes(res, 500, err);
            successRes(res, 200, data);
        });
    },

    /**
     *  Get medical registration by id
     */
    getRegistration: (req, res) => {
        const id = req.params.id;
        
        isEmpty(id)
        ?
            getMedicalRegistrationById(id, (err, data) => {
                if(err)
                    errorRes(res, 500, err);
                
                if (!data.length)
                    errorRes(res, 404, NOT_FOUND);
                successRes(res, 200, data);
            })
        :
            errorRes(res, 401, NOT_FOUND)
    },

    /**
     *  Update medical registration by id
     */
    updateRegistration: (req, res) => {
        const updateData = req.body

        isEmpty(updateData)
        ?
            updateMedicalRegistrationById(updateData, (err, data) => {
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
     *  Delete medical registration by id
    */
    deleteRegistration: (req, res) => {
        const id = req.params.id;

        isEmpty(id)
        ?
            deleteMedicalRegistrationById(id, (err, data) => {
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