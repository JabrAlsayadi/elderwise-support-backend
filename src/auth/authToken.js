/**
* @author: https://github.com/GabrSayadi
*/

const { verify } = require('jsonwebtoken')
const { authError } = require('../utils/response/response.global')

module.exports = {

    /**
     * middleware : authorize token
     */
    checkToken: (req, res, next) => {
        let token = req.get('authorization');
        if (token) {
            token = token.slice(7)
            verify(
                token,
                'tokenpass123',
                (err, decoded) => {
                    if (err)
                        authError(res, "Invalid token");
                    else
                        next();
                }
            )
        }
        else
            authError(res, "Access denied! unauthorized user");
    },

    /**
     *  middleware: authorize Admin
    */
    authorzeAdmin: (req, res, next) => {
        let token = req.get('authorization');
        
        if (token)
            token = token.split(' ')[1];
        const DCToken = verify(token, 'tokenpass123')
        console.log(DCToken);
        if (DCToken.result[0].userRole !== 'admin') {
            authError(res, "Access denied!");
            return;
        }
        next()
    }

}