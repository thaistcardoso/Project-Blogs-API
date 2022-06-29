const express = require('express');

const router = express.Router();

const servicesUser = require('../services/servicesUser');
const { authenticate } = require('../services/authService');

const { validateName } = require('../middlewares/validateName');
const { validateEmail } = require('../middlewares/validateEmail');
const { validatePassword } = require('../middlewares/validatePassword');

router.post('/', validateName, validateEmail, validatePassword, async (req, res) => { 
    await servicesUser.createUser(req.body);
    const token = await authenticate(req.body);
    res.status(201).json(token);
});

module.exports = router;