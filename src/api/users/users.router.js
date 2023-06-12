/**
* @author: https://github.com/GabrSayadi
*/
const { register, login, updateUserById, getUser, getUsers, passwordUpdate } = require('../users/users.controller');
const { checkToken, authorzeAdmin } = require('../../auth/authToken')


const router = require("express").Router();

/**
 * @route POST api/users/register
 * @desc Register user
 * @access Public
*/
router.post("/register", register);

/**
 * @route POST api/users/login
 * @desc Login user and return JWT token
 * @access Public
*/
router.post("/login", login);

/**
 * @route GET api/users
 * @desc Get all users
 * @access Private
*/
router.get("/",checkToken, authorzeAdmin, getUsers);

/**
 * @route GET api/users/:id
 * @desc Get user by id
 * @access Private
*/
router.get("/:id", checkToken, getUser);

/**
 * @route PATCH api/users/:id
 * @desc Update user by id
 * @access Private
*/
router.patch("/", checkToken, updateUserById);

module.exports = router;