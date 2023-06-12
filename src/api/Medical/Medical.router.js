/**
* @author: https://github.com/GabrSayadi
*/

const router = require('express').Router();
const { create, getOrders, getOrder, updateOrder, deleteOrder, medicineListByUserId } = require('./Medical.controller');
const { checkToken } = require('../../auth/authToken');

/**
 * @router POST api/orderMedical
 * @desc Buy medical
 * @access private
 */
router.post('/', checkToken, create);

/**
 * @router GET api/orderMedical
 * @desc Get all medical
 * @access private
 */
router.get('/', checkToken, getOrders);

/**
 * @router GET api/orderMedical/user/:id
 * @desc Get all medical by user id
 * @access private
*/
router.get('/owner/:id', checkToken, medicineListByUserId);

/**
 * @router GET api/orderMedical/:id
 * @desc Get medical by id
 * @access Private
 */
router.get('/:id', checkToken, getOrder);

/**
 * @router PATCH api/orderMedical/:id
 * @desc Update medical by id
 * @access Private
 */
router.patch('/', checkToken, updateOrder);

/**
 * @router DELETE api/orderMedical/:id
 * @desc Delete medical by id
 * @access Private
 */
router.delete('/:id', checkToken, deleteOrder);


module.exports = router