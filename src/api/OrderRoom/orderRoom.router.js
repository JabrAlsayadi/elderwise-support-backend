/**
* @author: https://github.com/GabrSayadi
*/

const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById, ordersByUserId, ordersRoomByProvId } = require("./orderRoom.controller");
const { checkToken } = require("../../auth/authToken");
/**
 * @router: POST /api/ orderRoom
 * @desc: Create a new  orderRoom
 * @access: private
*/
router.post("/", checkToken, create);

/**
 * @router: GET /api/ orderRoom
 * @desc: Get all  orderRoom
 * @access: private
*/
router.get("/",  checkToken, getAll);

/**
 * @router: GET /api/ orderRoom/:id
 * @desc: Get  orderRoom by id
 * @access: private
 */
router.get("/owner-orders/:id", checkToken, ordersByUserId);

/**
 * @router: GET /api/ orderRoom/:id
 * @desc: Get  orderRoom by id
 * @access: private
*/
router.get("/:id", checkToken, getById);

/**
 * @router: GET /api/ orderRoom/:id
 * @desc: Get  orderRoom by id
 * @access: private
*/
router.get("/order-prov/:id", checkToken, ordersRoomByProvId);

/**
 * @router: PATCH /api/ orderRoom/:id
 * @desc: Update  orderRoom by id
 * @access: private
*/
router.patch("/", checkToken, updateById);

/**
 * @router: DELETE /api/ orderRoom/:id
 * @desc: Delete  orderRoom by id
 * @access: private
*/
router.delete("/:id", checkToken, deleteById);

module.exports = router;