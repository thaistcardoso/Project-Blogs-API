const express = require('express');

const router = express.Router();

const servicesUser = require('../services/servicesUser');
// const { authenticate } = require('../services/authService');

const { validateName } = require('../middlewares/validateName');
const { validateEmail } = require('../middlewares/validateEmail');
const { validatePassword } = require('../middlewares/validatePassword');

router.post('/', validateEmail, validateName, validatePassword, async (req, res) => { 
    const newUser = await servicesUser.createUser(req.body);
    res.status(201).json(newUser);
});

module.exports = router;