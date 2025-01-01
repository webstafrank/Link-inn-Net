// backend/routes/postRoutes.js
const express = require('express');
const { createPost, likePost, commentOnPost } = require('../controllers/postController');
const router = express.Router();

router.post('/', createPost);
router.put('/:id/like', likePost);
router.put('/:id/comment', commentOnPost);

module.exports = router;

