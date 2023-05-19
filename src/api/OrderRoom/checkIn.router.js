/**
* @author: https://github.com/GabrSayadi
*/

const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById } = require("./checkIn.controller");
const { checkToken } = require("../../auth/authToken");
/**
 * @router: POST /api/checkInHospital
 * @desc: Create a new checkInHospital
 * @access: private
*/
router.post("/", checkToken, create);

/**
 * @router: GET /api/checkInHospital
 * @desc: Get all checkInHospital
 * @access: private
*/
router.get("/",  checkToken, getAll);

/**
 * @router: GET /api/checkInHospital/:id
 * @desc: Get checkInHospital by id
 * @access: private
*/
router.get("/:id", checkToken, getById);

/**
 * @router: PATCH /api/checkInHospital/:id
 * @desc: Update checkInHospital by id
 * @access: private
*/
router.patch("/", checkToken, updateById);

/**
 * @router: DELETE /api/checkInHospital/:id
 * @desc: Delete checkInHospital by id
 * @access: private
*/
router.delete("/:id", checkToken, deleteById);

module.exports = router;