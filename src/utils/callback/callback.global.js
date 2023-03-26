/**
* @author: https://github.com/GabrSayadi
*/

const dbConn = require("../../config/database.config")

module.exports = {

    /**
     * handle connection: 
    */
    handleConnction: (sql, data, callback) => {
        dbConn.query(
            sql,
            data,
            (err, result, fields) => {
                return err
                ?
                    callback(err)
                :
                    callback(null, result);
            }
        );
    }

}