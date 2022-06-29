const express = require('express');

const authController = require('./controller/authController');
const userController = require('./controller/userController');
// const authenticateToken = require('./middlewares/auth');

const routers = express.Router();

routers.use('/login', authController);
routers.use('/user', userController);

module.exports = routers;
