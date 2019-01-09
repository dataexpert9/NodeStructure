const express = require('express');

const fs = require('fs');


const router = express.Router();

const Auth = require('../middlewares/AuthMiddleware');

const BlogController = require('../controllers/BlogController');

router.get('/',BlogController.getAllBlogs);
router.get('/:Id', BlogController.getBlog);
router.patch('/:Id',Auth, BlogController.editBlog);
router.delete('/:Id',Auth, BlogController.deleteBlog);
router.post('/', Auth,BlogController.addBlog);


module.exports = router;
