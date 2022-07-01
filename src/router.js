const express = require('express');

const authController = require('./controller/authController');
const userController = require('./controller/userController');
const categoriesController = require('./controller/categoriesController');

const routers = express.Router();

routers.use('/login', authController);
routers.use('/user', userController);

routers.use('/categories', categoriesController);

module.exports = routers;
