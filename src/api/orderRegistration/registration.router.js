/**
* @author: https://github.com/GabrSayadi
*/

const router = require('express').Router();

const { registration, registrationList, getRegistration, updateRegistration, deleteRegistration, listByUserId, getOrderByUserId}  = require('./registration.controller');
const { checkToken } = require('../../auth/authToken');

/** 
 * @route POST api/registration
 * @desc Register a new patient
 * @access Private
*/
router.post('/', checkToken, registration);

/**
 * @route GET api/registration
 * @desc Get all medical registration
 * @access Private
*/
router.get('/', checkToken, registrationList);

/**
 * @route GET api/registration/list/:id
 * @desc Get all medical registration by user id
 * @access Private
 */
router.get('/list/:id', checkToken, listByUserId);

/**
 * @route GET api/registration/order/:id
 * @desc Get order by user id
 * @access Private
*/
router.get('/order/:id', checkToken, getOrderByUserId);

/**
 * @route GET api/registration/:id
 * @desc Get medical registration by id
 * @access Private
 */
router.get('/:id', checkToken, getRegistration);

/**
 * @route PUT api/registration/:id
 * @desc Update medical registration by id
 * @access Private
*/
router.patch('/', checkToken, updateRegistration);

/**
 * @route DELETE api/registration/:id
 * @desc Delete medical registration by id
 * @access Private
*/
router.delete('/:id', checkToken, deleteRegistration);

module.exports = router