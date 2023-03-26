/**
* @author: https://github.com/GabrSayadi
*/

module.exports  =  {

    /**
     * check empty
     */
    isEmpty: (data) => {
        return Object.values(data).every(prop => prop !== '' && prop !== null);
    }
}