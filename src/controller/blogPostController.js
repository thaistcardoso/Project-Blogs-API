const express = require('express');

const router = express.Router();

const servicesBlogPost = require('../services/blogPostService');

const { authenticateMiddleware } = require('../middlewares/auth');

router.get('/', authenticateMiddleware, async (_req, res) => { 
    const getPost = await servicesBlogPost.getAllPost();
    console.log('getpost', getPost);
    res.status(200).json(getPost);
});

module.exports = router;