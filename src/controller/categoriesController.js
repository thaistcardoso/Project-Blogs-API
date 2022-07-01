const express = require('express');

const router = express.Router();

const servicesCategory = require('../services/categoryService');
// const { authenticate } = require('../services/authService');

const { authenticateMiddleware } = require('../middlewares/auth');

router.post('/', authenticateMiddleware, async (req, res) => { 
    const { name } = req.body;

    if (!name) {
        const error = new Error('"name" is required');
        error.status = 400;
        throw error;
    }
    const newCategory = await servicesCategory.createCategory(req.body);
    res.status(201).json(newCategory);
});

router.get('/', authenticateMiddleware, async (req, res) => { 
    const category = await servicesCategory.getCategory();
    res.status(200).json(category);
});

module.exports = router;