const express = require('express');

const router = express.Router();

const servicesCategory = require('../services/categoryService');
// const { authenticate } = require('../services/authService');

const { authenticateMiddleware } = require('../middlewares/auth');

router.post('/', authenticateMiddleware, async (req, res) => { 
    const newCategory = await servicesCategory.createCategory(req.body);
    res.status(201).json(newCategory);
});

module.exports = router;