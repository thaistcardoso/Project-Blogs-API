const express = require('express');

const router = express.Router();

const servicesUser = require('../services/servicesUser');
// const { authenticate } = require('../services/authService');

const { validateName } = require('../middlewares/validateName');
const { validateEmail } = require('../middlewares/validateEmail');
const { validatePassword } = require('../middlewares/validatePassword');
const { authenticateMiddleware } = require('../middlewares/auth');

router.post('/', validateEmail, validateName, validatePassword, async (req, res) => { 
    const newUser = await servicesUser.createUser(req.body);
    res.status(201).json(newUser);
});

router.get('/', authenticateMiddleware, async (req, res) => { 
    const user = await servicesUser.getUser();
    res.status(200).json(user);
});

router.get('/:id', authenticateMiddleware, async (req, res) => { 
    const { id } = req.params;
    const userId = await servicesUser.getUserId(id, req.body);
    if (userId) {
    res.status(200).json(userId);
    }
    res.status(404).json({ message: 'User does not exist' });
});

module.exports = router;