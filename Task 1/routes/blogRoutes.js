// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');

router.get('/blog', blogController.getAllBlogs);
router.get('/blog/:id', blogController.getBlogById);
router.post('/blog', blogController.postBlog);
router.put('/blog/:id', blogController.updateBlog);

module.exports = router;
