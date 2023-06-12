/**
* @author: https://github.com/GabrSayadi
*/

const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById, roomsByHospitalId, roomsListByUserId} = require("./rooms.controller");
const { checkToken } = require("../../auth/authToken");
/**
 * @router: POST /api/rooms 
 * @desc: Create a new room
 * @access: private
*/
router.post("/", checkToken, create);

/**
 * @router: GET /api/rooms 
 * @desc: Get all rooms 
 * @access: private
*/
router.get("/",  checkToken, getAll);

/**
 * @router: GET /api/orderRoom/hospital/:id
 * @desc: Get all  orderRoom
 * @access: private
 */
router.get("/hospital/:id", checkToken, roomsByHospitalId);

/**
 * @router: GET /api/orderRoom/user/:id
 * @desc: Get all  orderRoom
 * @access: private
*/
router.get("/owner/:id", checkToken, roomsListByUserId);

/**
 * @router: GET /api/rooms/:id
 * @desc: Get room by id
 * @access: private
*/
router.get("/:id", checkToken, getById);

/**
 * @router: PATCH /api/rooms/:id
 * @desc: Update room  by id
 * @access: private
*/
router.patch("/", checkToken, updateById);

/**
 * @router: DELETE /api/rooms/:id
 * @desc: Delete room  by id
 * @access: private
*/
router.delete("/:id", checkToken, deleteById);

module.exports = router;