
/**
* @author: https://github.com/GabrSayadi
*/

const { create, list, update, deleteContactById } = require('./phones.controller');
const {checkToken, authorzeAdmin } = require('../../auth/authToken')


const router = require('express').Router();

/** 
 * @route POST api/phones
 * @desc Create new agency contact
 * @access Private
 * 
*/
router.post('/', checkToken, authorzeAdmin, create);

/**
 * @route patch api/phones
 * @desc Update phone
 * @access Private
 */
router.patch('/', checkToken, authorzeAdmin, update);

/**
 * @route GET api/phones
 * @desc Contact List
 * @access Private
*/
router.get('/', checkToken, list);


/**
 * @route DELETE api/phones/:id
 * @desc Delete contact by id
 * @access Private
*/
router.delete('/:id', checkToken, authorzeAdmin, deleteContactById );

module.exports = router