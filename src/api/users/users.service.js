/**
* @author: https://github.com/GabrSayadi
*/

/**
 *  current time : get current format date time 
*/
const { currentTime } = require('../../utils/time/time.global'); 
/**
 *  handle connection : connection to database & handle data
*/
const { handleConnction } = require('../../utils/callback/callback.global');


module.exports = {

    /**
     *  Create new User
    */
    userRegister: (data, callback) => {
        const sql = `insert into user(userName, userAccount, userRole, userPassword, createAt, updateAt) values(?,?,?,?,?,?)`;
        const userData = [ 
            data.userName,
            data.userAccount,
            data.userRole,
            data.userPassword,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, userData, callback);
    },

    /**
     *  login
     */
    userLogin: (data, callback) => {
        const sql = `select * from user where userAccount =? and userPassword =?`;
        const userData = [
            data.userAccount,
            data.userPassword
        ];
        handleConnction(sql, userData, callback);
    },

    /**
     *  Update User by Id
    */
    updateUser: (data, callback) => {
        const sql = `update user set userName = ?, userAccount = ?, userPassword = ?, updateAt = ? where id = ?`;
        const updateData = [
            data.userName,
            data.userAccount,
            data.userPassword,
            currentTime(),
            data.id
        ];
        handleConnction(sql, updateData, callback);
    },

    /**
     *  Get User By Id 
    */
    getUserById:  (id, callback) => {
        const sql = `select * from user where id = ?`;
        const userId = [ id ];
        handleConnction(sql, userId, callback);
    },

    /**
     *  User list
     */
    listUser: callback => {
        const sql = `select * from user`;
        handleConnction(sql, [], callback);
    }

};