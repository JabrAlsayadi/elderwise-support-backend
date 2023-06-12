/**
* @author: https://github.com/GabrSayadi
*/

const router = require("express").Router();

const { create, getAll, getById, updateById, deleteById, getCanRegistration, listByUserId} = require("./hospital.controller");
const { checkToken } = require("../../auth/authToken");
/**
 * @router: POST /api/hospital
 * @desc: Create a new hospital
 * @access: private
*/
router.post("/", checkToken, create);

/**
 * @router: GET /api/hospital/can-registration
 * @desc: Get all hospital with can registration data
 * @access: private
*/
router.get("/can-registration", checkToken, getCanRegistration);

/**
 * @router: GET /api/hospital/user/:id
 * @desc: Get all hospital by user id
 * @access: private
*/

router.get("/owner/:id", checkToken, listByUserId);

/**
 * @router: GET /api/hospital
 * @desc: Get all hospital
 * @access: private
*/
router.get("/",  checkToken, getAll);

/**
 * @router: GET /api/hospital/:id
 * @desc: Get hospital by id
 * @access: private
*/
router.get("/:id", checkToken, getById);

/**
 * @router: PATCH /api/hospital/:id
 * @desc: Update hospital by id
 * @access: private
*/
router.patch("/", checkToken, updateById);

/**
 * @router: DELETE /api/hospital/:id
 * @desc: Delete hospital by id
 * @access: private
*/
router.delete("/:id", checkToken, deleteById);

module.exports = router;