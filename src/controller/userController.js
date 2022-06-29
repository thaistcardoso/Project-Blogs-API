const express = require('express');

const router = express.Router();

const serviceLogin = require('../services/servicesUser');

router.get('/', async (req, res) => { 
    const login = await serviceLogin.createLogin(req.body);
    res.status(200).json(login);
});

module.exports = router;