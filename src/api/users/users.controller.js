/**
* @author: https://github.com/GabrSayadi
*/

const {
    userRegister,
    userLogin,
    updateUser,
    getUserById,
    listUser,
    updatePassword
} = require('./users.service')

/**
 *  Response
 */
const {
    errorRes,
    successRes,
    loginSuccess
} = require('../../utils/response/response.global')

/**
 *  Exception
*/
const { 
    ERROR_RES,
    INVALID_USER,
    NOT_FOUND,
    EMPTY
} = require('../../Exception/exception.global');
const { isEmpty } = require('../../utils/empty');


module.exports = {

    /**
     *  Create new user 
    */
    register: (req, res) => {
        const registerData = req.body;
        
        isEmpty(registerData)
        ?
            userRegister(registerData, (err, data) => {
                if (err)
                    errorRes(res, 500, ERROR_RES);

                successRes(res, 200, data.insertId);
            })
        :
            errorRes(res, 200, EMPTY);
    },

    /**
     *  login User 
    */
    login: (req, res) => {
        const loginData = req.body;
        
        isEmpty(loginData)
        ?
            userLogin(loginData, (err, data) => {
                if (err)
                    errorRes(res, 500, ERROR_RES);

                if (!data.length)
                    errorRes(res, 200, INVALID_USER);
                else
                    loginSuccess(res, 200, data);
            })
        :
            errorRes(res, 200, EMPTY);
    },

    /**
     *  Update User by Id
    */
    updateUserById: (req, res) => {
        const updateData = req.body

        isEmpty(updateData)
        ?
            updateUser(updateData, (err, data) => {
                if (err)
                    errorRes(res, 500, ERROR_RES);
                
                if (!data)
                    errorRes(res, 200, NOT_FOUND);
                else
                    successRes(res, 200, data.affectedRows);
            })
        :
            errorRes(res, 200, EMPTY)
    },

    /**
     *  Get User By Id
    */
    getUser: (req, res) => {
        const id = req.params.id

        isEmpty(id)
        ?
            getUserById(id,(err, data) => {
                    if (err)
                        errorRes(res, 500, ERROR_RES);

                    if (!data.length)
                        errorRes(res, 200, NOT_FOUND);
                    else
                        successRes(res, 200, data);
            })
        :
            errorRes(res, 200, EMPTY)
    },

    /**
     *  User list 
    */
    getUsers: (req, res) => {

        listUser((err, data) => {
            if (err)
                errorRes(res, 500, ERROR_RES);
            successRes(res, 200, data)
        });
    }
}
