
/**
* @author: https://github.com/GabrSayadi
*/

const { currentTime } = require('../../utils/time/time.global');
const { handleConnction } = require('../../utils/callback/callback.global');


module.exports = {

    /**
     *  Create new agency contact
    */
    createContact: (data, callback) => {
        const sql = 'insert into phones(createUser, agencyName, phoneNumber, createAt, updateAt) value(?,?,?,?,?)';
        const contactData = [
            data.createUser,
            data.agencyName,
            data.phoneNumber,
            currentTime(),
            currentTime()
        ];
        handleConnction(sql, contactData, callback);
    },

    /**
     *  contacts list
    */
    contactList: callback  => {

        const sql = 'select * from phones';
        handleConnction(sql, [], callback);
    },

    /**
     * Update phone
    */
    updatePhone: (data, callback) => {
        const sql = 'update phones set agencyName = ?, phoneNumber = ?, updateAt = ? where id = ?';
        const contactData = [
            data.agencyName,
            data.phoneNumber,
            currentTime(),
            data.id
        ];
        handleConnction(sql, contactData, callback);
    },

    /**
     * Delete contact by id
     */
    deleteContact: (id, callback) => {
        const sql = 'delete from phones where id = ?';
        handleConnction(sql, [id], callback);
    }

}
