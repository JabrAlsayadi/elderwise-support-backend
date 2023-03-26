/**
* @author: https://github.com/GabrSayadi
*/

const { sign } = require('jsonwebtoken')

module.exports = {

    /**
     * Error Response
    */
    errorRes: (res, status, resText) => {
        return res.status(status).json(resText) 
    },

    /**
     * Success Response
     */
    successRes: (res, status, data) => {
        return res.status(status).json({
            code: '0',
            msg: 'success',
            data: {
                data
            }
        });
    },

    /**
     * Success login Response
     */
    loginSuccess: (res, status,  data) => {
        const token = sign(
            {result: data},
            "tokenpass123",
            { expiresIn: '24h'}
        );
        return res.status(status).json(
            {  
                code: '0',
                msg: 'success',
                data: data,
                token: token 
            }
        );
    },

    /**
     * Authoriztion Token Error 
    */
    authError: (res, msg) => {
        return res.json({
            success: 0,
            message: msg
        });
    }

}